package tasks

import bootstrap.*
import common.ListenableMutableList
import commonfb.*
import commonui.RootPanel
import domx.*
import fontawesome.*
import killable.Killable
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var
import rx.add
import rx.diffs
import styles.widthAuto
import taskslib.Tag
import taskslib.Task
import kotlin.browser.document


fun LoggedIn.editTask(
    killables: Killables,
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) {
    EditScreenConfig<Task>(
        "Task"
    ) { item, eks ->
        tabsConfig(
            eks,
            listOf(
                TabConfig(Fa.list) {
                    document.div {
                        cls.flexGrow1
                        scrollForm {
                            cls {
                                dFlex
                                flexColumn
                            }
                            formGroup("Title") { labelFor ->
                                input {
                                    labelFor(this)
                                    cls {
                                        flexFixedSize()
                                        m1
                                        formControl
                                        widthAuto
                                    }
                                    type = "text"
                                    eks += textProp(item.title)
                                }
                            }

                            formGroup("Text") { lf ->
                                textarea {
                                    lf(this)
                                    cls {
                                        flexFixedSize()
                                        m1
                                        formControl
                                        widthAuto
                                    }
                                    rows = 5
                                    eks += textProp(item.text)
                                }

                            }
                            formGroup("Status") { lf ->
                                select {
                                    lf(this)
                                    cls {
                                        m1
                                        customSelect
                                        widthAuto
                                    }
                                    eks += enumProp(item.status)
                                }
                            }
                        }
                    }
                },
                TabConfig(Fa.tags) { ks ->
                    tagsEditor(item, ks)
                },
                TabConfig(Fa.comments) {
                    document.div
                }
            )
        )
    }.build(
        killables,
        panel,
        task,
        close,
        userTasks,
        db
    )

}
