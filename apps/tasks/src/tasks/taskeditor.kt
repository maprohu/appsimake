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
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var
import rx.add
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
            cls {
                dFlex
                flexColumn
            }
            div {
                cls {
                    formGroup
                    dFlex
                    flexColumn
                }
                label {
                    cls.m1
                    innerText = "Title"
                }
                input {
                    cls {
                        m1
                        formControl
                    }
                    type = "text"
                    killables += textProp(item.title)
                }
            }

            div {
                cls.formGroup
                label {
                    cls.m1
                    innerText = "Text"
                }
                textarea {
                    cls {
                        m1
                        formControl
                    }
                    rows = 5
                    killables += textProp(item.text)
                }
            }
            div {
                cls.formGroup
                label {
                    cls.m1
                    innerText = "Status"
                }
                select {
                    cls {
                        m1
                        customSelect
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
                    ) { it.node }

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

                }
                div {
                    cls {
                        m1
                        inputGroup
                    }
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
                                    rxDisplayed { !isBusy() }
                                }
                            }
                            clickEvent {
                                if (!isBusy.now) {
                                    isBusy.now = true
                                    val v = tag.value
                                    tag.value = ""
                                    GlobalScope.launch {
                                        val tv = tagSource.byName(v)
                                        item.tags.current.add(tv.now.props.idOrFail)
                                        isBusy.now = false
                                    }
                                }
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
