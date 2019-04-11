package commonfb

import commonfb.messaging.MessagingControl
import commonshr.HasKills
import commonui.*
import firebase.HasCsDbKills
import firebase.HasDb
import firebase.HasDbFcmKillsLibUser
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

interface HasMessagingUix: HasMessaging, HasUix
interface HasKillsMessagingUix: HasMessagingUix, HasKillsUix
interface HasDbFcmLibMessagingUser: HasDbFcmKillsLibUser, HasMessaging
