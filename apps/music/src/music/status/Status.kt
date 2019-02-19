package music.status

import commonfb.CommonFbApi
import commonui.widget.*
import music.common.MusicApi
import music.database.Database
import music.database.DatabasePath

open class StatusPath(
    val status: Status
): DatabasePath(status.database)

class Status(
    val from: ForwardBase<*>,
    val database: Database,
    val status: Database.Status,
    val title: String,
    val bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit
): UIBase<TopAndContent>(from), CommonFbApi, MusicApi {
    override val path = StatusPath(this)

    override val rawView = ui()
}

