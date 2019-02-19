package commonfb

import commonui.UiApi
import commonui.widget.HasKillSetAndUIX
import commonui.widget.HasUIX
import firebase.FBApi
import killable.HasKillSet

interface CommonFbApi: HasUIX, UiApi, FBApi, HasKillSet

val HasKillSetAndUIX.fbapi: CommonFbApi get() = object : CommonFbApi, HasKillSetAndUIX by this {}