package music.database.usage

import common.UsageAndQuota
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import kotlinx.coroutines.launch
import music.database.Database
import music.database.DatabasePath
import rx.Var

interface UsagePath: DatabasePath {
    val usage: Usage
}
class Usage(
    from: Database
): UIBase<TopAndContent>(from), UsagePath, DatabasePath by from {
    override val usage = this

    val usageInfoVar = Var<UsageAndQuota?>(null)

    suspend fun refresh() {
        usageInfoVar %= boot.localSongs.storage.usageInfo()
    }

    init {
        launch { refresh() }
    }

    override val rawView = ui()
}