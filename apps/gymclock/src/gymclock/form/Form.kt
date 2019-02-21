package gymclock.form

import commonui.widget.*
import gymclock.clock.Clock
import gymclock.data.Model
import org.w3c.dom.HTMLElement

open class FormPath(
    val form: Form
): BodyPath(form.body)

class Form(
    val body: Body
): ForwardBase<HTMLElement>(body) {
    val path = FormPath(this)

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