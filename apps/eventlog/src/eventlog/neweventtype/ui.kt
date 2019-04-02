package eventlog.neweventtype

import bootstrap.*
import commonshr.*
import commonui.editing.*
import commonui.widget.*
import domx.*
import styles.*
import kotlin.browser.document


fun NewEventType.ui() = TopAndContent(
    topbar = factory.topbar {
        slots.left.backPersistDiscard
        title %= "New Event Type"
        right.persistButton
    }.node,
    content = document.column {
        cls {
            leftRightTopBottom0
        }
        widget.insert.input {
            cls {
                m1
            }
            bind(creating.current.name).required()
        }
    }
)
