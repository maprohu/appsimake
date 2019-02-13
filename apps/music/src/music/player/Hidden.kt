package music.player

import commonshr.Trigger
import music.boot.Boot
import org.w3c.dom.Node

class Hidden(boot: Boot): Player(boot) {
    override val view: Node? = null
}