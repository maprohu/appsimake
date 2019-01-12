package tasks

import bootstrap.*
import common.ListenableMutableList
import common.plus
import commonfb.*
import commonui.RootPanel
import domx.*
import fontawesome.*
import killable.Killable
import killable.Killables
import killable.add
import rx.RxIface
import rx.Var
import rx.diffs
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
                    killables += item.tags.current.diffs {  diff ->
                        if (diff.removed.isNotEmpty()) {
                            val it = tagsList.iterator()
                            while (it.hasNext()) {
                                val v = it.next()
                                if (v.tag.now.props.idOrFail in diff.removed) {
                                    v.ks.kill()
                                    it.remove()
                                }
                            }
                        }

                        for (id in diff.added) {
                            tagsList += Wrap(tagSource.tag(id))
                        }
                    }

                    killables += listenableList(
                        tagsList
                    ) { it.node }
                }
                div {
                    cls.inputGroup
                    val isBusy = Var(false)
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
                                span {
                                    cls {
                                        spinnerBorder
                                        spinnerBorderSm
                                    }
                                    rxDisplayed(isBusy)
                                }
                                span {
                                    cls {
                                        fa {
                                            plus
                                        }
                                    }
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
