package music.database

import commonshr.Trigger
import commonui.widget.*
import kotlinx.coroutines.Job
import music.boot.Boot
import music.boot.BootPath
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath

open class DatabasePath(
    val database: Database
): LoggedInPath(database.from)

class Database(
    factory: JobScope,
    val from: LoggedIn
): ForwardBase<TopAndContent>(factory) {
    val path = DatabasePath(this)

    override val rawView = ui()

    suspend fun import() {
        forward %= Import(this)
    }
}