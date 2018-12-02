package common

import kotlinx.html.A
import kotlinx.html.ButtonType
import kotlinx.html.DIV
import kotlinx.html.TagConsumer
import kotlinx.html.dom.append
import kotlinx.html.js.*
import org.w3c.dom.*
import rx.*
import styles.*
import kotlin.dom.addClass
import kotlin.dom.removeClass

class Slider(
        root: Screen,
        element: Node
) {

    val current = Var<Wrapper?>(null)

    lateinit var relativeDiv : HTMLDivElement
    lateinit var dropdownDiv : HTMLDivElement
    lateinit var breadcrumbOL : HTMLOListElement

    fun TagConsumer<HTMLElement>.slidingDiv(
            block : DIV.() -> Unit = {}
    ): HTMLDivElement {
        return div("position-absolute w-100 h-100 $transformRight") {
            block()
        }
    }

    init {
        element.append {
            div("w-100 h-100 d-flex flex-column") {
                topbar {
                    breadcrumbOL = breadcrumb {}
                    dropdownDiv = dropdown {}
                }
                relativeDiv = div("flex-grow-1 position-relative") {}
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
            relativeDiv.append {
                slidingDiv {
                    screen.content(this@append, this@Wrapper)
                }.apply {
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
            }

            breadcrumbOL.append {
                li("breadcrumb-item") {
                    screen.label(this@append)

                    onClickFunction = { focus() }
                }.also {
                    preKillables.add { it.removeFromParent() }
                    it.rxClass(
                            Rx { if (isCurrent()) "active" else cursorPointer }
                    )
                }
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


        fun backPanel(
                to: TagConsumer<HTMLElement>,
                content: DIV.() -> Unit
        ) {
            to.apply {
                div(classes = "d-flex flex-column w-100 h-100") {
                    div("flex-grow-1 $scrollVertical") {
                        content()
                    }
                    button(type = ButtonType.button, classes = "btn btn-light border flex-shrink-0 d-flex flex-row m-2") {
                        fa("chevron-left")
                        span("flex-grow-1") {
                            +"Back"
                        }
                        onClickFunction = {
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
        val label: TagConsumer<HTMLElement>.() -> Unit,
        val content: TagConsumer<HTMLElement>.(Slider.Wrapper) -> Unit
)

fun TagConsumer<HTMLElement>.listButton(
        content: A.() -> Unit
): HTMLAnchorElement {
    return a(href = "#", classes = "list-group-item list-group-item-action d-flex flex-row") {
        content()
    }
}

fun TagConsumer<HTMLElement>.nextButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return listButton {
        div("flex-grow-1") {
            +label
        }
        fa("chevron-right")
        onClickFunction = { fn() }
    }
}

fun TagConsumer<HTMLElement>.nextButton(label: TagConsumer<HTMLElement>.() -> Unit, fn: () -> Unit): HTMLAnchorElement {
    return listButton {
        div("flex-grow-1") {
            label()
        }
        fa("chevron-right")
        onClickFunction = { fn() }
    }
}

fun TagConsumer<HTMLElement>.commandButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return listButton {
        div("flex-grow-1") {
            +label
        }
        onClickFunction = { fn() }
    }
}


fun TagConsumer<HTMLElement>.hourglass(): HTMLDivElement {
    return div("w-100 h-100 d-flex align-items-center justify-content-center") {
        fa("spinner fa-spin")
    }
}

fun HTMLElement.rxDisplay(rxVal: RxVal<Boolean>): Killable {
    return rxVal.forEach {
        this.style.cssText = if (it) "" else "display: none !important;"
//        if (it) removeClass("d-none") else addClass("d-none")
    }
}

fun HTMLElement.rxText(rxVal: RxVal<String>): Killable {
    return rxVal.forEach {
        this.innerText = it
    }
}