package commonui

import bootstrap.*
import common.*
import domx.*
import fontawesome.chevronLeft
import killable.Killables
import killable.add
import org.w3c.dom.*
import rx.*
import styles.*

class Slider(
    root: Screen,
    element: Node
) {

    val current = Var<Wrapper?>(null)

    lateinit var relativeDiv : HTMLDivElement
    lateinit var dropdownDiv : HTMLDivElement
    lateinit var breadcrumbOL : HTMLOListElement

    fun Node.slidingDiv(
        block : HTMLDivElement.() -> Unit = {}
    ): HTMLDivElement {
        return div {
            fullSize()
            classes += "position-absolute $transformRight"
            block()
        }
    }

    init {
        element.div {
            fullSize()
            flexColumn()

            topbar {
                breadcrumbOL = breadcrumb {}
                dropdownDiv = dropdownDiv {}
            }
            relativeDiv = div {
                classes += "flex-grow-1 position-relative"
            }
        }

        current.now = Wrapper(root)

        current.forEach {
            if (it!=null) {
                it.moveTo(SlideState.Center)
                it.nexts().takeWhile { it.slideState.now.to != SlideState.Right }.forEach { it.moveTo(SlideState.Right) }
                it.prevs().takeWhile { it.slideState.now.to != SlideState.Left }.forEach { it.moveTo(SlideState.Left) }
            }
        }
    }

    fun next(screen: Screen) {
        val new = Wrapper(screen)
        val tail = current.now!!
        tail.disposeNexts()
        tail.next = new
        new.prev = tail
        current.now = new
    }

    inner class Wrapper(
        val screen: Screen
    ) {
        fun slider() = this@Slider

        var prev: Wrapper? = null
        var next: Wrapper? = null

        val killables = Killables()
        val isCurrent = Rx { current() === this }.also { killables.add(it) }

        val preKillables = Killables()


        val slideTo = Var(SlideState.Right)

        val slideState = Var(Transition(slideTo.now, slideTo.now)).also {
            slideTo.onChange { from, to ->
                animating.now = true
                it.now = Transition(from, to)
            }
        }

        fun moveTo(state: SlideState) {
            slideTo.now = state
        }

        val slideClass = Rx {
            val t = slideState()

            setOf(
                t.from.transformClass,
                t.to.animClass
            )
        }

        private val animating = Var(false)

        private val canDispose = Rx { slideTo() == SlideState.Right && !animating() }


        init {
            relativeDiv.
                slidingDiv {
                    screen.content(this, this@Wrapper)
                    addEventListener(
                        "animationstart",
                        { animating.now = true }
                    )
                    addEventListener(
                        "animationend",
                        { animating.now = false }
                    )
                    preKillables.add {
                        canDispose.forEach {
                            if (it) {
                                removeFromParent()
                                killables.kill()
                            }
                        }
                    }
                    rxClasses(slideClass)
                }

            breadcrumbOL.li {
                classes += "breadcrumb-item"
                screen.label(this)

                onclick = { focus() }

                preKillables.add { removeFromParent() }
                rxClass(
                    Rx { if (isCurrent()) "active" else cursorPointer }
                )
            }
        }

        fun dispose() {
            preKillables.kill()
        }

        fun prevs() = linkedIterable(prev) { it.prev }
        fun nexts() = linkedIterable(next) { it.next }

        fun focus() {
            current.now = this
        }

        fun disposeNexts() {
            nexts().forEach { it.dispose() }
            next = null
        }


        fun Node.backPanel(
            content: HTMLDivElement.() -> Unit
        ) {
            div {
                fullSize()
                flexColumn()
                div {
                    flexGrow1()
                    classes += scrollVertical
                    content()
                    button {
                        flexRow()
                        flexShrink0()
                        margin2()
                        type = "button"
                        classes += "btn btn-light border"
                        chevronLeft()
                        span {
                            flexGrow1()
                            innerText = "Back"
                        }
                        onclick = {
                            prev!!.apply {
                                focus()
                                disposeNexts()
                            }
                        }
                    }
                }

            }

        }


    }

}

enum class SlideState(
    val transformClass: String,
    val animClass: String
) {
    Left(transformLeft, animLeft),
    Center(transformCenter, animCenter),
    Right(transformRight, animRight),
}

data class Transition(
    val from: SlideState,
    val to: SlideState
)


open class Screen(
    val label: HTMLLIElement.() -> Unit,
    val content: HTMLDivElement.(Slider.Wrapper) -> Unit
)
