package commonui

import common.CsKillsApiCommon
import commonshr.*
import commonui.widget.*
import commonshr.KillsApi
import commonshr.properties.EnumProp
import commonui.editing.*
import domx.KillsApiDomx
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Node
import org.w3c.dom.events.EventTarget
import rx.HasVar
import rx.RxIface
import rx.Var

interface KillsApiCommonui: KillsApiDomx {

    fun Slot.visibility(fn: KillsApi.() -> Boolean) = visibility(api, fn)

    fun Button.enabled(fn: KillsApi.() -> Boolean) = enabled(api, fn)


    fun HasElement.rxClass(stl: String, fn: KillsApi.() -> Boolean) = rxClass(api, stl, fn)
    fun HasElement.rxClass(stl: String, fn: RxIface<Boolean>) = rxClass(api, stl, fn)

    fun ScreenWrap.visible(fn: KillsApi.() -> Boolean) = visible(api, fn)

    fun <E: Enum<E>> Select.bind(prop: EnumProp<*, E>) = bind(api, prop)
    fun Select.bindValue(prop: Var<String>) = bindValue(api, prop)

    fun <V: Any, T: ViewItem<V>> RxIface<T>.runView(hole: HoleT<V>) = runView(api, hole)

    val <V: Any> HoleT<V>.routing get() = routing(api)

    fun Bindings.addDirty(fn: KillsApi.() -> Boolean) = addDirty(api, fn)
}

interface KillsUixApi: Api, HasKillsUix, KillsApiCommonui {

    fun EventTarget.click(action: Trigger) = click(api, action)
    fun Button.click(action: Trigger) = click(api, action)
    fun BadgeAnchor.click(action: Trigger) = click(api, action)
    fun DropdownMenuItem.click(action: Trigger) = click(api, action)
    fun ListGroupButton.click(action: Trigger) = click(api, action)
    fun DropdownMenu.signOut(action: Trigger) = signOut(api, action)

    val Tab.clickActivate get() = clickActivate(api)
    val Tab.clickToggle get() = clickToggle(api)

}

interface BackApi: Api, HasBack {
    fun <T> backOnDelete() = backOnDelete<T>(api)
}

interface BackKillsUixApi: Api, BackApi, HasBackKillsUix, KillsUixApi {

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

interface CsKillsApiCommonui: CsApiCommonui, KillsApiCommonui, CsKillsApiCommon

interface BindKillsApi: HasBindKills, KillsApiCommonui {

    fun AbstractInput.bind(rxv: HasVar<String>) = bind(api, rxv)

    fun AbstractInput.bind(rxv: Var<String>) = bind(api, rxv)

    fun <V> AbstractInput.bind(
        modelValue: Var<V>,
        initial: (V) -> String,
        extract: (String) -> V
    ) = bind(api, modelValue, initial, extract)

}

interface EditKillsApi: BindKillsApi, HasEditKills

interface CreateKillsApi: BindKillsApi, HasCreateKills


interface CreateKillsUixApi: CreateKillsApi, HasCreateKillsUix {
    val Factory.persistButton get() = persistButton(api)

}

interface EditKillsUixApi: EditKillsApi, HasEditKillsUix {
    val Factory.saveButton get() = saveButton(api)
}

interface BackEditKillsUixApi: EditKillsUixApi, HasBackEditKillsUix {
    val SlotHoles.backSaveDiscard get() = BackSaveDiscard(api, this)
    val Factory.saveDeleteButton get() = saveDeleteButton(api)
}

interface BackCreateKillsUixApi: CreateKillsUixApi, HasBackCreateKillsUix {
    val SlotHoles.backPersistDiscard get() = BackPersistDiscard(api, this)
}


typealias Editor = BackEditKillsUixApi
typealias Creator = BackCreateKillsUixApi



