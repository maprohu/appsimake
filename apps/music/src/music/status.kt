package music

import bootstrap.*
import common.EmitterIface
import common.Some
import common.filtered
import common.map
import commonlib.addedTo
import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import domx.*
import firebase.ids
import indexeddb.*
import killable.Killable
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.StoreState
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.MutationRecord
import org.w3c.dom.Node
import rx.*
import kotlin.browser.document
import kotlin.math.roundToInt


class DBStatus(
    val idb: IDBDatabase,
    val tagDB: TagDB,
    storageDB: SongStorageDB,
    userSongsDB: UserSongsDB,
    transferSongs: TransferSongs,
    killables: Killables
) {

    class RecordObject {
        val size = Var(0L)
        val count = Var(0)
        val duration = Var(0.0)
        val durationInt = Rx { duration().roundToInt() }

        fun reset() {
            size.now = 0
            count.now = 0
            duration.now = 0.0
        }

    }
    val localDatabase = RecordObject()
    val cloud = RecordObject()
    val like = RecordObject()
    val new = RecordObject()
    val dontLike = RecordObject()
    val upload = RecordObject()
    val download = RecordObject()

    init {
        val ks = killables.killables()

        fun connect(
            emitter: EmitterIface<SetMove<String>>,
            target: RecordObject
        ) {
            val tagMap = mutableMapOf<String, Killable>()
            ks += emitter.add { m ->
                val id = m.value
                when (m) {
                    is SetAdded -> {
                        val kst = ks.killables()
                        tagMap[id] = kst

                        kst += target.count.incremented()
                        GlobalScope.launch {
                            val tag = tagDB.get(id) {
                                val blob = idb.readMp3(id)!!
                                blob to blob.readAsArrayBuffer()
                            }
                            tag.secs.initial
                                .orDefault(0.0).addedTo(kst)
                                .feedTo(target.duration).addedTo(kst)
                            tag.bytes.initial
                                .orDefault(0).addedTo(kst)
                                .feedTo(target.size).addedTo(kst)
                        }.addedTo(kst)
                    }

                    is SetRemoved -> tagMap[id]?.kill()
                }
            }

        }

        connect(LocalSongs.emitter, localDatabase)
        connect(
            storageDB.queryCache.emitter
                .filtered(ks) { it.uploaded.initial() == Some(true) }
                .ids,
            cloud
        )
        connect(
            userSongsDB.like.ids,
            like
        )
        connect(
            userSongsDB.new.ids,
            new
        )
        connect(
            userSongsDB.dontLike.ids,
            dontLike
        )
        connect(
            transferSongs.upload,
            upload
        )
        connect(
            transferSongs.download,
            download
        )




    }

}


fun MusicCtx.status(
    node: Node,
    killables: Killables
) {

    fun Node.status(
        title: String,
        record: DBStatus.RecordObject
    ) {
        div {
            cls {
                m1
                p1
                border
                rounded
            }
            h5 {
                innerText = title
            }
            dl {
                dt {
                    innerText = "Songs"
                }
                dd {
                    rxText { record.count().toString() }.addedTo(killables)
                }
                dt {
                    innerText = "Time"
                }
                dd {
                    rxText { record.durationInt().toString() }.addedTo(killables)
                }
                dt {
                    innerText = "Size"
                }
                dd {
                    rxText { record.size().toString() }.addedTo(killables)
                }
            }
        }

    }
    node.status(
        "Local Database",
        dbStatus.localDatabase
    )
    node.status(
        "Cloud",
        dbStatus.cloud
    )
    node.status(
        "Like",
        dbStatus.like
    )
    node.status(
        "New",
        dbStatus.new
    )
    node.status(
        "Don't Like",
        dbStatus.dontLike
    )
    node.status(
        "Upload",
        dbStatus.upload
    )
    node.status(
        "Download",
        dbStatus.download
    )

}