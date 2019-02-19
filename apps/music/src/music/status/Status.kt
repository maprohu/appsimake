package music.status

import commonfb.CommonFbApi
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import music.database.Database
import music.database.DatabasePath

open class StatusPath(
    val status: Status
): DatabasePath(status.from)

class Status(
    val from: Database,
    val status: Database.Status,
    val title: String
): UIBase<TopAndContent>(from), CommonFbApi {
    val path = StatusPath(this)

    override val rawView = ui()
}

