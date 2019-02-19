package commonfb

import commonui.UiApi
import commonui.widget.HasUIX
import firebase.FBApi
import killable.HasKillSet

interface CommonFbApi: HasUIX, UiApi, FBApi, HasKillSet