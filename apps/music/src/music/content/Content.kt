package music.content

import commonui.widget.*
import music.boot.Boot
import music.boot.BootPath
import org.w3c.dom.HTMLElement



//interface Content: JobScopeWithView<ContentView>

class UserUnknown(parent: JobScope): ViewImpl<TopAndContent>(parent) {
    override val rawView = TopAndContent.hourglass
}
