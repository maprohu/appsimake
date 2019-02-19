package music.status

import commonfb.CommonFbApi
import commonui.widget.ButtonGroup
import commonui.widget.HasKillSetAndUIX
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import music.common.MusicApi
import music.database.Database
import music.database.DatabasePath

open class StatusPath(
    val status: Status
): DatabasePath(status.from)

class Status(
    val from: Database,
    val status: Database.Status,
    val title: String,
    val bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit
): UIBase<TopAndContent>(from), CommonFbApi, MusicApi {
    override val path = StatusPath(this)

    override val rawView = ui()
}

