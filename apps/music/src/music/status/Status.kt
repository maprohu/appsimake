package music.status

import commonfb.CommonFbApi
import commonui.widget.ButtonGroup
import commonui.widget.HasUIXApi
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import killable.HasKillSet
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
    val bgfn: HasUIXApi.(ButtonGroup) -> Unit
): UIBase<TopAndContent>(from), CommonFbApi, MusicApi {
    val path = StatusPath(this)

    override val rawView = ui()
}

