package tasks

import bootstrap.*
import common.None
import common.Optional
import common.Some
import common.dyn
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import commonui.screenLayout
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.DocumentReference
import firebase.firestore.connect
import firebase.firestore.listen
import firebaseshr.pt
import fontawesome.*
import killable.Killables
import rx.Rx
import rx.Var
import rx.rxClasses
import rx.set
import styles.scrollVertical
import taskslib.Task
import kotlin.js.Promise


fun LoggedIn.editTask(
    panel: RootPanel,
    item: DocItem<dynamic>? = null,
    close: () -> Unit
) : () -> Unit {
    val killables = Killables()

    val persistedData = Var<Optional<dynamic>>(None)
    val docExists = Rx { !persistedData().isEmpty() }

    val task = Task()


    lateinit var savePromise : () -> Promise<*>
    lateinit var deletePromise : () -> Promise<*>

    fun setupSavedState(ref: DocumentReference) {
        savePromise = {
            ref.set(task.pt.merge())
        }
        deletePromise = {
            ref.delete()
        }
    }

    fun saveNew(): Promise<*> {
        return userTasksRef.add(
            task.pt.write()
        ).then { docRef ->
            killables += docRef.listen(
                persistedData
            )
            setupSavedState(docRef)
        }
    }

    if (item != null) {
        task.pt.rollbackToPersisted()
        killables += item.data.forEach {
            persistedData.now = Some(it)
        }
        killables += item.deleted.add {
            persistedData.now = None
        }
        setupSavedState(userTasksRef.doc(item.id))
    } else {
        savePromise = { saveNew() }
    }

    @Suppress("RemoveExplicitTypeArguments")
    connect(Rx<dynamic> { persistedData().getOrElse { dyn() } }, task)

    val isSaving = Var(false)
    val canSave = Rx { task.pt.shouldWrite() && !isSaving() && task.title.current().any { it.isNotBlank() } }
    val showDelete = Rx { docExists() }
    val showDropDown = Rx { showDelete() }
    val canDelete = Rx { docExists() && !isSaving() }


    fun save() {
        if (canSave.now) {
            isSaving.now = true
            savePromise()
                .then { isSaving.now = false }
        }
    }

    fun back() {
        close()
    }

    fun delete() {
        isSaving.now = true
        deletePromise()
            .then {
                isSaving.now = false
                back()
            }
    }

    panel.newRoot {
        screenLayout {
            top {
                left.btnButton {
                    rxClasses {
                        if (task.pt.changed()) {
                            listOf(Cls.btnDanger)
                        } else {
                            listOf(Cls.btnSecondary)
                        }
                    }
                    faButtonSpan {
                        rxClasses {
                            if (task.pt.changed()) {
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
                                    innerText = "Csuf"
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
