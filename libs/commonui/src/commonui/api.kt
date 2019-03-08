package commonui

import commonshr.*
import commonui.widget.*
import domx.rxEnabled
import commonshr.KillsApi
import commonshr.properties.EnumProp
import commonui.editing.*
import domx.KillsApiDomx
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import org.w3c.dom.events.EventTarget
import rx.HasVar
import rx.Var

interface KillsApiCommonui: KillsApiDomx {

    fun Slot.visibility(fn: KillsApi.() -> Boolean) = visibility(api, fn)

    fun Button.enabled(fn: KillsApi.() -> Boolean) = enabled(api, fn)

    operator fun Slot.remAssign(fn: KillsApi.() -> Node?) {
        rx { fn() }.forEach { this@remAssign %= it }
    }

    fun HasElement.rxClass(stl: String, fn: KillsApi.() -> Boolean) = node.rxClass(stl, fn)

    fun ScreenWrap.visible(fn: KillsApi.() -> Boolean) = visible(api, fn)

    fun <E: Enum<E>> Select.bind(prop: EnumProp<*, E>) = bind(api, prop)

}
interface UixApi: Api, HasUix {

    fun EventTarget.click(action: Action) = click(api, action)
    fun Button.click(action: Action) = click(api, action)
    fun DropdownMenuItem.click(action: Action) = click(api, action)
    fun ListGroupButton.click(action: Action) = click(api, action)
    fun DropdownMenu.signOut(action: Action) = signOut(api, action)

    val Tab.clickActivate get() = clickActivate(api)
    val Tab.clickToggle get() = clickToggle(api)

}

interface FromUixApi: Api, HasFromUix, UixApi {

    val Topbar.backButton get() = backButton(api)
    val Factory.backButton get() = backButton(api)

}

interface CsApiCommonui: CsApi {

    fun Node.list(
        nodes: ReceiveChannel<ListEvent<Node>>
    ) = nodeList(api, nodes)

    fun ListGroup.list(
        nodes: ReceiveChannel<ListEvent<Node>>
    ) = list(api, nodes)

}

interface EditKillsApi: HasEditKills, KillsApiCommonui {

    fun AbstractInput.bind(rxv: HasVar<String>) = bind(api, rxv)

    fun AbstractInput.bind(rxv: Var<String>) = bind(api, rxv)

    fun <V> AbstractInput.bind(
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

interface EditExitFromKillsUixApi: EditFromKillsUixApi, HasEditExitFromKillsUix {
    val Factory.saveDeleteButton get() = saveDeleteButton(api)
}

typealias Editor = EditExitFromKillsUixApi