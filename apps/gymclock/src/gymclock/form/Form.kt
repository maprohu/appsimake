package gymclock.form

import commonui.*
import commonui.ForwardBase
import commonui.editing.DefaultBindings
import commonui.widget.*
import domx.replay
import gymclock.clock.Clock
import gymclock.data.loadModel
import org.w3c.dom.HTMLElement

interface FormPath: BodyPath, HasHistory {
    val form: Form
}

class Form(
    body: Body
): ForwardBase<HTMLElement>(body), FormPath, BodyPath by body, KillsUixApi, BindKillsApi, HasHistoryKillsRedisplay  {

    override val form = this

    val sounds by lazy { Sounds() }

    fun startWorkout() {
        this %= Clock(this)
    }

    val model = loadModel()

    override val editing = DefaultBindings(kills)

    override val history = BrowserHistory()

    init {
        historyRoot

        model.sounds.forEach {
            if (it) {
                sounds.prepareAudio.replay()
            }
        }
    }

    override val rawView = ui()


}

