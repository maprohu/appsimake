package tasks

import common.*
import commonlib.CollectionWrap
import commonshr.SetDiff
import firebase.firestore.*
import killable.Killable
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import rx.*
import taskslib.Tag


class TagSource(
    wrap: CollectionWrap<Tag>,
    db: Firestore
): Killable {
    private val tagsRef = wrap.collectionRef(db)

    override fun kill() {
        killables.kill()
    }

    private val killables = Killables()

    private val map = mutableMapOf<String, Var<Tag>>()

    private val nameMap = mutableMapOf<String, Set<Var<Tag>>>()

    private fun tagv(id: String) = map.getOrPut(id) {
        val rxv = Var(
            Tag().also {
                it.props.persisted(id)
                it.name.initial.set(id)
            }
        )
        Rx { rxv().name.initial() }.onOff(
            on = {
                it.forEach { id ->
                    nameMap[id] =
                        nameMap[id]?.plus(rxv) ?: setOf(rxv)
                }
            },
            off = {
                it.forEach { id ->
                    nameMap[id]?.let { v ->
                        val v2 = v - rxv
                        if (v2.isEmpty()) {
                            nameMap -= id
                        } else {
                            nameMap[id] = v2
                        }
                    }
                }
            }
        )

        rxv
    }

    private val list = ListenableMutableList<Tag>()

    val listenableList: ListenableList<Tag>
        get() = list

    init {

        list.addListener(
            ListenableList.Listener(
                added = { _, t -> tagv(t.props.idOrFail) .now = t },
                removed = { _, t -> map -= t.props.idOrFail }
            )
        )

        killables += ListenConfig.hasProps(
            list
        ) { Tag() }.let { c ->
            wrap.query(db).query.listen(c)
        }
    }

    fun tag(id: String) : RxVal<Tag> = tagv(id)

    suspend fun byName(name: String): Var<Tag> {
        val c = nameMap[name]
        return if (c != null) {
            c.first()
        } else {
            val t = Tag()
            t.name.current.set(name)
            val tref = tagsRef.add(t.props.write()).await()
            tagv(tref.id)
        }
    }

    fun listen(fn: (SetDiff<Tag>) -> Unit): Killable {
        return list.addListener(
            ListenableList.Listener(
                added = { _, item -> fn(SetDiff(added = setOf(item))) },
                removed = { _, item -> fn(SetDiff(removed = setOf(item))) }
            )
        )
    }

    class Counted<T>(
        private val create: (Killables) -> T
    ) {
        private var current: Optional<Holder> = None

        private inner class Holder(
            val value: T,
            val killable: Killable
        ) {
            var count = 0

            fun release() {
                count--

                if (count <= 0) {
                    current = None
                    killable.kill()
                }
            }
        }

        fun get(ks: Killables): T {
            return current.getOrElse {
                val k = Killables()
                Holder(
                    create(k),
                    k
                ).also {
                    current = Some(it)
                }
            }.let { holder ->
                holder.count++

                ks += Killable.once {
                    holder.release()
                }

                holder.value
            }
        }
    }

    val tagSet = Counted { ks ->
        val rxv = Var(setOf<Tag>())
        listen { diff ->
            rxv.transform {  s ->
                s - diff.removed + diff.added
            }
        }.also { ks += it }
        rxv as RxIface<Set<Tag>>
    }

    val tagNameSet = Counted { ks ->
        tagSet.get(ks).let { ts ->
            Rx { ts().map { it.name.initial().orEmpty() }.toSet() }.also { ks += it }
        }
    }


}