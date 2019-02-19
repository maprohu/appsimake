package music.content

import commonui.UiApi
import commonui.widget.*
import music.UserSongs
import music.boot.Boot
import music.boot.BootPath
import music.data.SongInfoSource
import org.w3c.dom.HTMLElement



interface Content: JobScopeWithView<TopAndContent> {
    val userSongs: UserSongs?
    val songInfoSource: SongInfoSource

}

class UserUnknown(val boot: Boot): ViewImpl<TopAndContent>(boot), Content, UiApi {
    override val userSongs: UserSongs? = null
    override val songInfoSource: SongInfoSource = boot.localSongInfoSource
    override val rawView = ui()
}
