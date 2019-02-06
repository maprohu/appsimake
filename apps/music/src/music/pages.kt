package music

import bootstrap.*
import common.AsyncEmitter
import common.DynamicAsyncEmitter
import common.emptyAsyncEmitter
import common.obj
import commonfb.FB
import commonlib.doc
import commonui.*
import domx.button
import domx.cls
import domx.div
import domx.invoke
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.toSetSource
import killable.KillSet
import killable.Killables
import killable.addedTo
import killable.plusAssign
import kotlinx.coroutines.await
import music.player.PlayerBind
import music.player.control
import musiclib.Mp3File
import musiclib.music
import musiclib.songs
import rx.Rx
import rx.RxIface
import kotlin.browser.document

suspend fun boot(
    app: App = FB.app,
    db: Firestore = FB.db
) {
    val killables = Killables()
    val ks = killables.killSet
    val idb = localDatabase()

    LocalSongs.init(idb)

    db.enablePersistence(
        obj {
            experimentalTabSynchronization = true
        }
    ).await()

    db.disableNetwork().await()

    val tagDB = TagDB.of(ks, db)

    val uctx = userctx(ks, idb, tagDB, app, db)
    val source = DynamicAsyncEmitter(
        uctx.now.playables
    )
    uctx.forEachLater { c ->
        source.setCurrent(c.playables)
    }

    val loop = runLoop()
    val panel = runPanel()

    ks += {
        loop.inbox.close()
    }

    playerbar(
        ks,
        loop.inbox,
        loop.proc.toSetProcOrElse(),
        panel,
        Rx { uctx()?.uid?.userSongsDB }.addedTo(ks),
        source
    )
}


fun playerbar(
    ks: KillSet,
    inbox: Inbox,
    proc: SetProcOrElse,
    panel: SetPanel,
    udb: RxIface<UserSongsDB?>,
    songSource: AsyncEmitter<Playable>
) {

    val mainWidget = widget()
    val playerWidget = widget()

    panel %= document.column {
        cls {
            flexGrow1
        }
        widget(mainWidget)
        widget(playerWidget)
    }

    mainWidget %= document.div {
        cls.flexGrow1
    }

    val ps = proc.assignProcSet()
    val mainProc = ps.addProcVar()
    val playerProc = ps.addProcVar()

    PlayerBind().control(
        ks,
        inbox,
        playerWidget.node,
        playerProc.set,
        udb,
        songSource
    )

}

//fun userPending(): PageOut {
//    return PageOut(
//        document.hourglass,
//
//
//    )
//
//}
//
//fun signIn(): PageOut {
//
//}

fun home() {

}

fun database() {

}

fun import() {

}

fun songList() {

}





