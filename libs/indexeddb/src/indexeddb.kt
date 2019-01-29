package indexeddb

import commonshr.report
import kotlinx.coroutines.*
import org.w3c.dom.WindowOrWorkerGlobalScope
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import org.w3c.workers.ServiceWorkerGlobalScope

//abstract external class ServiceWorkerGlobalScopeIDB : ServiceWorkerGlobalScope, HasIndexedDB

external interface HasIndexedDB {
    val indexedDB: IDBFactory
}

val WindowOrWorkerGlobalScope.indexedDB : IDBFactory
    get() = this.unsafeCast<HasIndexedDB>().indexedDB

// https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory
external interface IDBFactory {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open
    fun open(name: String, version: Long = definedExternally): IDBOpenDBRequest

}

// https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest
open external class IDBRequest<out T>: EventTarget {

    open var onsuccess: ((Event) -> dynamic)?

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result
    open val result: T

}

fun <T> IDBRequest<T>.then(fn: (T) -> Unit) = then(fn) { report(it) }

fun <T> IDBRequest<T>.then(fn: (T) -> Unit, err: (Throwable) -> Unit) {
    addEventListener(
        "success",
        { fn(result) }
    )
    addEventListener(
        "error",
        {
            err(it.asDynamic().unsafeCast<Throwable>())
        }
    )
}

fun <T> IDBRequest<T>.asDeferred(): Deferred<T> {
    val d = CompletableDeferred<T>()

    addEventListener(
        "success",
        {
            d.complete(result)
        }
    )

    addEventListener(
        "error",
        {
            d.completeExceptionally(it.asDynamic().unsafeCast<Throwable>())
        }
    )

    return d
}


suspend fun <T> IDBRequest<T>.await(): T = asDeferred().await()

// https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest
external class IDBOpenDBRequest: IDBRequest<IDBDatabase> {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded
    var onupgradeneeded: ((IDBVersionChangeEvent) -> dynamic)?

}

// https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent
external class IDBVersionChangeEvent : Event {

    override val target: IDBOpenDBRequest

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/newVersion
    val newVersion: Int

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent/oldVersion
    val oldVersion: Int

}

// https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase
external interface IDBDatabase {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore
    fun <K, V> createObjectStore(name: String, options: CreateObjectStoreOptions = definedExternally) : IDBObjectStore<K, V>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction
    fun transaction(store: String, mode: TransactionMode = definedExternally): IDBTransaction
    fun transaction(stores: Array<String>, mode: TransactionMode = definedExternally): IDBTransaction


}

suspend fun <K, V> IDBDatabase.get(store: String, key: K): V? {
    return transaction(store).objectStore<K, V>(store).get(key).await()
}
suspend fun <K, V> IDBDatabase.put(store: String, key: K, value: V) {
    return transaction(store, TransactionMode.readwrite).objectStore<K, V>(store).put(value, key).await()
}
suspend fun <K> IDBDatabase.delete(store: String, key: K) {
    return transaction(store, TransactionMode.readwrite).objectStore<K, Any>(store).delete(key).await()
}

suspend fun IDBDatabase.clear(store: String) {
    return transaction(store, TransactionMode.readwrite).objectStore<Any, Any>(store).clear().await()
}

suspend fun <K> IDBDatabase.getAllKeys(store: String): Array<K> {
    return transaction(store).objectStore<K, Any>(store).getAllKeys().await()
}

suspend fun <K> IDBDatabase.exists(store: String, key: K): Boolean {
    return transaction(store).objectStore<K, Any>(store).getKey(key).await() != null
}

// https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction
external interface IDBTransaction {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore
    fun <K, V> objectStore(name: String): IDBObjectStore<K, V>

}

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface TransactionMode {
    companion object
}
inline val TransactionMode.Companion.readonly: TransactionMode get() = "readonly".asDynamic().unsafeCast<TransactionMode>()
inline val TransactionMode.Companion.readwrite: TransactionMode get() = "readwrite".asDynamic().unsafeCast<TransactionMode>()


// https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore
external interface IDBObjectStore<K, V> {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/put
    fun put(item: V, key: K = definedExternally): IDBRequest<Unit>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/clear
    fun clear(): IDBRequest<Unit>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get
    fun get(key: K): IDBRequest<V?>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getKey
    fun getKey(key: K): IDBRequest<K?>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete
    fun delete(key: K): IDBRequest<Unit>

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAllKeys
    fun getAllKeys(): IDBRequest<Array<K>>

}

external interface CreateObjectStoreOptions {
    var keyPath: String
    var autoIncrement: Boolean
}

