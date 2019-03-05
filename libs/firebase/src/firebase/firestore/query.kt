package firebase.firestore

import commonlib.CollectionWrap
import commonshr.properties.ROProp
import firebase.DbApi
import firebase.HasDb

data class QuerySettings(
    val order: List<OrderBy> = emptyList()
) {

    class OrderBy(
        val path: String,
        val dir: OrderDirection = OrderDirection.Asc
    )

    enum class OrderDirection {
        Asc,
        Desc
    }

    fun asc(path: String) = copy(
        order = order + OrderBy(path)
    )
    fun desc(path: String) = copy(
        order = order + OrderBy(path, OrderDirection.Desc)
    )

}

interface QuerySettingsBuilder<T> {
    var settings: QuerySettings

    val ROProp<T, *>.asc: Unit get() { settings = settings.asc(name) }
    val ROProp<T, *>.desc: Unit get() { settings = settings.desc(name) }
}

fun <T> querySettings(fn: QuerySettingsBuilder<T>.() -> Unit): QuerySettings {
    return object: QuerySettingsBuilder<T> {
        override var settings = QuerySettings()
    }.apply(fn).run {
        settings
    }
}

fun Query.apply(orderBy: QuerySettings.OrderBy) {
    orderBy(
        orderBy.path,
        when (orderBy.dir) {
            QuerySettings.OrderDirection.Asc -> "asc"
            QuerySettings.OrderDirection.Desc -> "desc"
        }
    )
}

fun Query.apply(settings: QuerySettings) = apply {
    settings.order.forEach { o -> this.apply(o) }
}

typealias TypedQuery<T> = Query
typealias TypedCollectionReference<T> = CollectionReference
typealias TypedDocumentReference<T> = DocumentReference

fun <T> CollectionWrap<T>.query(
    deps: HasDb,
    query: QuerySettingsBuilder<T>.() -> Unit = {}
): TypedQuery<T> = collectionRef(deps).apply(querySettings(query))




