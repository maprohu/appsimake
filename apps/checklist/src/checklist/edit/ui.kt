package checklist.edit

import bootstrap.*
import common.events
import commonshr.*
import commonui.widget.*
import domx.div
import domx.*
import fontawesome.*
import killable.NoKill

fun Edit.ui(): TopAndContent {

    return TopAndContent(
        topbar = factory.topbar {
            slots.left.backSaveDiscard
            title %= "Edit Checklist"
            right.saveButton
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
                            required
                            bindTo(editing.current.name.rxv)
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
                                    bindTo(adder)
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
                                items.events(NoKill).map { cl ->
                                    factory.inputGroup {
                                        cls.m1
                                        input {
                                            required
                                            bindTo(cl.name.rxv)
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