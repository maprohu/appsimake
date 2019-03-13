package checklist.edit

import bootstrap.*
import commonshr.*
import commonui.editing.bind
import commonui.editing.required
import commonui.plus
import commonui.widget.*
import domx.div
import domx.*
import fontawesome.*
import killable.NoKill

fun Edit.ui(): TopAndContent {

    return TopAndContent(
        topbar = factory.topbar {
            slots.left.backSaveDiscard
            title %= if (shouldPreserve) "Edit Checklist" else "New Checklist"
            right.saveDeleteButton
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
                            bind(editing.current.name.rxv).required()
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
                                    bindValue(this@ui, adder)
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
                                items.events().mapLive { cl ->
                                    factory.inputGroup {
                                        cls.m1
                                        input {
                                            bind(editing + kills, cl.name.rxv).required()
                                        }
                                        append {
                                            insert.button {
                                                cls {
                                                    btnOutlineSecondary
                                                    fa.trashAlt
                                                }
                                                click {
                                                    items.remove(cl)
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