package firebase.firestore

import common.*
import commonshr.CollectionWrap
import commonshr.*
import commonshr.properties.SnapshotEvent
import commonshr.properties.wrapSnapshotEvents
import firebase.HasDb
import firebaseshr.*
import killable.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Element
import rx.*
import kotlin.reflect.KProperty

fun setOptionsMerge() = obj<SetOptions> { merge = true }

//fun Settings() : Settings = obj()

inline val DocumentChangeType.Companion.added get() = "added".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.modified get() = "modified".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.removed get() = "removed".unsafeCast<DocumentChangeType>()

inline val GetOptionsSource.Companion.default get() = "default".unsafeCast<GetOptionsSource>()
inline val GetOptionsSource.Companion.server  get() = "server".unsafeCast<GetOptionsSource>()
inline val GetOptionsSource.Companion.cache   get() = "cache".unsafeCast<GetOptionsSource>()

//fun <T> queryUi(
//        query: Query,
//        element: Element,
//        callback: OnSnapshot? = null,
//        item: (T) -> Element
//): () -> Unit {
//    return query
//            .onSnapshot(
//                    { qs ->
//                        callback?.onNext?.invoke(qs)
//
//                        qs
//                                .docChanges()
//                                .forEach { dc ->
//                                    when (dc.type) {
//                                        DocumentChangeType.added -> {
//                                            element.insertAt(dc.newIndex, item(dc.doc.data()))
//                                        }
//                                        DocumentChangeType.removed -> {
//                                            element.removeAt(dc.oldIndex)
//                                        }
//                                        DocumentChangeType.modified -> {
//                                            val ie = item(dc.doc.data())
//                                            if (dc.newIndex == dc.oldIndex) element.replaceAt(dc.oldIndex, ie)
//                                            else {
//                                                element.removeAt(dc.oldIndex)
//                                                element.insertAt(dc.newIndex, ie)
//                                            }
//                                        }
//                                    }
//                                }
//                    },
//                    { error ->
//                        callback?.onError?.invoke(error)
//                        console.dir(error)
//                    }
//            )
//
//
//}

data class OnSnapshot(
        val onNext: (QuerySnapshot) -> Unit,
        val onError: (Throwable) -> Unit
) {
    constructor(
            onNext: (QuerySnapshot) -> Unit
    ) : this(onNext, {})
}

//fun <T> QueryWrap<T>.listen(
//    killables: Killables,
//    onFirst: () -> Unit = {},
//    onError: (Throwable) -> Unit = { console.dir(it) }
//): RxList<RxVal<T>> {
//    var first = true
//
//    val list = RxMutableList<Var<T>>()
//
//    query.onSnapshot(
//            { qs ->
//                if (first) {
//                    first = false
//                    onFirst()
//                }
//
//                qs
//                        .docChanges()
//                        .forEach { dc ->
//                            when (dc.type) {
//                                DocumentChangeType.added -> {
//                                    list.add(dc.newIndex, Var(dc.doc.data()))
//                                }
//                                DocumentChangeType.removed -> {
//                                    list.removeAt(dc.oldIndex)
//                                }
//                                DocumentChangeType.modified -> {
//                                    list[dc.oldIndex].now = dc.doc.data()
//                                    if (dc.newIndex != dc.oldIndex) {
//                                        list.move(dc.oldIndex, dc.newIndex)
//                                    }
//                                }
//                            }
//                        }
//
//            },
//            onError
//    ).also { killables += it }
//
//    return list
//}


fun Firestore.withDefaultSettings(): Firestore {
    settings(obj<Settings>().apply {
//        timestampsInSnapshots = true
    })
    return this
}

fun Query.onSnapshotNext(
    onNext: (QuerySnapshot) -> Unit
) : Trigger = onSnapshot(onNext, { report(it.unsafeCast<Throwable>()) })

