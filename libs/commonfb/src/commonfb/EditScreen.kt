package commonfb

import bootstrap.*
import common.None
import common.Some
import common.orEmpty
import commonlib.CollectionWrap
import commonui.*
import domx.*
import firebase.firestore.*
import firebaseshr.HasProps
import firebaseshr.Prop
import firebaseshr.ScalarProp
import fontawesome.*
import killable.Killable
import killable.Killable.Companion.empty
import killable.Killables
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
data class EditScreenConfig<T: HasProps<*, String>>(
    val title: String,
    val form: (T, Killables) -> FormConfig
)

fun <T: HasProps<*, String>> EditScreenConfig<T>.build(
    panel: RootPanel,
    item: T,
    close: () -> Unit,
    wrap: CollectionWrap<T>,
    db: Firestore
): Killable {
    val killables = Killables()

    item.props.rollback()

    val isSaving = Var(false)
    val canSave = Rx { item.props.dirty() && !isSaving() && item.props.isValid() }
    val showDelete = Rx { item.props.isPersisted() }
    val showDropDown = Rx { showDelete() }
    val canDelete = Rx { item.props.isPersisted() && !isSaving() }

    fun save() {
        if (canSave.now) {
            isSaving.now = true

            item.props.id.now.map { s ->
                GlobalScope.launch {
                    wrap.doc(s.id).docRef(db).set(
                        item.props.merge(),
                        setOptionsMerge()
                    ).await()
                    isSaving.now = false
                }
            }.getOrElse {
                GlobalScope.launch {
                    val ref = wrap.collectionRef(db).add(
                        item.props.write()
                    ).await()
                    item.props.persisted(ref.id)
                    killables += ref.listen(item)
                    killables += item.props.onDeleted.add(close)

                    isSaving.now = false
                }
            }
        }
    }

    fun back() {
        close()
    }

    fun delete() {
        isSaving.now = true
        GlobalScope.launch {
            wrap.doc(item.props.idOrFail).docRef(db).delete().await()
            isSaving.now = false
        }
    }


    val fc = form(item, killables)

    panel.newRoot {
        screenLayout {
            top {
                left {
                    btnButton {
                        cls.m1
                        rxClasses {
                            if (item.props.dirty()) {
                                listOf(Cls.btnDanger)
                            } else {
                                listOf(Cls.btnSecondary)
                            }
                        }
                        faButtonSpan {
                            rxClasses {
                                if (item.props.dirty()) {
                                    listOf(Fa.undo)
                                } else {
                                    listOf(Fa.chevronLeft)
                                }
                            }
                        }
                        clickEvent {
                            back()
                        }
                    }
                    middleTitle {
                        innerText = this@build.title
                    }
                    element {
                        div {
                            cls {
                                m1
                                spinnerBorder
                                spinnerBorderSm
                            }
                            rxDisplayed(isSaving)
                        }
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

    return killables
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

fun Element.formGroup(lbl: String, fn: HTMLDivElement.((labelFor: Element) -> Unit) -> Unit) {
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
            l.htmlFor = it.ref
        }
    }
}

