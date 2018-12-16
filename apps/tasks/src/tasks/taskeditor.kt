package tasks

import bootstrap.*
import common.obj
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.DocumentReference
import fontawesome.spinner
import killable.Killables
import rx.Rx
import rx.Var
import styles.scrollVertical
import kotlin.js.Promise

data class TaskData(
    val title: String = "",
    val text: String = ""
) {
    constructor(task: Task) : this(
        title = task.title,
        text = task.text
    )

    fun toTask() = obj<Task>().also {
        it.title = title
        it.text = text
    }
}

fun LoggedIn.editTask(
    item: DocItem<Task>? = null,
    onBack: () -> Unit = { main() }
) {
    val savedData = Var(item?.let { it.data.now.toTaskData() })
    val title = Var(savedData.now?.title ?: "")
    val text = Var(savedData.now?.text ?: "")
    val isSaving = Var(false)
    val editingData = Rx {
        TaskData(
            title = title(),
            text = text()
        )
    }
    val isSaved = Rx { editingData() == savedData() }
    val canSave = Rx { !isSaved() && !isSaving() && editingData().title.isNotBlank() }
    val canDelete = Rx { savedData() != null && !isSaving() }

    val killables = Killables()


    lateinit var savePromise : () -> Promise<*>
    lateinit var deletePromise : () -> Promise<*>

    fun setupSavedState(ref: DocumentReference) {
        savePromise = {
            val toSave = editingData.now
            ref
                .set(toSave.toTask())
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
        val toSave = editingData.now

        return userTasksRef.add(
            toSave.toTask()
        ).then { docRef ->
            savedData.now = toSave

            killables += docRef
                .onSnapshot { d ->
                    if (d.exists) {
                        d.data<Task>().also { i ->
                            savedData.now = TaskData(i)
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
        killables += item.data.forEach { savedData.now = it.toTaskData() }
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
