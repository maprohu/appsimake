package tasks

import bootstrap.*
import common.plus
import commonfb.*
import commonui.RootPanel
import commonui.faButton
import domx.*
import fontawesome.*
import killable.Killable
import killable.Killables
import rx.diffs
import styles.cursorPointer
import styles.lineHeightInherit
import taskslib.Task


fun LoggedIn.editTask(
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : Killable {
    return EditScreenConfig<Task>(
        "Task"
    ) { item ->
        val killables = Killables()
        scrollForm {
            div {
                cls.formGroup
                label {
                    innerText = "Title"
                }
                input {
                    cls {
                        formControl
                    }
                    type = "text"
                    killables += textProp(item.title)
                }
            }

            div {
                cls.formGroup
                label {
                    innerText = "Text"
                }
                textarea {
                    cls {
                        formControl
                    }
                    rows = 5
                    killables += textProp(item.text)
                }
            }
            div {
                cls.formGroup
                label {
                    innerText = "Status"
                }
                select {
                    cls {
                        customSelect
                    }
                    killables += enumProp(item.status)
                }
            }
            div {
                cls.formGroup
                label {
                    innerText = "Tags"
                }
                div {

                    item.tags.current.diffs {  }
                }
                div {
                    cls.inputGroup
                    val tag = input {
                        cls.formControl
                        type = "text"
                    }

                    div {
                        cls.inputGroupAppend
                        button {
                            cls {
                                btn
                                btnOutlineSecondary
                                fa {
                                    plus
                                }
                            }
                            clickEvent {
                                item.tags.current.transform { c -> c + tag.value }
                            }
                        }
                        button {
                            cls {
                                btn
                                btnOutlineSecondary
                                fa {
                                    search
                                }
                            }
                        }
                    }
                }

            }


        }
        killables
    }.build(
        panel,
        task,
        close,
        userTasks,
        db
    )

}
