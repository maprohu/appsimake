package commonfb

import bootstrap.*
import common.None
import common.Some
import common.orEmpty
import commonlib.CollectionWrap
import commonshr.invoke
import commonui.*
import domx.*
import firebase.firestore.*
import firebaseshr.*
import fontawesome.*
import killable.Killable
import killable.Killable.Companion.empty
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.dom.*
import rx.*
import styles.scrollVertical

data class TabConfig(
    val icon: String,
    val node: (Killables) -> Node
)

fun tabsConfig(
    ks: Killables,
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
                    tc.icon,
                    Rx { active() == idx }
                ) {
                    clickEvent {
                        active.now = idx
                    }
                }
            }
        },
        form = {
            val root = RootPanel(this)

            active.forEach { idx ->
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
    val form: (T, Killables) -> FormConfig
)

fun <T: HasFBProps<*>> EditScreenConfig<T>.build(
    killables: Killables,
    panel: RootPanel,
    item: T,
    close: () -> Unit,
    db: Firestore
) {

    item.props.rollback()

    killables += item.props.onDeleted.add(close)

    val isSaving = Var(false)
    val canSave = Rx { item.props.dirty() && item.props.isValid() }
    val showDelete = Rx { item.props.isPersisted() }
    val showDropDown = Rx { showDelete() }
    val canDelete = Rx { item.props.isPersisted() && !isSaving() }

    val idListenerSeq = killables.seq()

    val docRefOpt = Rx {
        item.props.id().let {
            if (it is IdState.Persisted) it.id.docRef(db)
            else null
        }
    }.addedTo(killables)

    docRefOpt.forEach {  dr ->
        if (dr != null) {
            idListenerSeq += dr.onSnapshot {
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
                killables += ref.listen(item)
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


    val fc = form(item, killables)

    panel.newRoot {
        screenLayout(killables) {

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
                            rxDisplayed {
                                !item.props.dirty()
                            }.addedTo(killables)
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
                            rxDisplayed(canSave)
                            clickEvent {
                                item.props.save()
                                back()
                            }
                        }
                        faButton(Fa.backspace) {
                            cls.btnDanger
                            rxDisplayed {
                                item.props.dirty() && !canSave()
                            }.addedTo(killables)
                            clickEvent {
                                back()
                            }
                        }
                        dropdownSplit {
                            cls.btnSuccess
                            rxDisplayed(canSave)
                        }
                        div {
                            rxDisplayed(canSave)
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
                                rxEnabled(canSave)
                                clickEvent { save() }
                            }
                            dropdownGroup(Cls.btnPrimary) {
                                element.rxDisplayed(showDropDown)
                                menu {
                                    cls.dropdownMenuRight
                                    dropdownItemAnchor {
                                        anchor {
                                            cls {
                                                textDanger
                                            }
                                            rxDisplayed(showDelete)
                                            rxAnchorClick(canDelete) {
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
    prop: ScalarProp<*, String>
): Killable {
    value = prop.current.now.getOrDefault("")
    listenInput { prop.current.set(it) }
    return validProp(prop)
}
fun HTMLTextAreaElement.textProp(
    prop: ScalarProp<*, String>
): Killable {
    value = prop.current.now.getOrDefault("")
    listenInput { prop.current.set(it) }
    return validProp(prop)
}

inline fun <reified E: Enum<E>> HTMLSelectElement.enumProp(
    prop: ScalarProp<*, E>
): Killable {
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

    return validProp(prop)
}

fun Element.validProp(prop: Prop<*>): Killable {
    val killables = Killables()

    rxClass(Cls.isInvalid) { !prop.isValid() }
    return killables
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

