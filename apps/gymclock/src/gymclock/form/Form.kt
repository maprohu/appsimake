package gymclock.form

import commonui.widget.*
import gymclock.clock.Clock
import gymclock.data.Model
import org.w3c.dom.HTMLElement

interface FormPath: BodyPath {
    val form: Form
}

class Form(
    body: Body
): ForwardBase<HTMLElement>(body), FormPath, BodyPath by body {
    override val form = this


    val sounds by lazy { Sounds() }

    companion object {
        suspend fun boot(hole: Hole) {
            Body(hole).apply {
                content.switchToView(Form(this))
            }
        }
    }

    suspend fun start() {
        forward.switchTo { Clock(this) }
    }

    val model = Model(kills)

    override val rawView = ui()


}