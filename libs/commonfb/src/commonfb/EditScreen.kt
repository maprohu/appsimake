package commonfb

import bootstrap.*
import common.None
import common.Some
import common.orEmpty
import commonlib.CollectionWrap
import commonshr.invoke
import commonshr.plusAssign
import commonui.*
import domx.*
import firebase.firestore.*
import firebaseshr.*
import fontawesome.*
import killable.KillSet
import killable.Killables
import killable.addedTo
import killable.seq
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.dom.*
import rx.*
import styles.scrollVertical

data class TabConfig(
    val icon: String,
    val node: (KillSet) -> Node
)

fun tabsConfig(
    ks: KillSet,
    ts: Collection<TabConfig>
): FormConfig {
    val active = Var(0)

    val nodes = ts.map { tc ->
        lazy { tc.node(ks) }
    }

    return FormConfig(
        tabs = {
            ts.forEachIndexed { idx, tc ->
                faTab(
                    ks,
                    tc.icon,
                    Rx(ks) { active() == idx }
                ) {
                    clickEvent {
                        active.now = idx
                    }
                }
            }
        },
        form = {
            val root = RootPanel(this)

            active.forEach(ks) { idx ->
                root.setRoot(nodes[idx].value)
            }
        }
    )
}

data class FormConfig(
    val tabs: HTMLDivElement.() -> Unit = {},
    val form: HTMLDivElement.() -> Unit
)
data class EditScreenConfig<T: HasFBProps<*>>(
    val title: String,
    val form: (T, KillSet) -> FormConfig
)

