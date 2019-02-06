package music

import bootstrap.*
import common.AsyncEmitter
import common.DynamicAsyncEmitter
import common.obj
import commonfb.FB
import commonui.*
import domx.cls
import domx.div
import domx.invoke
import firebase.app.App
import firebase.firestore.Firestore
import killable.*
import kotlinx.coroutines.await
import music.player.Bind
import music.player.Control
import rx.Rx
import rx.RxIface
import kotlin.browser.document

suspend fun boot(
    app: App = FB.app,
    db: Firestore = FB.db
) {
    val panel = runPanel()
    panel.hourglass()

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

    ks += {
        loop.inbox.close()
    }

    playerbar(
        ks,
        loop.inbox,
        loop.proc.toSetProcOrElse(),
        panel,
        Rx { uctx().uid?.userSongsDB }.addedTo(ks),
        source
    )
}


fun playerbar(
    ks: KillSet,
    inbox: Inbox,
    proc: AssignProcOrElse,
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

    val ps = proc.assignProcAdd()
    val mainProc = ps.addProcAssign()
    val playerProc = ps.addProcAssign()

    Control(
        Bind(inbox),
        ks,
        playerWidget.node,
        playerProc,
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





