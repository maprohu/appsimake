package music.status

import commonfb.CommonFbApi
import commonui.widget.*
import music.common.MusicApi
import music.database.Database
import music.database.DatabasePath

interface StatusPath: DatabasePath {
    val status: Status
}

class Status(
    val from: ForwardBase<*>,
    database: Database,
    val stat: Database.Status,
    val title: String,
    val bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit
): UIBase<TopAndContent>(from), CommonFbApi, MusicApi, StatusPath, DatabasePath by database {
    override val status = this

    override val rawView = ui()
}

