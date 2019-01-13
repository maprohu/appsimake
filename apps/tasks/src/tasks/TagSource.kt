package tasks

import common.ListenableList
import common.ListenableMutableList
import commonlib.CollectionWrap
import commonshr.SetDiff
import firebase.firestore.*
import killable.Killable
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import rx.Rx
import rx.RxVal
import rx.Var
import rx.set
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
                added = { t, _ -> SetDiff(added = setOf(t)) },
                removed = { t, _ -> SetDiff(removed = setOf(t)) }
            )
        )
    }

}