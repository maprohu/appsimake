package commonshr

import common.dyn
import common.named
import commonshr.properties.DynamicOps
import commonshr.properties.RxBase
import commonshr.properties.RxRoot
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

fun <D> DocWrap<D>.toSource(factory: DynamicFactory<D>) = DocSource(id, parent!!, factory)

class DocWrapImpl<in D>(
    override val id: String,
    override val parent: CollectionWrap<D>?
): DocWrap<D> {
    override val path : String  = "${parent?.path ?: ""}/$id"
}

typealias DynamicFactory<D> = (dynamic, DynamicOps) -> D

class DocSource<D>(
    override val id: String,
    override val parent: CollectionWrap<D>,
    val factory: DynamicFactory<D>
): DocWrap<D> {
    constructor(
        id: String,
        parent: CollectionSource<D>
    ): this(
        id,
        parent,
        parent.factory
    )

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

open class CollectionWrap<in D>(
    val id: String,
    internal val parent: DocWrap<*>? = null
) : HasPath {
    override val path : String = "${parent?.path ?: ""}/$id"

    open fun doc(id: String): DocWrap<D> = DocWrapImpl(id, this)

    fun <D2: D> toSource(
        factory: DynamicFactory<D2>
    ): CollectionSource<@UnsafeVariance D2> = CollectionSource(id, parent, factory)

}

fun <D: RxBase<*>, D2: D> CollectionWrap<D>.toRxSource(
    fn: () -> D2
): CollectionSource<@UnsafeVariance D2> = CollectionSource(id, parent) { d, ops -> fn().apply { readDynamic(d, ops) } }

class CollectionSource<D>(
    id: String,
    parent: DocWrap<*>? = null,
    val factory: DynamicFactory<D>
): CollectionWrap<D>(id, parent) {

    override fun doc(id: String) = DocSource(id, this)

}

fun <D2> doc() = object : ReadOnlyProperty<CollectionWrap<D2>, DocWrap<D2>> {
    override fun getValue(thisRef: CollectionWrap<D2>, property: KProperty<*>) =
        DocWrapImpl(property.name, thisRef)
}

fun <D2: RxBase<*>> doc(fn: DynamicFactory<D2>) = object : ReadOnlyProperty<CollectionWrap<D2>, DocSource<D2>> {
    override fun getValue(thisRef: CollectionWrap<D2>, property: KProperty<*>) =
        DocSource(property.name, thisRef, fn)
}


object apps : CollectionWrap<AppDoc>("apps", null)

interface AppDoc

val <D: AppDoc> DocWrap<D>.admin by coll<AdminDoc>()
val <D: AppDoc> DocWrap<D>.private by coll<Private>()
val <D: AppDoc> DocWrap<D>.publish by coll<Publish<*>>()
val <D: AppDoc> DocWrap<D>.singletons by coll<Singleton>()
val <P: Private> DocWrap<P>.singletons by coll<PrivateSingleton>()

val <D: AppDoc> DocWrap<D>.inbox by coll<Inbox>()

interface Singleton
interface PrivateSingleton
interface Private
interface AdminDoc
interface Inbox

abstract class Publish<T: Publish<T>>: RxRoot<T>() {
    val from by o.string()
}

val DocWrap<Private>.fcmtokens by coll<FcmToken>()

interface FcmToken

fun Lib.privateOf(uid: String) = app.private.doc(uid)