fun Query.idDiffs(fn: ((SetDiff<String>) -> Unit)) : Trigger = onSnapshotNext { qs ->
    qs.docChanges().fold(SetDiff<String>()) { d, ch ->
        when (ch.type) {
            DocumentChangeType.added -> d.copy(added = d.added + ch.doc.id)
            DocumentChangeType.removed -> d.copy(removed = d.removed + ch.doc.id)
            else -> d
        }
    }.also(fn)
}

fun DocumentReference.onSnapshotNext(
    onNext: (DocumentSnapshot) -> Unit
) : Trigger = onSnapshot(onNext, { report(it.unsafeCast<Throwable>()) })

//data class ListenConfig<T>(
//    val list: RxMutableList<T>,
//    val create: (id: String, data: dynamic) -> T,
//    val update: T.(dynamic) -> Unit,
//    val remove: (T) -> Unit,
//    val onFirst: () -> Unit = {},
//    val onError: (Throwable) -> Unit = { console.dir(it) }
//) {
//    companion object {
//
//        fun <T: HasFBProps<*>> hasProps(
//            list: RxMutableList<T>,
//            collectionWrap: CollectionWrap<T>,
//            create: () -> T
//        ) = ListenConfig(
//            list,
//            create = { id, d ->
//                create().also { t ->
//                    t.props.apply {
//                        collection = collectionWrap
//                        persistedFB(id)
//                        extractInitial(d)
//                        live.now = true
//                    }
//                }
//            },
//            update = { d ->
//                this.props.extractInitial(d)
//            },
//            remove = { t ->
//                t.props.live.now = false
//            }
//
//        )
//    }
//}
//
//fun <T> QueryWrap<T>.listen(
//    killables: Killables,
//    config: ListenConfig<T>
//) = query.listen(killables, config)
//
//
//fun <T> Query.listen(
//    killables: Killables,
//    config: ListenConfig<T>
//) = with(config) {
//    require(list.isEmpty())
//
//    var onNext: (QuerySnapshot) -> Unit
//
//    val onEach: (QuerySnapshot) -> Unit = { qs ->
//
//        qs
//            .docChanges()
//            .forEach { dc ->
//                when (dc.type) {
//                    DocumentChangeType.added -> {
//                        list.add(dc.newIndex, create(dc.doc.id, dc.doc.data()))
//                    }
//                    DocumentChangeType.removed -> {
//                        remove(list.removeAt(dc.oldIndex))
//                    }
//                    DocumentChangeType.modified -> {
//                        update(list[dc.oldIndex], dc.doc.data())
//                        if (dc.newIndex != dc.oldIndex) {
//                            list.move(dc.oldIndex, dc.newIndex)
//                        }
//                    }
//                }
//            }
//
//    }
//
//    onNext = {
//        onFirst()
//        onNext = onEach
//        onNext(it)
//    }
//
//
//    killables += onSnapshot(
//        { qs ->
//            onNext(qs)
//        },
//        onError
//    )
//
//}

//class DocItem<T>(
//    val id: String,
//    val data: T,
//    val deleted: Killables = Killables()
//)


//fun Query.orderBy(prop: KProperty<*>) = orderBy(prop.name)

fun <T> Firestore.txDefer(fn: suspend (Transaction) -> T) : Deferred<T> {
    return runTransaction<T> {
        GlobalScope.async {
            fn(it)
        }.asPromise()
    }.asDeferred()
}

suspend fun <T> Firestore.tx(fn: suspend (Transaction) -> T) : T = txDefer(fn).await()
suspend fun <T> Firestore.txTry(fn: suspend (Transaction) -> T) : Try<T> = Try { tx(fn) }

fun <T> Try<T>.onRollback(fn: () -> T) : T = fold({ if (it is RollbackException) fn() else throw it }, { it })

