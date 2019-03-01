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
    var submitter = {}

    return TopAndContent(
        topbar = factory.topbar {
            left.button {
                m1p2
                fa.chevronLeft

                node.rxClass {
                    if (dirty()) Cls.btnDanger
                    else Cls.btnSecondary
                }

                click {
                    loggedIn.back()
                }
            }
            title %= "Edit Checklist"
            right.button {
                m1p2
                primary
                fa.save
                click {
                    submitter()
                }
            }
        }.node,
        content = factory.scrollPane {
            pane {
                cls {
                    p1
                    column()
                }
                insert.form {
                    val mainForm = this
                    insert.formGroup {
                        cls.flexFixedSize()
                        label %= "Title"
                        input {
                            required
                            bindTo(initial.name.rxv)
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
                                    fun performAdd() {
                                        addItem(value)
                                        value = ""
                                    }
                                    submitter = {
                                        if (value.isNotBlank()) {
                                            performAdd()
                                        }
                                        mainForm.hiddenSubmit.node.click()
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
                                    insert.inputGroup {
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