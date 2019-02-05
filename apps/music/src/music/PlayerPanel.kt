package music

import commonui.Slot
import domx.div
import domx.invoke
import kotlin.browser.document

class PlayerPanel(
    val slot: Slot
) {

    class PlayableLoaded(val playable: Playable)
    object PlayOrPause
    object Beginning
    object End
    object Forward
    object Backward
    object Like
    object DontLike


    val node = document.div {

    }

}