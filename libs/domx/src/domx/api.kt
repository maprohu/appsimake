package domx

import commonshr.KillsApi
import commonshr.api
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget

interface KillsApiDomx: KillsApi {

    fun EventTarget.on(event: String, action: (Event) -> Unit )  = on<Event>(api, event, action)
    fun <T: Event> EventTarget.on(event: String, action: (T) -> Unit )  = on(api, event, action)

}
