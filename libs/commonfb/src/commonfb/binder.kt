package commonfb

import firebase.DbDeps
import firebase.firestore.Firestore
import firebase.firestore.docRef
import firebase.firestore.setOptionsMerge
import firebaseshr.HasFBProps
import kotlin.js.Promise

fun <T: HasFBProps<T>> T.save(db: Firestore): Promise<Unit> {
    return props.docWrapOrFail.docRef(db).set(
        props.write()
    )
}

fun <T: HasFBProps<T>> T.merge(db: Firestore): Promise<Unit> {
    return props.docWrapOrFail.docRef(DbDeps(db)).set(
        props.merge(),
        setOptionsMerge()
    )
}
