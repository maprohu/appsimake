package domx

import commonshr.KillsApi
import commonshr.api
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import org.w3c.dom.events.InputEvent
import org.w3c.dom.events.MouseEvent

interface KillsApiDomx: KillsApi {

    fun EventTarget.on(event: String, action: (Event) -> Unit )  = on(api, event, action)
    fun <T: Event> EventTarget.on(event: String, action: (T) -> Unit )  = on(api, event, action)
    fun EventTarget.onClick(action: (MouseEvent) -> Unit ) = onClick(api, action)
    fun EventTarget.onInput(action: (InputEvent) -> Unit ) = onInput(api, action)
    fun EventTarget.onChange(action: (Event) -> Unit ) = onChange(api, action)

}
