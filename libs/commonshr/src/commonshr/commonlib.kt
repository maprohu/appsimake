package commonlib

import common.named
import commonshr.properties.DynamicOps
import commonshr.properties.RxBase
import commonshr.properties.readDynamic
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

fun lib() = named { Lib(it) }

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



interface DocWrap<in D>: HasPath {
    val id: String
    val parent: CollectionWrap<D>?
}

class DocWrapImpl<in D>(
    override val id: String,
    override val parent: CollectionWrap<D>?
): DocWrap<D> {
    override val path : String  = "${parent?.path ?: ""}/$id"
}


class DocSource<D>(
    override val id: String,
    override val parent: CollectionSource<D>
): DocWrap<D> {
    override val path : String  = "${parent.path}/$id"
}

fun <D2> coll() = object : ReadOnlyProperty<DocWrap<*>, CollectionWrap<D2>> {
    override fun getValue(thisRef: DocWrap<*>, property: KProperty<*>) =
        CollectionWrap<D2>(property.name, thisRef)
}

fun <D2: RxBase<*>> coll(fn: () -> D2) = object : ReadOnlyProperty<DocWrap<*>, CollectionSource<D2>> {
    override fun getValue(thisRef: DocWrap<*>, property: KProperty<*>) =
        CollectionSource(property.name, thisRef) { d, ops ->
            fn().apply {
                readDynamic(d, ops)
            }
        }
}

interface HasPath {
    val path: String
}

open class CollectionWrap<in D>(
    val id: String,
    parent: DocWrap<*>? = null
) : HasPath {
    override val path : String = "${parent?.path ?: ""}/$id"

    open fun doc(id: String): DocWrap<D> = DocWrapImpl(id, this)
}

class CollectionSource<D>(
    id: String,
    parent: DocWrap<*>? = null,
    val factory: (dynamic, DynamicOps) -> D
): CollectionWrap<D>(id, parent) {

    override fun doc(id: String) = DocSource(id, this)

}

fun <D2> doc() = object : ReadOnlyProperty<CollectionWrap<D2>, DocWrap<D2>> {
    override fun getValue(thisRef: CollectionWrap<D2>, property: KProperty<*>) =
            DocWrapImpl(property.name, thisRef)
}

object apps : CollectionWrap<AppDoc>("apps", null)

open class AppDoc

val <D: AppDoc> DocWrap<D>.admin by coll<AdminDoc>()
val <D: AppDoc> DocWrap<D>.private by coll<Private>()
val <D: AppDoc> DocWrap<D>.singletons by coll<Singleton>()

class Singleton
class Private
interface AdminDoc

val <D: Private> DocWrap<D>.fcmtokens by coll<FcmToken>()

class FcmToken
