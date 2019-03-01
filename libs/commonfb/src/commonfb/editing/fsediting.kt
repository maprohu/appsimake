package commonfb.editing

import commonshr.Action
import commonshr.FsDoc
import commonshr.properties.RxBase
import commonui.editing.EditingApi
import commonui.editing.RxEditing
import firebase.firestore.HasFirestoreApi

interface FsEditingApi: EditingApi, HasFirestoreApi {


    fun <T: RxBase<*>> rxEditing(initial: FsDoc<T>, preSave: suspend (T) -> Unit) = RxEditing(initial.doc, kills) { current ->
        preSave(current)
        FsDoc(
            initial.id,
            current
        ).save()
    }

}