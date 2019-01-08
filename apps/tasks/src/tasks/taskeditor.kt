package tasks

import bootstrap.*
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import commonui.screenLayout
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.DocumentReference
import firebase.firestore.FieldValue
import fontawesome.*
import killable.Killables
import rx.Rx
import rx.Var
import rx.rxClass
import rx.rxClasses
import styles.scrollVertical
import taskslib.Task
import kotlin.js.Promise


fun LoggedIn.editTask(
    panel: RootPanel,
    item: DocItem<Task>? = null,
    close: () -> Unit
) : () -> Unit {
    val savedData = Var(item?.let { it.data.now })
    val title = Var(savedData.now?.title ?: "")
    val text = Var(savedData.now?.text ?: "")
    val isSaving = Var(false)
    val isSaved = Rx { title() == savedData()?.title ?: "" && text() == savedData()?.text ?: "" }
    val canSave = Rx { !isSaved() && !isSaving() && title().isNotBlank() }
    val showDelete = Rx { savedData() != null }
    val showDropDown = Rx { showDelete() }
    val canDelete = Rx { savedData() != null && !isSaving() }

    val killables = Killables()

    fun editingData() = Task().apply {
        this.title = title.now
        this.text = text.now
        this.ts = FieldValue.serverTimestamp()
    }

    lateinit var savePromise : () -> Promise<*>
    lateinit var deletePromise : () -> Promise<*>

    fun setupSavedState(ref: DocumentReference) {
        savePromise = {
            val toSave = editingData()
            ref
                .set(toSave.wrapped)
                .then { savedData.now = toSave }
        }
        deletePromise = {
            ref.delete()
        }
    }

    fun save() {
        if (canSave.now) {
            isSaving.now = true
            savePromise()
                .then { isSaving.now = false }
        }
    }

    fun saveNew(): Promise<*> {
        val toSave = editingData()

        return userTasksRef.add(
            toSave.wrapped
        ).then { docRef ->
            savedData.now = toSave

            killables += docRef
                .onSnapshot { d ->
                    if (d.exists) {
                        d.data<Any>().also { i ->
                            savedData.now = Task(i)
                        }
                    } else {
                        savedData.now = null
                    }
                }

            setupSavedState(docRef)
        }
    }


    if (item==null) {
        savePromise = { saveNew() }
    } else {
        killables += item.data.forEach { savedData.now = it }
        setupSavedState(userTasksRef.doc(item.id))
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
                        if (isSaved()) {
                            listOf(Cls.btnSecondary)
                        } else {
                            listOf(Cls.btnDanger)
                        }
                    }
                    faButtonSpan {
                        rxClasses {
                            if (isSaved()) {
                                listOf(Cls.faChevronLeft)
                            } else {
                                listOf(Cls.faUndo)
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
                                value = title.now
                                rxInput(title)
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
                                value = text.now
                                rxInput(text)
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
