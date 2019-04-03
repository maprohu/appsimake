package tictactoe.active

import commonfb.FBBackApi
import commonui.*
import commonui.links.Linkage
import commonui.topandcontent.ProgressTC
import commonui.view.ForwardTC
import commonui.widget.TopAndContent
import kotlinx.coroutines.launch
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath

interface ActivePath: LoggedInPath {
    val active: Active
}

class Active(
    from: LoggedIn,
    linkage: Linkage
): ForwardTC(from), ActivePath, LoggedInPath by from, FBBackApi, HasBack by linkage {
    override val active: Active = this

    override val rawView: TopAndContent = ui()

}

