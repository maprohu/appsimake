package tasks

import common.ListenableList
import common.ListenableMutableList
import commonlib.CollectionWrap
import firebase.firestore.Firestore
import firebase.firestore.ListenConfig
import firebase.firestore.listen
import firebase.firestore.query
import killable.Killable
import killable.Killables
import rx.RxVal
import rx.Var
import rx.set
import taskslib.Tag


class TagSource(
    wrap: CollectionWrap<Tag>,
    db: Firestore
): Killable {
    override fun kill() {
        killables.kill()
    }

    private val killables = Killables()

    private val map = mutableMapOf<String, Var<Tag>>()

    private fun tagv(id: String) = map.getOrPut(id) {
        Var(
            Tag().also {
                it.props.persisted(id)
                it.name.initial.set(id)
            }
        )
    }

    init {
        val list = ListenableMutableList<Tag>()

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

}