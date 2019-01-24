package music

import bootstrap.*
import common.obj
import domx.*
import indexeddb.*
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.CompletableDeferred
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.events.Event
import org.w3c.dom.get
import org.w3c.dom.set
import rx.Rx
import rx.Var
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window


private external interface Record {
    var count: Int
    var size: Int
    var duration: Double
}

private fun defaultRecord() = obj<Record> {
    this.count = 0
    this.size = 0
    this.duration = 0.0
}
private fun Record?.orDefault() = this ?: defaultRecord()


private const val MusicDBStatusKey = "appsimake-music-dbstatus"

class DBStatus private constructor(
    val idb: IDBDatabase,
    killables: Killables,
    record: Record
) {
    constructor(
        idb: IDBDatabase,
        killables: Killables
    ): this (
        idb,
        killables,
        localStorage[MusicDBStatusKey]?.let { s -> JSON.parse<Record>(s) }.orDefault()
    )

    private suspend fun update(fn: Record.() -> Unit) {
        val tx = idb.transaction(DBSingletons, TransactionMode.readwrite)
        val store = tx.objectStore<String, Record>(DBSingletons)

        val cd = CompletableDeferred<Unit>()

        fun <T> IDBRequest<T>.then(fn: (T) -> Unit) {
            then(fn) { cd.completeExceptionally(it) }
        }

        store.get(MusicDBStatusKey).then { r ->
            val out = r.orDefault().apply(fn)

            localStorage[MusicDBStatusKey] = JSON.stringify(out).also { onRecordString(it) }

            store.put(out, MusicDBStatusKey).then {
                cd.complete(Unit)
            }
        }

        cd.await()

    }
    suspend fun add(size: Int, duration: Double) {
        update {
            this.count += 1
            this.size += size
            this.duration += duration
        }
    }

    suspend fun remove(size: Int, duration: Double) {
        update {
            this.count -= 1
            this.size -= size
            this.duration -= duration
        }
    }
    suspend fun reset() {
        update {
            this.count = 0
            this.size = 0
            this.duration = 0.0
        }
    }


    private val recordString = Var(JSON.stringify(record))
    private fun onRecordString(s: String) {
        recordString.now = s
    }
    private val recordObject = Rx { JSON.parse<Record>(recordString()) }

    val size = Rx { recordObject().size }
    val count = Rx { recordObject().count }
    val duration = Rx { recordObject().duration }

    init {
        val storageListener : (Event) -> Unit = {
            localStorage[MusicDBStatusKey]?.let{ s -> onRecordString(s) }
        }
        window.addEventListener("storage", storageListener)
        killables += { window.removeEventListener("storage", storageListener) }
    }

}

fun MusicCtx.status(
    killables: Killables
): HTMLDivElement {
    return document.div {
        cls {
            m1
            p1
            border
            rounded
        }
        h5 {
            innerText = "Local Database"
        }
        dl {
            dt {
                innerText = "Size"
            }
            dd {
                rxText { dbStatus.size().toString() }.addedTo(killables)
            }
            dt {
                innerText = "Songs"
            }
            dd {
                rxText { dbStatus.count().toString() }.addedTo(killables)
            }
            dt {
                innerText = "Time"
            }
            dd {
                rxText { dbStatus.duration().toString() }.addedTo(killables)
            }
        }

    }

}