fun <T: HasFBProps<*>> EditScreenConfig<T>.build(
    ks: KillSet,
    panel: RootPanel,
    item: T,
    close: () -> Unit,
    db: Firestore
) {

    item.props.rollback()

    ks += item.props.onDeleted.add(close)

    val isSaving = Var(false)
    val canSave = Rx(ks) { item.props.dirty() && item.props.isValid() }
    val showDelete = Rx(ks) { item.props.isPersisted() }
    val showDropDown = Rx(ks) { showDelete() }
    val canDelete = Rx(ks) { item.props.isPersisted() && !isSaving() }

    val idListenerSeq = ks.seq()

    val docRefOpt = Rx(ks) {
        item.props.id().let {
            if (it is IdState.Persisted) it.id.docRef(db)
            else null
        }
    }

    docRefOpt.forEach(ks) {  dr ->
        if (dr != null) {
            idListenerSeq %= dr.onSnapshot {
                isSaving.now = false
            }
        } else {
            idListenerSeq.clear()
        }
    }

    fun save() {
        if (canSave.now) {
            isSaving.now = true

            docRefOpt.now?.let { dr ->
                dr.set(
                    item.props.merge(),
                    setOptionsMerge()
                )
            } ?: run {
                val ref = item.props.collection.collectionRef(db).doc()
                item.props.persistedFB(ref.id)
                ref.set(
                    item.props.write()
                )
                ks += ref.listen(item)
            }
        }
    }

    fun back() {
        close()
    }

    fun delete() {
        isSaving.now = true
        GlobalScope.launch {
            // TODO check if this works offline. guess not...
            item.props.docWrapOrFail.docRef(db).delete().await()
            isSaving.now = false
        }
    }


    val fc = form(item, ks)

    panel.newRoot {
        screenLayout(ks) {

            top {
                spinner.visibility.now = isSaving

                left {
                    div {
                        cls {
                            btnGroup
                            m1
                        }
                        faButton(Fa.chevronLeft) {
                            cls.btnSecondary
                            rxDisplayed(ks) {
                                !item.props.dirty()
                            }
                            clickEvent {
                                back()
                            }
                        }
                        faButton(Fa.chevronLeft) {
                            cls.btnSuccess
                            span.cls {
                                fa.save
                                ml1
                            }
                            rxDisplayed(ks, canSave)
                            clickEvent {
                                item.props.save()
                                back()
                            }
                        }
                        faButton(Fa.backspace) {
                            cls.btnDanger
                            rxDisplayed(ks) {
                                item.props.dirty() && !canSave()
                            }
                            clickEvent {
                                back()
                            }
                        }
                        dropdownSplit {
                            cls.btnSuccess
                            rxDisplayed(ks, canSave)
                        }
                        div {
                            rxDisplayed(ks, canSave)
                            cls.dropdownMenu
                            dropdownItemAnchor {
                                anchor {
                                    cls {
                                        textDanger
                                    }
                                }
                                icon.cls.fa.backspace
                                text {
                                    innerText = "Discard"
                                }
                                clickEvent {
                                    back()
                                }
                            }
                        }

                    }

//                        faButtonSpan {
//                            rxClasses {
//                                if (item.props.dirty()) {
//                                    listOf(Fa.undo)
//                                } else {
//                                    listOf(Fa.chevronLeft)
//                                }
//                            }
//                        }
                    middleTitle {
                        innerText = this@build.title
                    }
                    tabs {
                        fc.tabs(this)
                    }
                    right {
                        cls {
                            dFlex
                            flexRow
                            alignItemsCenter
                        }
                        div {
                            cls {
                                m1
                                btnGroup
                            }
                            faButton(Fa.save) {
                                cls.btnPrimary
                                rxEnabled(ks, canSave)
                                clickEvent { save() }
                            }
                            dropdownGroup(Cls.btnPrimary) {
                                element.rxDisplayed(ks, showDropDown)
                                menu {
                                    cls.dropdownMenuRight
                                    dropdownItemAnchor {
                                        anchor {
                                            cls {
                                                textDanger
                                            }
                                            rxDisplayed(ks, showDelete)
                                            rxAnchorClick(ks, canDelete) {
                                                delete()
                                            }
                                        }
                                        icon.cls.fa.trashAlt
                                        text {
                                            innerText = "Delete"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            main {
                fc.form(this)
            }
        }

    }
}

fun Element.scrollForm(fn: HTMLFormElement.() -> Unit) {
    cls {
        dFlex
        flexColumn
        scrollVertical
    }

    div {
        cls {
            dFlex
            flexColumn
        }
        form {
            cls.p1
            fn()
        }
    }
}

fun HTMLInputElement.textProp(
    ks: KillSet,
    prop: ScalarProp<*, String>
) {
    value = prop.current.now.getOrDefault("")
    listenInput { prop.current.set(it) }
    validProp(ks, prop)
}
fun HTMLTextAreaElement.textProp(
    ks: KillSet,
    prop: ScalarProp<*, String>
) {
    value = prop.current.now.getOrDefault("")
    listenInput { prop.current.set(it) }
    return validProp(ks, prop)
}

inline fun <reified E: Enum<E>> HTMLSelectElement.enumProp(
    noinline ks: KillSet,
    prop: ScalarProp<*, E>
) {
    option {
        value = ""
        innerText = "<please select>"
    }
    enumValues<E>().forEach { s ->
        option {
            value = s.name
            innerText = s.name
        }
    }
    value = prop.current.now.map { it.name }.orEmpty()

    changeEvent {
        prop.current.now =
                if (value.isNullOrBlank()) None
                else Some(enumValueOf(value))
    }

    return validProp(ks, prop)
}

fun Element.validProp(ks: KillSet, prop: Prop<*>) {
    rxClass(ks, Cls.isInvalid) { !prop.isValid() }
}

fun Element.formGroup(lbl: String, fn: HTMLDivElement.(labelFor: Element.() -> Unit) -> Unit) {
    div {
        cls {
            formGroup
            dFlex
            flexColumn
            flexFixedSize()
        }
        val l = label {
            cls {
                flexFixedSize()
                m1
            }
            innerText = lbl
        }
        fn {
            l.htmlFor = this.ref
        }
    }
}

