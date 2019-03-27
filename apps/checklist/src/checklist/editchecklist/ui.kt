package checklist.editchecklist

import bootstrap.*
import checklist.Checklist
import commonshr.*
import commonui.editing.bind
import commonui.editing.required
import commonui.plus
import commonui.widget.*
import domx.div
import domx.*
import fontawesome.*

fun EditChecklist.ui() = editChecklistUi(
    editing.current,
    control
) {
    slots.left.backSaveDiscard
    title %= "Edit Checklist"
    right.saveDeleteButton
}

fun EditChecklistLike.editChecklistUi(
    item: Checklist,
    control: EditChecklistControl,
    topbarCustomizer: Topbar.() -> Unit
): TopAndContent {

    return TopAndContent(
        topbar = factory.topbar {
            topbarCustomizer()
        }.node,
        content = factory.scrollPane {
            pane {
                cls {
                    p1
                    column()
                }
                insert.form {

                    insert.formGroup {
                        cls.flexFixedSize()
                        label %= "Title"
                        input {
                            bind(item.name.rxv).required()
                        }
                    }
                    insert.formGroup {
                        cls.flexFixedSize()
                        label %= "Items"

                        insert.form {
                            cls.m1
                            column
                            insert.inputGroup {
                                input {
                                    required

                                    with(control) {
                                        bindValue(this@editChecklistUi, adder)
                                        performAdd = {
                                            addItem(value)
                                            adder %= ""
                                            value = ""
                                        }
                                        onsubmit {
                                            performAdd()
                                            node.focus()
                                        }
                                    }
                                }
                                append {
                                    insert.button {
                                        submit
                                        cls {
                                            btnOutlineSecondary
                                            fa.plus
                                        }
                                    }
                                }
                            }
                        }

                        node.div {
                            list(
                                control.items.events().mapLive { cl ->
                                    factory.inputGroup {
                                        cls.m1
                                        input {
                                            bind(bindings + kills, cl.name.rxv).required()
                                        }
                                        append {
                                            insert.button {
                                                cls {
                                                    btnOutlineSecondary
                                                    fa.trashAlt
                                                }
                                                click {
                                                    control.items.remove(cl)
                                                }
                                            }
                                        }
                                    }.node
                                }
                            )

                        }

                    }
                }
            }
        }.node
    )
}