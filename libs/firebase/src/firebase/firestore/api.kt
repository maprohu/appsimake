package firebase.firestore

import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.JobScope

interface HasFirestore {
    val db: Firestore

    val <D> CollectionWrap<D>.ref get() = collectionRef(db)
    val <D> DocWrap<D>.ref get() = docRef(db)

    val <D> CollectionWrap<D>.randomDoc: DocWrap<D> get() = randomDoc(db)
}

interface HasFirestoreApi: FsDocApi

interface FirestoreViewApi: FsDocApiWithHasKillSetWithCoroutineScope, SnapshotApi, JobScope