class RollbackException : Exception()
fun rollback() : Nothing = throw RollbackException()
//fun launch(fn: suspend () -> Unit) {
//    GlobalScope.launch {
//        try {
//            fn()
//        } catch (e: RollbackException) {}
//    }
//}



//class QueryBuilder<T>(
//    val collectionWrap: CollectionWrap<T>,
//    var query : Query
//) {
//    infix fun <P> ScalarProp<T, Set<P>>.arrayContains(v: P) {
//        // TODO fix this. introduce collection property
//        query = query.where(name, "array-contains", write(setOf(v)).unsafeCast<Array<dynamic>>().first())
//    }
//    infix fun <P> ScalarProp<T, P>.eq(v: P) {
//        query = query.where(name, "==", write(v))
//    }
//    fun <P, T2: T> ScalarProp<T2, P>.asc() {
//        query = query.orderBy(name)
//    }
//    fun <P> ScalarProp<T, P>.desc() {
//        query = query.orderBy(name, "desc")
//    }
//}
//fun <T> CollectionWrap<T>.query(db: Firestore, fn:  QueryBuilder<T>.() -> Unit = {}): QueryWrap<T> {
//    return QueryBuilder(this, db.collection(path)).apply(fn).wrap()
//}
//
//fun <T> QueryBuilder<T>.wrap() = query.wrap<T>(collectionWrap)
//fun <T> Query.wrap(collectionWrap: CollectionWrap<T>) = QueryWrap<T>(collectionWrap, this)
//
//class QueryWrap<in T>(
//    val collectionWrap: CollectionWrap<T>,
//    val query: Query
//)
//
//fun <T: HasFBProps<*>> T.onSnapshot(d: DocumentSnapshot) {
//    if (d.exists) {
//        val data = d.data<dynamic>()
//        props.deleted = false
//        props.extractInitial(data)
//    } else {
//        props.deleted = true
//    }
//}
//
//fun <T: HasFBProps<*>> DocumentReference.listen(
//    target: T,
//    onFirst: Trigger = {}
//) : Trigger {
//    require(!target.props.live.now)
//    target.props.live.now = true
//
//    val firstOnce = onFirst.once()
//
//    val killSnapshot = onSnapshot { d ->
//        target.onSnapshot(d)
//        firstOnce()
//    }
//
//    return {
//        killSnapshot()
//        target.props.live.now = false
//    }.once()
//}
//
//
//
//fun deleteCollection(
//    ref: CollectionReference,
//    db: Firestore
//): Deferred<Unit> {
//    return GlobalScope.async {
//        suspend fun step(): Boolean {
//            val qs = ref
//                .limit(MaxBatchSize)
//                .get()
//                .await()
//
//            val batch = db.batch()
//            for (doc in qs.docs) {
//                batch.delete(doc.ref)
//            }
//            val c = batch.commit()
//            launch {
//                c.await()
//            }
//
//            return qs.size == MaxBatchSize
//        }
//
//        while (step()) {}
//    }
//
//}
//
//fun initBinder(
//    deps: HasDb
//) {
//    initBinder(
//        PropOps(
//            delete = { FieldValue.delete() },
//            serverTimestamp = { FieldValue.serverTimestamp() },
//            deleteCollection = { cw ->
//                deleteCollection(cw.collectionRef(deps), deps.db)
//            },
//            createId = {
//                it.collectionRef(deps).doc().id
//            },
//            write = { w, d ->
//                w.docRef(deps).set(d).asDeferred()
//            },
//            merge = { w, d ->
//                w.docRef(deps).set(d, setOptionsMerge()).asDeferred()
//            },
//            arrayUnion = { vs ->
//                FieldValue.arrayUnion(*vs)
//            },
//            arrayRemove = { vs ->
//                FieldValue.arrayRemove(*vs)
//            }
//        )
//
//    )
//}

suspend fun DocumentReference.exists(): Boolean {
    return get().await().exists
}


