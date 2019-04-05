package firebase

import commonshr.HasCsKills
import commonshr.HasKills
import firebase.firestore.Firestore
import commonshr.KillsApi
import firebase.firestore.Transaction
import killable.KillSet
import kotlinx.coroutines.CoroutineScope

interface HasDb {
    val db: Firestore
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