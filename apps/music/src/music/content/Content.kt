package music.content

import commonui.KillsApiCommonui
import commonui.widget.*
import music.UserSongs
import music.boot.Boot
import music.data.SongInfoSource


interface Content: JobScopeWithView<TopAndContent> {
    val userSongs: UserSongs?
    val songInfoSource: SongInfoSource

}

class UserUnknown(val boot: Boot): ViewImpl<TopAndContent>(boot), Content, KillsApiCommonui {
    override val userSongs: UserSongs? = null
    override val songInfoSource: SongInfoSource = boot.localSongInfoSource
    override val rawView = ui()
}
