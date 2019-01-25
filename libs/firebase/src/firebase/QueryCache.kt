package firebase

import common.*
import commonlib.CollectionWrap
import commonshr.SetDiff
import firebase.firestore.*
import firebaseshr.HasFBProps
import killable.Killable
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
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

    fun listen(fn: (SetDiff<T>) -> Unit): Killable {
        return list.addListener(
            ListenableList.Listener(
                added = { _, item -> fn(SetDiff(added = setOf(item))) },
                removed = { _, item -> fn(SetDiff(removed = setOf(item))) }
            )
        )
    }

    init {

        list.addListener(
            ListenableList.Listener(
                added = { _, t ->
                    map.getOrPut(
                        extractId(t)
                    ) {
                        CompletableDeferred()
                    }.complete(t)
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

            def
        } else {
            current
        }.await()
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

