package gymclock.form

import commonshr.properties.RxBase
import commonui.*
import commonui.ForwardBase
import commonui.editing.DefaultBindings
import commonui.editing.DefaultEditing
import commonui.widget.*
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

    companion object {
        fun boot(hole: Hole) {
            Body(hole).apply {
                content %= Form(this)
            }
        }
    }

    fun startWorkout() {
        forward %= Clock(this)
    }

    val model = loadModel()

    override val editing = DefaultBindings(kills)

    override val history = BrowserHistory()


    init { historyRoot }

    override val rawView = ui()


}

