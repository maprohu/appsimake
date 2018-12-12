package killable

import common.Listeners

interface Killable {
    fun kill()

    fun addTo(killables: Killables) {
        killables.add(this)
    }
}

operator fun Killable.invoke() = kill()


fun Listeners.add(killable: Killable) {
    this.add { killable.kill() }
}

