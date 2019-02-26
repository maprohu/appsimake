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

interface MusicApi: FBApi, HasKillSetAndUIX, LoggedInPath {

    fun Factory.tasksUi() = tasksUi(this, boot)
    fun Factory.tasksUi(fn: () -> Int) = tasksUi(this, fn)

    fun SlotHoles.syncUi() = syncUi(this, loggedIn)


    fun status(
        items: EmitterIface<SetMove<String>>
    ) = Database.Status(items, this, kills)
    fun status(
        set: RxSet<String>
    ) = status(set.diffsAll.toMoves())


}