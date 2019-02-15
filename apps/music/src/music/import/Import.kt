package music.import

import commonui.widget.TopAndContent
import commonui.widget.UIBase
import commonui.widget.ViewImpl
import music.database.Database

class Import(
    val database: Database
): UIBase<TopAndContent>(database) {

    override val rawView = ui()

}