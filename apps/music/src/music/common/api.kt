package music.common

import commonui.widget.Factory
import killable.HasKillSet
import music.boot.Boot
import bootstrap.*
import commonshr.*
import commonui.widget.HasUIXApi
import commonui.widget.SlotHoles
import firebase.FBApi
import music.loggedin.LoggedIn
import music.loggedin.syncUi

interface MusicApi: FBApi, HasUIXApi {

    fun Factory.tasksUi(
        boot: Boot
    ) = tasksUi(this, boot)

    fun SlotHoles.syncUi(
        loggedIn: LoggedIn
    ) = syncUi(this, loggedIn)

}