package tasks

import bootstrap.*
import common.*
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import commonui.screenLayout
import domx.*
import firebase.firestore.*
import firebaseshr.IdState
import fontawesome.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import rx.Rx
import rx.Var
import rx.rxClasses
import rx.set
import styles.scrollVertical
import taskslib.Task
import taskslib.TaskStatus


fun LoggedIn.editTask(
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : () -> Unit {
    task.props.rollback()

    val killables = Killables()

    val isSaving = Var(false)
    val canSave = Rx { task.props.dirty() && !isSaving() && task.title.current().any { it.isNotBlank() } }
    val showDelete = Rx { task.props.isPersisted() }
    val showDropDown = Rx { showDelete() }
    val canDelete = Rx { task.props.isPersisted() && !isSaving() }

    fun save() {
        if (canSave.now) {
            isSaving.now = true

            task.props.id.now.map { s ->
                GlobalScope.launch {
                    userTasksRef.doc(s.id).set(
                        task.props.merge(),
                        setOptionsMerge()
                    ).await()
                    isSaving.now = false
                }
            }.getOrElse {
                GlobalScope.launch {
                    val ref = userTasksRef.add(
                        task.props.write()
                    ).await()
                    task.props.persisted(ref.id)
                    killables += ref.listen(task)
                    killables += task.props.onDeleted.add(close)

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
            userTasks.doc(task.props.idOrFail).ref.delete().await()
            isSaving.now = false
        }
    }

    panel.newRoot {
        screenLayout {
            top {
                left.btnButton {
                    rxClasses {
                        if (task.props.dirty()) {
                            listOf(Cls.btnDanger)
                        } else {
                            listOf(Cls.btnSecondary)
                        }
                    }
                    faButtonSpan {
                        rxClasses {
                            if (task.props.dirty()) {
                                listOf(Cls.faUndo)
                            } else {
                                listOf(Cls.faChevronLeft)
                            }
                        }
                    }
                    clickEvent {
                        back()
                    }
                }
                middleTitle {
                    innerText = "Edit Task"
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
                            spinnerBorder
                            spinnerBorderSm
                        }
                        rxDisplayed(isSaving)
                    }
                    div {
                        cls {
                            btnGroup
                        }
                        faButton(Cls.faSave) {
                            cls.btnPrimary
                            rxEnabled(canSave)
                            clickEvent { save() }
                        }
                        div {
                            rxDisplayed(showDropDown)
                            cls {
                                btnGroup
                                dropdown
                            }
                            attr["data-toggle"] = "dropdown"
                            button {
                                cls {
                                    btn
                                    btnPrimary
                                    dropdownToggle
                                }
                            }
                            div {
                                cls {
                                    dropdownMenu
                                    dropdownMenuRight
                                }
                                a {
                                    rxDisplayed(showDelete)
                                    cls {
                                        dropdownItem
                                        textDanger
                                    }
                                    span {
                                        cls {
                                            fas
                                            faTrashAlt
                                            mr2
                                        }
                                    }
                                    span {
                                        innerText = "Delete"
                                    }
                                    rxAnchorClick(canDelete) {
                                        delete()
                                    }
                                }
                            }
                        }
                    }


                }
            }
            main {
                cls {
                    dFlex
                    flexColumn
                }
                classes += scrollVertical

                div {
                    cls {
                        m2
                        dFlex
                        flexColumn
                    }
                    form {
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
                                value = task.title.current.now.getOrDefault("")
                                listenInput { task.title.current.set(it) }
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
                                value = task.text.current.now.getOrDefault("")
                                listenInput { task.text.current.set(it) }
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
                                option {
                                    value = ""
                                    innerText = "<please select>"
                                }
                                TaskStatus.values().forEach { s ->
                                    option {
                                        value = s.name
                                        innerText = s.name
                                    }
                                }
                                value = task.status.current.now.map { it.name }.orEmpty()

                                changeEvent {
                                    task.status.current.now =
                                        if (value.isNullOrBlank()) None
                                        else Some(TaskStatus.valueOf(value))
                                }

                            }
                        }

                    }
                }

            }
        }

    }

    return { killables.kill() }
}