//@UseExperimental(ExperimentalCoroutinesApi::class)
//suspend fun <T> QueryWrap<T>.toSetSource(
//    killables: KillSet,
//    create: (String, dynamic) -> T,
//    update: (T, dynamic) -> Unit,
//    write: suspend (String, suspend (T) -> Unit) -> Unit
//): SetSourceWithKey<T, String> {
//    var set = emptySet<T>()
//    val cdmap = mutableMapOf<String, CompletableDeferred<T>>()
//
//    val emitter = Emitter<SetMove<T>>()
//
//    fun placeholder(id: String) = cdmap.getOrPut(id) { CompletableDeferred() }
//
//    fun addOrUpdate(id: String, data: dynamic) {
//        val cd = placeholder(id)
//        if (!cd.isCompleted) {
//            val t = create(id, data)
//            set += t
//            cd.complete(t)
//            emitter.emit(SetAdded(t))
//        } else {
//            update(cd.getCompleted(), data)
//        }
//    }
//
//    killables += query.onSnapshotNext { qs ->
//        qs.docChanges().forEach { dc ->
//            when (dc.type) {
//                DocumentChangeType.added, DocumentChangeType.modified -> {
//                    addOrUpdate(dc.doc.id, dc.doc.data())
//                }
//                DocumentChangeType.removed -> {
//                    val id = dc.doc.id
//                    val t = cdmap.remove(id)!!.getCompleted()
//                    set -= t
//                    emitter.emit(SetRemoved(t))
//                }
//            }
//        }
//    }
//
//    val qs = query.get().await()
//
//    qs.docs.forEach { qds ->
//        addOrUpdate(qds.id, qds.data())
//    }
//
//    return object : SetSourceWithKey<T, String> {
//        override val current: Set<T>
//            get() = set
//
//        override fun listen(ks: KillSet, fn: (SetMove<T>) -> Unit): Set<T> {
//            ks += emitter.add(fn)
//            return set
//        }
//
//        override fun get(k: String) = placeholder(k)
//
//        override suspend fun getOrPut(id: String, fn: suspend (T) -> Unit): T {
//            val cd = placeholder(id)
//            if (!cd.isCompleted) {
//                write(id, fn)
//            }
//            return cd.await()
//        }
//    }
//}
//
//suspend fun <T: HasFBProps<T>> QueryWrap<T>.toSetSource(
//    killables: KillSet,
//    collectionWrap: CollectionWrap<T>,
//    create: () -> T
//): SetSourceWithKey<T, String> {
//    fun createPersisted(id: String) = create().apply {
//        props.persisted(
//            collectionWrap.doc(id)
//        )
//    }
//    return toSetSource(
//        killables,
//        create = { id, data ->
//            createPersisted(id).apply {
//                initFrom(data)
//            }
//        },
//        update = { t, data ->
//            t.initFrom(data)
//        },
//        write = { id, fn ->
//            createPersisted(id)
//                .apply { fn(this) }
//                .props.save()
//        }
//    )
//
//}
//
//suspend fun <T: HasFBProps<T>> CollectionWrap<T>.toSetSource(
//    killables: KillSet,
//    db: Firestore,
//    create: () -> T
//): SetSourceWithKey<T, String> {
//    return query(db).toSetSource(
//        killables,
//        this,
//        create
//    )
//}
//
//class RxSetWithLookup<T>(
//    val set: RxSet<T>,
//    val lookup: (String) -> T?,
//    val loadAll: suspend () -> Unit
//)
//fun <T> QueryWrap<T>.toRxSetWithLookup(
//    killables: KillSet,
//    create: (String, dynamic) -> T,
//    update: (T, dynamic) -> Unit
//): RxSetWithLookup<T> {
//    val set = RxMutableSet<T>()
//    val map = mutableMapOf<String, T>()
//
//    fun addOrUpdate(id: String, data: dynamic) {
//        val existing = map[id]
//        if (existing == null) {
//            val t = create(id, data)
//            map[id] = t
//            set.add(t)
//        } else {
//            update(existing, data)
//        }
//    }
//
//    killables += query.onSnapshotNext { qs ->
//        qs.docChanges().forEach { dc ->
//            when (dc.type) {
//                DocumentChangeType.added, DocumentChangeType.modified -> {
//                    addOrUpdate(dc.doc.id, dc.doc.data())
//                }
//                DocumentChangeType.removed -> {
//                    val id = dc.doc.id
//                    map.remove(id)?.let {
//                        set.remove(it)
//                    }
//                }
//            }
//        }
//    }
//
//
//    return RxSetWithLookup(
//        set = set,
//        lookup = { map[it] },
//        loadAll = {
//            val qs = query.get().await()
//
//            qs.docs.forEach { qds ->
//                addOrUpdate(qds.id, qds.data())
//            }
//        }
//    )
//}
//fun <T: HasFBProps<T>> QueryWrap<T>.toRxSetWithLookup(
//    killables: KillSet,
//    create: () -> T
//): RxSetWithLookup<T> {
//    fun createPersisted(id: String) = create().apply {
//        props.persisted(
//            collectionWrap.doc(id)
//        )
//    }
//    return toRxSetWithLookup(
//        killables,
//        create = { id, data ->
//            createPersisted(id).apply {
//                initFrom(data)
//            }
//        },
//        update = { t, data ->
//            t.initFrom(data)
//        }
//    )
//
//}
//fun <T: HasFBProps<T>> CollectionWrap<T>.toRxSetWithLookup(
//    killables: KillSet,
//    db: Firestore,
//    create: () -> T
//): RxSetWithLookup<T> {
//    return query(db).toRxSetWithLookup(
//        killables,
//        create
//    )
//}

