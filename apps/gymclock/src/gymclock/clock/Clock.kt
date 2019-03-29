package gymclock.clock

import bootstrap.*
import common.*
import domx.*
import gymclock.form.Form
import gymclock.form.FormPath
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLElement
import rx.Var
import commonui.*
import commonui.links.Linkage
import gymclock.form.Sounds
import commonui.view.*

interface ClockPath: FormPath {
    val clock: Clock
}

class Clock(
    from: Form,
    linkage: Linkage,
    val sounds: Sounds,
    val keepAwake: KeepAwake
): SimpleView<HTMLElement>(from), ClockPath, FormPath by from, BackKillsUixApi, HasBack by linkage {
    override val clock = this


    val model = form.model

    class Phase(
        val length: Int,
        val style: String,
        val audio: HTMLAudioElement
    )

    class PhasePos(
        val start: Int,
        val end: Int,
        val phase: Phase
    )

    data class PhaseList(
        val phases: List<PhasePos> = listOf(),
        val length: Int = 0
    )

    data class StartState(
        val start: Double,
        val first: Phase,
        val phases: Sequence<Phase>
    )

    val counter = Var(-1)

    val colorDivClass = Var(Cls.bgTransparent)

    class AnimationData(
        val length: Int,
        val startPercent: Double
    )
    val animation = Emitter<AnimationData>()

    override val rawView = ui()

    init {
        run()
    }



}

