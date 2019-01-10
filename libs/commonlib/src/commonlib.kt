package commonlib

import common.named
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty


open class Lib(
    val name: String
) {
    val app = apps.doc(name)

    fun <I, O> function() = named { Function<I, O>(this, it) }

    fun qualified(simpleName: String) = "${name}_$simpleName"
}


class Function<in I, out O>(
    val lib: Lib,
    val name: String
) {
    val qualifiedName = lib.qualified(name)
}



open class DocWrap<in D, C>(
    val id: String,
    parent: CollectionWrap<D>?
): HasPath {
    override val path : String = "${parent?.path ?: ""}/$id"
}

fun <D2> coll() = object : ReadOnlyProperty<DocWrap<*, *>, CollectionWrap<D2>> {
    override fun getValue(thisRef: DocWrap<*, *>, property: KProperty<*>) =
        CollectionWrap<D2>(property.name, thisRef)
}


interface HasPath {
    val path: String
}

open class CollectionWrap<in D>(
    val id: String,
    parent: DocWrap<*, *>?
) : HasPath {
    override val path : String = "${parent?.path ?: ""}/$id"

    fun <D2: D, C> docdc(id: String) = DocWrap<D2, C>(id, this)
    fun <C> docc(id: String) = docdc<D,C>(id)
    fun <D2: D> docd(id: String) = docdc<D2, Nothing>(id)
    fun doc(id: String) = docdc<D, Nothing>(id)
}

fun <D, C> doc() = object : ReadOnlyProperty<CollectionWrap<D>, DocWrap<D, C>> {
    override fun getValue(thisRef: CollectionWrap<D>, property: KProperty<*>) =
            DocWrap<D, C>(property.name, thisRef)
}
fun <D> docn() = doc<D, Nothing>()

object apps : CollectionWrap<AppDoc>("apps", null)

open class AppDoc

val <D: AppDoc> DocWrap<D, *>.private by coll<Private>()
val <D: AppDoc> DocWrap<D, *>.singletons by coll<Singleton>()

class Singleton
class Private

val <D: Private> DocWrap<D, *>.fcmtokens by coll<FcmToken>()

class FcmToken
