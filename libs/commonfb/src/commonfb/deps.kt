package commonfb

import commonfb.messaging.MessagingControl
import commonshr.HasKills
import commonui.HasCsToast
import commonui.HasEdit
import commonui.HasToast
import firebase.HasCsDbKills
import firebase.HasDb
import rx.RxIface

interface HasDbEdit: HasDb, HasEdit

interface HasDbEditKills: HasDbEdit, HasKills

interface HasCsDbKillsToast: HasCsDbKills, HasCsToast

interface HasLogin {
    val userState: RxIface<UserState>
}

interface HasKillsLogin: HasKills, HasLogin

interface HasMessaging {
    val messaging: MessagingControl
}
