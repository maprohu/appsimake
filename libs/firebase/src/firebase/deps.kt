package firebase

import commonshr.HasCsKills
import commonshr.HasKills
import commonshr.HasLib
import firebase.firestore.Firestore
import commonshr.KillsApi
import firebase.firestore.Transaction
import firebase.messaging.Messaging
import killable.KillSet
import kotlinx.coroutines.CoroutineScope

interface HasDb {
    val db: Firestore
}

interface HasFcm {
    val fcm: Messaging
}

data class DbDeps(
    override val db: Firestore
): HasDb

interface HasDbKills: HasDb, HasKills

data class DbKillsDeps(
    override val db: Firestore,
    override val kills: KillSet
): HasDbKills

interface HasCsDb: CoroutineScope, HasDb

interface HasCsDbKills: HasCsKills, HasDbKills

interface HasTx {
    val tx: Transaction
}

interface HasDbTx: HasDb, HasTx

interface HasUser {
    val user: User
}

interface HasDbUser: HasDb, HasUser
interface HasCsDbUser: HasCsDb, HasDbUser
interface HasDbKillsUser: HasDbKills, HasCsDbUser
interface HasDbFcmKillsUser: HasDbKillsUser, HasFcm, HasDbFcmUser
interface HasDbFcmUser: HasDbUser, HasFcm
interface HasDbFcmKillsLibUser: HasDbFcmKillsUser, HasDbFcmLibUser
interface HasDbKillsLibUser: HasDbKillsUser, HasDbLibUser
interface HasDbLibUser: HasDbUser, HasLibUser
interface HasLibUser: HasUser, HasLib
interface HasDbFcmLibUser: HasDbFcmUser, HasDbLibUser
