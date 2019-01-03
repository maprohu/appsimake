package cachingsw

import buildenv.resourcesPropertyName
import common.named
import indexeddb.*
import kotlinx.coroutines.*
import org.w3c.dom.url.URL
import org.w3c.fetch.Response
import org.w3c.workers.ExtendableEvent
import org.w3c.workers.FetchEvent
import org.w3c.workers.InstallEvent

external val self : ServiceWorkerGlobalScopeIDB

external interface CacheConfig {
    val enabled: Boolean
    val name: String
    val files: Array<String>
}

val ReferenceCountStore by named { it }
val ModuleResourcesStore by named { it }

fun main(args: Array<String>) {
    self.registration

    val cc = self.asDynamic()[resourcesPropertyName].unsafeCast<CacheConfig>()

    if (cc.enabled) {

        self.addEventListener(
            "install",
            { event ->
                event as InstallEvent

                event.waitUntil(
                    GlobalScope.async {
                        val cache = self.caches.open("appsimake-cache").await()

                        for (file in cc.files) {
                            val res = cache.match(file).await() as Response?

                            if (res == null) {
                                cache.add(file).await()
                            }
                        }

                        cache.add(self.registration.scope).await()
                    }.asPromise()
                )
            }
        )

        self.addEventListener(
            "fetch",
            { event ->
                event as FetchEvent

                event.respondWith(
                    GlobalScope.async {
                        val response = self.caches.match(event.request).await() as Response?

                        if (response != null) {
                            response
                        } else {
                            if (URL(event.request.url).origin == URL(self.registration.scope).origin) {
                                console.log(event.request.url)
                            }
                            self.fetch(event.request).await()
                        }
                    }.asPromise()
                )
            }
        )

        self.addEventListener(
            "activate",
            { event ->
                event as ExtendableEvent

                event.waitUntil(
                    GlobalScope.async {
                        val cache = self.caches.open("appsimake-cache").await()

                        val db = self.indexedDB.open("appsimake-cache").apply {
                            addEventListener(
                                "upgradeneeded",
                                { event ->
                                    event as IDBVersionChangeEvent

                                    val db = event.target.result

                                    db.createObjectStore<Any, Any>(ReferenceCountStore)
                                    db.createObjectStore<Any, Any>(ModuleResourcesStore)
                                }
                            )
                        }.await()

                        val tx = db.transaction(arrayOf(ReferenceCountStore, ModuleResourcesStore), TransactionMode.readwrite)

                        val counts = tx.objectStore<String, Int>(ReferenceCountStore)
                        val modules = tx.objectStore<String, Array<String>>(ModuleResourcesStore)

                        fun <T> chain(files: List<T>, then: () -> Unit, fn: (T, () -> Unit) -> Unit) {
                            fun chainInner(files: List<T>) {
                                if (files.isEmpty()) {
                                    then()
                                } else {
                                    val file = files.first()
                                    fn(file) {
                                        val rest = files.drop(1)
                                        chainInner(rest)
                                    }
                                }
                            }

                            chainInner(files)
                        }

                        val cd = CompletableDeferred<Unit>()

                        fun <T> IDBRequest<T>.then(fn: (T) -> Unit) {
                            then(fn) { cd.completeExceptionally(it) }
                        }

                        val toAdd = mutableListOf<String>()

                        fun inc(files: List<String>, then: () -> Unit) {
                            chain(files, then) { file, next ->
                                counts.get(file).then { c ->
                                    val count = c ?: 0
                                    if (count == 0) {
                                        toAdd += file
                                    }
                                    counts.put(count + 1, file).then {
                                        next()
                                    }
                                }
                            }
                        }

                        val toRemove = mutableListOf<String>()

                        fun dec(files: List<String>, then: () -> Unit) {
                            chain(files, then) { file, next ->
                                counts.get(file).then { count ->
                                    if (count == null) {
                                        toRemove += file
                                        next()
                                    } else {
                                        val newCount = count - 1
                                        if (newCount <= 0) {
                                            toRemove += file
                                            counts.delete(file).then {
                                                next()
                                            }
                                        } else {
                                            counts.put(newCount, file).then {
                                                next()
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        modules.get(cc.name).then { a ->
                            val oldFiles = a?.toSet() ?: setOf()
                            val newFiles = cc.files.toSet()

                            val incFiles = newFiles - oldFiles
                            val decFiles = oldFiles - newFiles

                            inc(incFiles.toList()) {
                                dec(decFiles.toList()) {
                                    modules.put(cc.files, cc.name).then {
                                        cd.complete(Unit)
                                    }
                                }
                            }
                        }

                        cd.await()

                        for (remove in toRemove) {
                            cache.delete(remove).await()
                        }

                        cache.addAll(toAdd.toTypedArray())

                        Unit
                    }.asPromise()
                )
            }
        )

    } else {
        console.log("Caching disabled.")
    }



}