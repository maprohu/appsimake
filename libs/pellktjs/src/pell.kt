package pell

import org.w3c.dom.HTMLElement

// https://github.com/jaredreich/pell/tree/v1.0.6

external val pell : Pell

external interface Pell {
    fun init(options: PellOptions): PellEditor
    fun exec(command: String, value: String)
}

external interface PellAction {
    var name: String
    var icon: String
    var title: String
    var result: () -> Unit
}

external interface PellClasses {
    var actionbar: String
    var button: String
    var content: String
    var selected: String
}


external interface PellOptions {

    var element: HTMLElement
    var onChange: (String) -> Unit


    var defaultParagraphSeparator: String
    var styleWithCSS: Boolean

    var actions: Array<dynamic> // String || PellAction

    var classes: PellClasses
}

external interface PellEditor {
    val content: HTMLElement


}