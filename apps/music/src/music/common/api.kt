package music.common

import commonui.widget.Factory
import commonui.widget.HasKillSetAndUIX
import commonui.widget.SlotHoles
import firebase.FBApi
import music.loggedin.LoggedInPath
import music.loggedin.syncUi

interface MusicApi: FBApi, HasKillSetAndUIX {
    val path: LoggedInPath

    fun Factory.tasksUi() = tasksUi(this, path.boot)

    fun SlotHoles.syncUi() = syncUi(this, path.loggedIn)


}