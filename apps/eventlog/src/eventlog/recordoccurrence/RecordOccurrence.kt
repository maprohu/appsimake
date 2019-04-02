package eventlog.recordoccurrence

import commonfb.FBBackApi
import commonshr.*
import commonshr.properties.TS
import commonshr.properties.ago
import commonui.*
import commonui.links.Linkage
import commonui.view.*
import eventlog.EventType
import eventlog.Occurrence
import eventlog.loggedin.LoggedIn
import eventlog.loggedin.LoggedInPath
import eventlog.occurrences
import rx.RxIface
import rx.Var
import kotlin.browser.window

interface RecordOccurrencePath: LoggedInPath {
    val recordOccurrence: RecordOccurrence
}
class RecordOccurrence(
    from: LoggedIn,
    linkage: Linkage,
    eventType: FsEditable<EventType>
): ForwardTC(from), RecordOccurrencePath, LoggedInPath by from, FBBackApi, HasBack by linkage {
    override val recordOccurrence = this

    val eventType = eventType.toFsDoc().live


    val latestOccurrenceVar = Var<RxIface<Occurrence>?>(null)
    val latestOccurrence = Var("<no record>")

    fun updateTime() {
        val ts = latestOccurrenceVar.now?.now?.ts?.now
        updateTime(ts)
    }

    fun updateTime(ts: TS?) {
        latestOccurrence %= ts?.ago() ?: "<no record>"
    }


    override val rawView = ui()

    fun record() {
        Occurrence().toRandomFsDoc(eventType.id.docWrap.occurrences).save()
    }

    init {
        rx { latestOccurrenceVar()?.invoke()?.ts?.invoke() }.forEach { updateTime(it) }


        window.setInterval(
            { updateTime() },
            1000
        ).also { id ->
            kills += { window.clearInterval(id) }
        }

        redisplay.trigger.let { tr ->
            redisplay %= {
                record()
                tr()
            }
        }


        launchReport {
            val ch = eventType.id.occurrences.listEvents {
                Occurrence.ts.desc
                limit(1)
            }

            for (e in ch) {
                when (e) {
                    is ListEvent.Add -> {
                        latestOccurrenceVar %= e.item.rxv
                    }
                    else -> {}
                }
            }

        }

    }

}