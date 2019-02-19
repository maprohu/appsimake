package music.common

import common.EmitterIface
import commonshr.SetMove
import commonshr.toMoves
import commonui.widget.Factory
import commonui.widget.HasKillSetAndUIX
import commonui.widget.SlotHoles
import firebase.FBApi
import music.database.Database
import music.loggedin.LoggedInPath
import music.loggedin.syncUi
import rx.RxSet

interface MusicApi: FBApi, HasKillSetAndUIX {
    val path: LoggedInPath

    fun Factory.tasksUi() = tasksUi(this, path.boot)

    fun SlotHoles.syncUi() = syncUi(this, path.loggedIn)


    fun status(
        items: EmitterIface<SetMove<String>>
    ) = Database.Status(items, path, kills)
    fun status(
        set: RxSet<String>
    ) = status(set.diffsAll.toMoves())


}