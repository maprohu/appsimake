package eventlog.recordoccurrence

import bootstrap.*
import rx.RxMutableList
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*


fun RecordOccurrence.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        title %= "Record Occurrence"
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
                column()
            }

            dl {
                cls.m1
                dt %= "Event Type"
                dd %= { eventType().name() }

                dt %= "Latest Occurrence"
                dd %= { latestOccurrence() }

            }

            insert.button {
                cls.m1
                text %= "Record Again"
                primary
                click {
                    record()
                }
            }
        }
    }.node
)
