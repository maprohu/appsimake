package music.loggedin

import commonfb.UserState
import commonfb.callable
import commonlib.commonlib.customToken
import commonlib.private
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.collectionRef
import firebase.firestore.flushQueries
import firebase.functions.Functions
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import music.boot.Boot
import music.boot.BootPath
import music.database.Database
import musiclib.musicLib
import musiclib.usersongs
import rx.Var
import rx.feedTo

open class LoggedInPath(
    val loggedIn: LoggedIn
): BootPath(loggedIn.boot)

class LoggedIn(
    factory: JobScope,
    from: BootPath,
    user: User,
    app: App,
    db: Firestore,
    functions: Functions
): ForwardBase<TopAndContent>(factory) {
    val boot = from.boot
    val path = LoggedInPath(this)

    override val rawView = ui()

    suspend fun database() {
        forward %= fwdc(::Database)
    }

    val syncing = Var(false)

    init {
        fun log(vararg o: Any?) {
            console.log(*o)
        }

        val customToken by lazy {
            GlobalScope.async {
                val custTokenCall = customToken.callable(functions)
                custTokenCall.call(Unit)?.let { token ->
                    app.auth().signInWithCustomToken(token).await()
                }
            }
        }
        syncing.forEach { s ->
            if (s) {
                launch {
                    try {
                        customToken.await()

                        db.enableNetwork().await()

                        flushQueries(
                            musicLib.app.private.doc(user.uid).usersongs.collectionRef(db)
                        )
                    } catch (e: dynamic) {
                        path.boot.slots.toasts {
                            danger(
                                "Synchronizing failed: ${e.message}"
                            )
                        }
                    }
                    syncing.now = false
                }
            }
        }


    }

    fun sync() {
        syncing.now = true
    }
}