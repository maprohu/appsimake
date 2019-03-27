package gymclock.form

import commonui.*
import commonui.ForwardBase
import commonui.editing.DefaultBindings
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.widget.*
import domx.replay
import gymclock.Links
import gymclock.LinksPath
import gymclock.clock.Clock
import gymclock.data.loadModel
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement

interface FormPath: LinksPath {
    val form: Form
}

class Form(
    body: Body,
    override val linkage: Linkage,
    links: Links
): ForwardBase<HTMLElement>(body), FormPath, LinksPath by links, KillsUixApi, BindKillsApi, LinkApi<Form>  {

    override val form = this

    private val sounds by lazy { async { Sounds.load() } }

    suspend fun sounds() = sounds.await()

    fun startWorkout() = launch {
        sounds
        links.clock.fwd()
    }

    val model = loadModel()

    override val bindings = DefaultBindings(kills)

    init {
        model.sounds.forEachLater {
            if (it) {
                launch {
                    sounds().prepare.replay()
                }
            }
        }
    }

    override val rawView = ui()


}

