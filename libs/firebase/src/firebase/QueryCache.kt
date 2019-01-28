package firebase

import common.*
import commonlib.CollectionWrap
import commonshr.SetAdded
import commonshr.SetDiff
import commonshr.SetMove
import firebase.firestore.*
import firebaseshr.HasFBProps
import firebaseshr.HasProps
import killable.Killable
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import rx.Var

class WriteData(
    val data: dynamic,
    val merge: Boolean
)

class QueryCache<T>(
    private val collectionReference: CollectionReference,
    private val write: (T) -> WriteData,
    private val extractId: (T) -> String,
    private val listenConfig: (ListenableMutableList<T>) -> ListenConfig<T>,
    killables: Killables
) {
    private val map = mutableMapOf<String, CompletableDeferred<T>>()

    private val rxMap = Var(emptyMap<String, Var<Optional<T>>>())

    private val list = ListenableMutableList<T>()


    private fun getVar(id: String): Var<Optional<T>> {
        return rxMap.now[id]
            ?: Var<Optional<T>>(None).also { v ->
                rxMap.transform { m -> m + (id to v) }
            }
    }

    val emitter
        get() = list.emitter

    fun placeholder(id: String): CompletableDeferred<T> {
        return map.getOrPut(id) {
            CompletableDeferred()
        }
    }

    init {
        list.addListener(
            ListenableList.Listener(
                added = { _, t ->
                    placeholder(extractId(t)).complete(t)
                },
                removed = { _, t ->
                    map -= extractId(t)
                }
            )
        )

        collectionReference.listen(
            killables,
            listenConfig(list)
        )
    }

    suspend fun getAll(): List<T> {
        val qs = collectionReference.get().await()

        val list = mutableListOf<T>()

        for (qds in qs.docs) {
            list.add(
                placeholder(qds.id).await()
            )
        }

        return list
    }

    suspend fun get(id: String, create: suspend () -> T): T {
        val current = map[id]

        return if (current == null) {
            val def = CompletableDeferred<T>()
            map[id] = def

            val writeData = write(create())

            collectionReference.doc(id).set(
                writeData.data,
                obj {
                    merge = writeData.merge
                }
            )

            def.await()
        } else {
            current.await()
        }
    }

    companion object {
        fun <T: HasFBProps<T>> hasProps(
            db: Firestore,
            collectionWrap: CollectionWrap<T>,
            create: () -> T,
            killables: Killables
        ) = QueryCache<T>(
            collectionReference = collectionWrap.collectionRef(db),
            write = { t ->
                WriteData(
                    data = t.props.write(),
                    merge = true
                )
            },
            extractId = { t -> t.props.idOrFail },
            listenConfig = { list ->
                ListenConfig.hasProps(
                    list,
                    collectionWrap,
                    create
                )
            },
            killables = killables
        )
    }

}


val <T: HasFBProps<T>> Emitter<SetMove<T>>.ids
    get() = map { m -> m.map { v -> v.props.idOrFail } }

val <T: HasFBProps<T>> QueryCache<T>.ids
    get() = emitter.ids

