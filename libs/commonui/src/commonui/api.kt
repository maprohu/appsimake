package commonui

import commonshr.*
import commonui.widget.*
import domx.rxEnabled
import commonshr.KillsApi
import commonui.editing.*
import domx.KillsApiDomx
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Node
import org.w3c.dom.events.EventTarget
import rx.Var

interface KillsApiCommonui: KillsApiDomx {

    fun Slot.visibility(fn: () -> Boolean) = visibility(api, fn)

    fun Button.enabled(fn: () -> Boolean) = enabled(api, fn)

    operator fun Slot.remAssign(fn: () -> Node?) {
        rx { fn() }.forEach { this@remAssign %= it }
    }

    fun HasElement.rxClass(stl: String, fn: KillsApi.() -> Boolean) = node.rxClass(stl, fn)

}
interface UixApi: Api, HasUix {

    fun EventTarget.click(action: Action) = click(api, action)
    fun Button.click(action: Action) = click(api, action)
    fun DropdownMenuItem.click(action: Action) = click(api, action)
    fun ListGroupButton.click(action: Action) = click(api, action)
    fun DropdownMenu.signOut(action: Action) = signOut(api, action)

}

interface CsApiCommonui: CsApi {

    fun Node.list(
        nodes: ReceiveChannel<ListEvent<Node>>
    ) = nodeList(api, nodes)

}

interface EditKillsApi: HasEditKills, KillsApiCommonui {

    fun Input.bind(
        rxv: Var<String>
    ) = bind(api, rxv)

    fun <V> Input.bind(
        modelValue: Var<V>,
        initial: (V) -> String,
        extract: (String) -> V
    ) = bind(api, modelValue, initial, extract)

}

interface EditKillsUixApi: EditKillsApi, HasEditKillsUix {
    val Factory.saveButton get() = saveButton(api)
}

interface EditFromKillsUixApi: EditKillsUixApi, HasEditFromKillsUix {
    val SlotHoles.backSaveDiscard get() = BackSaveDiscard(api, this)
}