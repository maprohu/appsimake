package ideas

import bootstrap.*
import common.obj
import domx.*
import firebase.firestore.DocumentReference
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

fun LoggedIn.newIdea() {
    val title = Var("")
    val text = Var("")
    val isSaving = Var(false)
    var savedDocRef : DocumentReference? = null
    val savedData = Var<IdeaData?>(null)
    val editingData = Rx {
        IdeaData(
            title = title(),
            text = text()
        )
    }
    val isSaved = Rx { editingData() == savedData() }
    val canSave = Rx { !isSaved() && !isSaving() && editingData().title.isNotBlank() }

    val killables = Killables()

    fun save() {
        if (canSave.now) {
            isSaving.now = true
            val toSave = editingData.now

            if (savedDocRef == null) {
                userIdeasRef.add(
                    toSave.toIdea()
                ).then { docRef ->
                    savedData.now = toSave
                    savedDocRef = docRef

                    savedDocRef!!
                        .onSnapshot { d ->
                            d.data<Idea>().also { i ->
                                savedData.now = IdeaData(i)
                            }
                        }
                        .also { reg -> killables.add(reg) }

                    isSaving.now = false
                }
            } else {
                savedDocRef!!
                    .set(toSave.toIdea())
                    .then { isSaving.now = false }
            }
        }
    }

    base.newRoot {
        flexColumn()
        div {
            flexFixedSize()
            flexRow()
            padding2()
            borderBottom()
            bgLigth()
            btn {
                flexFixedSize()
                btnSecondary()
                rxText { if (isSaved()) "Close" else "Cancel" }
                clickEvent {
                    killables.kill()
                    main()
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
            btn {
                flexFixedSize()
                btnPrimary()
                rxText {
                    when {
                        isSaved() -> "Saved"
                        isSaving() -> "Saving..."
                        else -> "Save"
                    }
                }
                rxEnabled(canSave)
                clickEvent { save() }
            }
        }
        div {
            classes += scrollVertical
            flexGrow1()
            padding2()
            flexColumn()
            div {
                formGroup()
                flexFixedSize()
                label {
                    innerText = "Title"
                }
                input {
                    type = "text"
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
                rxInput(text)
            }
        }
    }
}
