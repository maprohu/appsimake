package music.database

import commonshr.Trigger
import commonui.widget.*
import kotlinx.coroutines.Job
import music.boot.Boot
import music.boot.BootPath
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath

open class DatabasePath(
    val database: Database
): LoggedInPath(database.loggedIn)

class Database(
    factory: JobScope,
    val loggedIn: LoggedIn
): ForwardBase<TopAndContent>(factory) {
    val path = DatabasePath(this)

    override val rawView = ui()
}