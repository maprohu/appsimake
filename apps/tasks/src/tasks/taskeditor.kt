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
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : Killable {
    return EditScreenConfig<Task>(
        "Task"
    ) { item, killables ->
        tabsConfig(
            killables,
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
                                    killables += textProp(item.title)
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
                                    killables += textProp(item.text)
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
                                    killables += enumProp(item.status)
                                }
                            }

                            div {
                                cls {
                                    formGroup
                                }
                                label {
                                    cls.m1
                                    innerText = "Tags"
                                }
                                div {
                                    cls {
                                        dFlex
                                        flexRow
                                    }
                                    class Wrap(val tag: RxIface<Tag>) {
                                        val ks = Killables().also { ks ->
                                            killables.add(ks).also { r ->
                                                ks += r
                                            }
                                        }
                                        val node = document.div {
                                            div {
                                                cls {
                                                    border
                                                    rounded
                                                    m1
                                                    p1
                                                }
                                                span {
                                                    killables += rxTextOrEmpty {
                                                        tag().name.initial()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    val tagsList = ListenableMutableList<Wrap>()

                                    killables += listenableList(
                                        tagsList
                                    ) { w -> w.node }

                                    killables += item.tags.current.diffs {  diff ->
                                        if (diff.removed.isNotEmpty()) {
                                            val iter = tagsList.iterator()
                                            while (iter.hasNext()) {
                                                val v = iter.next()
                                                if (v.tag.now.props.idOrFail in diff.removed) {
                                                    v.ks.kill()
                                                    iter.remove()
                                                }
                                            }
                                        }

                                        for (id in diff.added) {
                                            tagsList += Wrap(tagSource.tag(id))
                                        }
                                    }

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
        panel,
        task,
        close,
        userTasks,
        db
    )

}
