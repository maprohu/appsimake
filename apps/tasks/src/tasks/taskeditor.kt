package tasks

import bootstrap.*
import common.obj
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.DocumentReference
import firebase.firestore.FieldValue
import fontawesome.spinner
import killable.Killables
import rx.Rx
import rx.Var
import styles.scrollVertical
import taskslib.Task
import kotlin.js.Promise


fun LoggedIn.editTask(
    item: DocItem<Task>? = null,
    onBack: () -> Unit = { main() }
) {
    val savedData = Var(item?.let { it.data.now })
    val title = Var(savedData.now?.title ?: "")
    val text = Var(savedData.now?.text ?: "")
    val isSaving = Var(false)
    val isSaved = Rx { title() == savedData()?.title && text() == savedData()?.text }
    val canSave = Rx { !isSaved() && !isSaving() && title().isNotBlank() }
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
        killables.kill()
        onBack()
    }

    fun delete() {
        isSaving.now = true
        deletePromise()
            .then {
                isSaving.now = false
                back()
            }
    }


    root.newRoot {
        row {
            flexFixedSize()
            padding2()
            borderBottom()
            bgLight()
            btnButton {
                flexFixedSize()
                btnSecondary()
                rxText { if (isSaved()) "Close" else "Cancel" }
                clickEvent {
                    back()
                }
            }
            div {
                flexGrow1()
            }
            div {
                rxDisplay(isSaving)
                flexCenter()
                padding2()
                spinner()
            }
            div {
                flexFixedSize()
                btnGroup()
                btnButton {
                    btnPrimary()
                    rxText {
                        when {
                            isSaving() -> "Saving..."
                            isSaved() -> "Saved"
                            else -> "Save"
                        }
                    }
                    rxEnabled(canSave)
                    clickEvent { save() }
                }
                div {
                    btnGroup()
                    dropdownToggleButton {
                        btnPrimary()
                    }
                    div {
                        dropdownMenu()
                        dropdownItemAnchor {
                            innerText = "Delete"
                            rxAnchorClick(canDelete) {
                                delete()
                            }
                        }
                    }
                }
            }
        }
        column {
            classes += scrollVertical
            flexGrow1()
            padding2()
            div {
                formGroup()
                flexFixedSize()
                label {
                    innerText = "Title"
                }
                input {
                    type = "text"
                    value = title.now
                    formControl()
                    rxInput(title)
                }
            }
            label {
                flexFixedSize()
                innerText = "Text"
            }
            textarea {
                flexGrow1()
                formControl()
                value = text.now
                rxInput(text)
            }
        }
    }
}
