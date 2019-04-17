package admin.edithtml

import bootstrap.*
import common.Emitter
import common.obj
import commonshr.*
import commonshr.invoke
import commonui.widget.*
import domx.*
import commonui.widget.TopAndContent
import commonui.widget.factory
import fontawesome.code
import fontawesome.edit
import org.w3c.dom.Node
import pell.*
import rx.Var
import styles.resizeNone
import styles.scrollVertical
import kotlin.browser.document

fun EditHtml.ui(): TopAndContent {

    val activeNode = Var<Node?>(null)

    fun updateEditing(html: String) {
        editing.current.html %= html
    }

    val pellChange = Emitter<String>()
    val codeChange = Emitter<String>()

    pellChange += ::updateEditing
    codeChange += ::updateEditing

    val htmlNode = document.textarea {
        cls {
            flexGrow1
            scrollVertical
            resizeNone
        }
        pellChange += { html ->
            value = html
        }
        oninput = {
            codeChange.emit(value)
        }
        value = editing.current.html.now
    }


    val editorNode = document.div {
        pell.init(
            obj {
                this.element = this@div
                this.onChange = { html ->
                    pellChange.emit(html)
                }
                this.styleWithCSS = true
                this.actions = arrayOf(
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "heading1",
                    "heading2",
                    obj<PellAction> {
                        this.name = "heading3"
                        this.icon = "<b>H<sub>3</sub></b>"
                        this.title = "Heading 3"
                        this.result = { pell.exec("formatBlock", "<h3>") }
                    },
                    "paragraph",
                    "quote",
                    "olist",
                    "ulist",
                    "code",
                    "line",
                    "link",
                    "image"
                )
            }
        ).apply {
            content.innerHTML = editing.current.html.now
            codeChange += { html ->
                content.innerHTML = html
            }
        }
    }


    return TopAndContent(
        topbar = factory.topbar {
            slots.left.backSaveDiscard
            title %= "Edit Html"
            tabs {
                tab {
                    icon.fa.edit
                    clickActivate
                    onActivate {
                        activeNode %= editorNode
                    }
                    activate()
                }
                tab {
                    icon.fa.code
                    clickActivate
                    onActivate {
                        activeNode %= htmlNode
                    }
                }
            }
            right.saveButton
        }.node,
        content = document.column {
            widget %= activeNode
        }
    )
}

