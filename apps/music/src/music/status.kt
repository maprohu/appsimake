//package music
//
//import bootstrap.*
//import common.*
//import commonfb.listNodes
//import commonlib.addedTo
//import commonlib.toRx
//import commonshr.SetAdded
//import commonshr.SetMove
//import commonshr.SetRemoved
//import commonui.RootPanel
//import commonui.screenLayout
//import commonui.showClosable
//import domx.*
//import firebaseshr.ids
//import indexeddb.*
//import killable.*
//import kotlinx.coroutines.GlobalScope
//import kotlinx.coroutines.launch
//import musiclib.StoreState
//import musiclib.UserSongState
//import org.w3c.dom.HTMLDivElement
//import org.w3c.dom.HTMLElement
//import org.w3c.dom.MutationRecord
//import org.w3c.dom.Node
//import rx.*
//import styles.cursorPointer
//import styles.height0
//import styles.scrollVertical
//import styles.widthAuto
//import kotlin.browser.document
//import kotlin.math.roundToInt
//
//
//class DBStatus(
//    val idb: IDBDatabase,
//    val tagDB: TagDB,
//    storageDB: SongStorageDB,
//    userSongsDB: UserSongsDB,
//    transferSongs: TransferSongs,
//    killables: KillSet
//) {
//
//    class RecordObject {
//        val size = Var(0L)
//        val count = Var(0)
//        val duration = Var(0.0)
//        val durationInt = Rx { duration().roundToInt() }
//
//        fun reset() {
//            size.now = 0
//            count.now = 0
//            duration.now = 0.0
//        }
//
//    }
////    val localDatabase = RecordObject()
////    val cloud = RecordObject()
////    val like = RecordObject()
////    val new = RecordObject()
////    val dontLike = RecordObject()
////    val upload = RecordObject()
////    val download = RecordObject()
//
//    class Stat(
//        val title: String,
//        val emitter: EmitterIface<SetMove<String>>,
//        val record: RecordObject
//    )
//
//    val ks = killables.killables()
//
//    val statuses = mutableListOf<Stat>()
//
//    fun connect(
//        s: SetSource<String>,
//        title: String
//    ) {
//        val emitter = s.toEmitter()
//        val target = RecordObject()
//        val tagMap = mutableMapOf<String, Killable>()
//        ks += emitter.add { m ->
//            val id = m.value
//            when (m) {
//                is SetAdded -> {
//                    val kst = ks.killables()
//                    tagMap[id] = kst
//
//                    kst += target.count.incremented()
//                    GlobalScope.launch {
//                        val tag = tagDB.get(id) {
//                            val blob = idb.readMp3(id)!!
//                            blob to blob.readAsArrayBuffer()
//                        }
//                        tag.secs.initial
//                            .orDefault(0.0).addedTo(kst)
//                            .feedTo(target.duration).addedTo(kst)
//                        tag.bytes.initial
//                            .orDefault(0).addedTo(kst)
//                            .feedTo(target.size).addedTo(kst)
//                    }.addedTo(kst)
//                }
//
//                is SetRemoved -> tagMap[id]?.kill()
//            }
//        }
//
//        statuses += Stat(
//            title = title,
//            emitter = emitter,
//            record = target
//        )
//
//    }
//
//
//    init {
//        connect(
//            LocalSongs.emitter,
//            "Local Database"
//        )
//        connect(
//            storageDB.source
//                .filtered(ks.killSet) { it.uploaded.initial() == Some(true) }
//                .ids,
//            "Cloud"
//        )
//        connect(
//            userSongsDB.like.ids,
//            "Like"
//        )
//        connect(
//            userSongsDB.new.ids,
//            "New"
//        )
//        connect(
//            userSongsDB.dontLike.ids,
//            "Don't Like"
//        )
//        connect(
//            transferSongs.upload,
//            "Upload"
//        )
//        connect(
//            transferSongs.download,
//            "Download"
//        )
//
//    }
//
//}
//
//
//fun MusicCtx.status(
//    node: HTMLElement,
//    panel: RootPanel,
//    redisplay: () -> Unit,
//    killables: Killables
//) {
//
//    fun Node.status(
//        stat: DBStatus.Stat
//    ) {
//        val record = stat.record
//        val title = stat.title
//        button {
//            cls {
//                m1
//                p1
//                border
//                rounded
//                btn
//                flexFixedSize()
//            }
//            h5 {
//                innerText = title
//            }
//            dl {
//                dt {
//                    innerText = "Songs"
//                }
//                dd {
//                    rxText { record.count().toString() }.addedTo(killables)
//                }
//                dt {
//                    innerText = "Time"
//                }
//                dd {
//                    rxText { record.durationInt().toString() }.addedTo(killables)
//                }
//                dt {
//                    innerText = "Size"
//                }
//                dd {
//                    rxText { record.size().toString() }.addedTo(killables)
//                }
//            }
//            clickEvent {
//               showClosable(
//                   killables,
//                   { ks, cl ->
//                       songList(
//                           stat,
//                           panel.sub(),
//                           tagDB,
//                           userSongsDB,
//                           ks,
//                           cl
//                       )
//                   },
//                   redisplay
//               )
//            }
//        }
//
//
//    }
//    dbStatus.statuses.forEach { s ->
//        node.status(
//            s
//        )
//    }
//}
//
//fun songList(
//    stat: DBStatus.Stat,
//    panel: RootPanel,
//    tagDB: TagDB,
//    userSongsDB: UserSongsDB,
//    killables: Killables,
//    close: () -> Unit
//) {
//    val list = ListenableMutableList<String>()
//    killables += stat.emitter.feedTo(list)
//
//    panel.newRoot {
//        screenLayout(killables) {
//            top {
//                backButton(close)
//                middleTitle {
//                    innerText = stat.title
//                }
//            }
//            main {
//                cls {
//                    scrollVertical
//                    height0
//                    dFlex
//                    flexColumn
//                }
//                listNodes(
//                    list
//                ) { id, ks ->
//                    val tagRx = tagDB.source.get(id).toRx()
//
//                    document.button {
//                        cls {
//                            m1
//                            p1
//                            btn
//                            border
//                            rounded
//                            flexFixedSize()
//                        }
//                        dl {
//                            tagListItem(
//                                tagRx,
//                                ks
//                            )
//                        }
//                        clickEvent {
//                            GlobalScope.launch {
//                                val us = userSongsDB.get(id) {
//                                    state.cv = UserSongState.Like
//                                }
//                                us.state.cv = UserSongState.Like
//                                if (us.props.dirty.now) {
//                                    us.props.save()
//                                }
//                            }
//                        }
//                    }
//
//                }
//
//
//            }
//        }
//    }
//
//}