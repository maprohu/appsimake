package ideas

import bootstrap.*
import common.obj
import domx.*
import firebase.Promise
import firebase.firestore.DocItem
import fontawesome.spinner
import killable.Killables
import rx.Rx
import rx.Var
import styles.scrollVertical

data class IdeaData(
    val title: String = "",
    val text: String = ""
) {
    constructor(idea: Idea) : this(
        title = idea.title,
        text = idea.text
    )

    fun toIdea() = obj<Idea>().also {
        it.title = title
        it.text = text
    }
}

fun LoggedIn.editIdea(
    item: DocItem<Idea>? = null,
    onBack: () -> Unit = { main() }
) {
    val savedData = Var(item?.let { it.data.now.toIdeaData() })
    val title = Var(savedData.now?.title ?: "")
    val text = Var(savedData.now?.text ?: "")
    val isSaving = Var(false)
    val editingData = Rx {
        IdeaData(
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

    fun setupSavedState(id: String) {
        val ref = userIdeasRef.doc(id)
        val toSave = editingData.now
        savePromise = {
            ref
                .set(toSave.toIdea())
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

        return userIdeasRef.add(
            toSave.toIdea()
        ).then { docRef ->
            savedData.now = toSave

            killables += docRef
                .onSnapshot { d ->
                    if (d.exists) {
                        d.data<Idea>().also { i ->
                            savedData.now = IdeaData(i)
                        }
                    } else {
                        savedData.now = null
                    }
                }

            setupSavedState(docRef.id)
        }
    }


    if (item==null) {
        savePromise = { saveNew() }
    } else {
        killables += item.data.forEach { savedData.now = it.toIdeaData() }
        setupSavedState(item.id)
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


    base.newRoot {
        row {
            flexFixedSize()
            padding2()
            borderBottom()
            bgLigth()
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