suspend fun flushDocs(
    vararg docs: DocumentReference
) {
    coroutineScope {
        docs.forEach { doc ->
            launch {
                val cd = CompletableDeferred<Unit>()
                doc.onSnapshot(
                    obj {
                        this.includeMetadataChanges = true
                    },
                    { ds2 ->
                        if (!ds2.metadata.hasPendingWrites) {
                            cd.complete(Unit)
                        }
                    },
                    { cd.completeExceptionally(it) }
                )
                cd.await()
            }
        }
    }
}
suspend fun flushQueries(
    vararg queries: Query
) {
    coroutineScope {
        queries.forEach { q ->
            launch {
                val qs = q.get().await()
                flushDocs(
                    *qs.docs.filter {
                        it.metadata.hasPendingWrites
                    }.map { it.ref }.toTypedArray()
                )
            }
        }
    }
}

//fun <T: HasFBProps<*>> RxSet<T>.ids(ks: KillSet): RxSet<String> {
//    val ids = RxMutableSet<String>()
//
//    process(ks) { item ->
//        val id = item.props.idOrFail
//        ids += id
//        kills += { ids -= id }
//    }
//
//    return ids
//}
//
//fun <T: HasFBProps<*>> ReceiveChannel<SnapshotEvent>.listEvents(
//    deps: CoroutineScope,
//    collectionWrap: CollectionWrap<T>,
//    create: () -> T
//): ReceiveChannel<ListEvent<T>> {
//    fun createPersisted(id: String) = create().apply {
//        props.persisted(
//            collectionWrap.doc(id)
//        )
//    }
//    return wrapSnapshotEvents(
//        deps,
//        create = { id, data ->
//            createPersisted(id).apply {
//                initFrom(data)
//            }
//        },
//        update = { data ->
//            initFrom(data)
//        }
//    )
//}
//
//fun <T: HasFBProps<*>> QueryWrap<T>.listEvents(deps: HasCsKills, create: () -> T) =
//    query
//        .documentChanges(deps)
//        .toSnapshotEvents(deps)
//        .listEvents(deps, collectionWrap, create)

