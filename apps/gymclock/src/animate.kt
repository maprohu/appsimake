package animate

external interface ElementAnimate {

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    fun animate(keyframes: Array<dynamic>, duration: Int)
    fun animate(keyframes: Array<dynamic>, options: AnimateOptions)
    fun animate(keyframes: dynamic, duration: Int)
    fun animate(keyframes: dynamic, options: AnimateOptions)



}

external interface AnimateOptions {
    var id: String
    var delay: Int
    var direction: String
    var duration: Int
    var easing: String
    var endDelay: Int
    var fill: String
    var iterationStart: Double
    var iterations: dynamic
}
