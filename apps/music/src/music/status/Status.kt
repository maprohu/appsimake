package music.status

import commonfb.FBFromApi
import commonui.HasKillsUix
import commonui.widget.*
import music.common.MusicApi
import music.database.Database
import music.database.DatabasePath

interface StatusPath: DatabasePath {
    val status: Status
}

class Status(
    override val from: HasJobRedisplay,
    database: Database,
    val stat: Database.Status,
    val title: String,
    val bgfn: HasKillsUix.(ButtonGroup) -> Unit
): ForwardBase<TopAndContent>(from), MusicApi, StatusPath, DatabasePath by database, FBFromApi {
    override val status = this

    override val rawView = ui()
}

