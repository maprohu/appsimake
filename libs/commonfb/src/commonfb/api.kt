package commonfb

import commonfb.editing.*
import commonfb.messaging.*
import commonfb.login.*
import commonshr.*
import commonshr.properties.RxBase
import commonui.*
import commonui.editing.CreatingTriggers
import commonui.editing.EditingTriggers
import commonui.widget.DropdownMenu
import commonui.widget.Factory
import firebase.CsDbKillsApi
import firebase.DbKillsApi
import firebase.KillsApiFirebase
import org.w3c.dom.Node


interface DbKillsApiCommonfb: DbKillsApi {

    fun <T: RxBase<*>> rxEditing(
        initial: FsEditable<T>,
        triggers: Copier<EditingTriggers<T>> = identity()
    ) = rxEditing(
        api,
        initial,
        triggers
    )

    fun <T: RxBase<*>> rxCreating(
        initial: FsEditable<T>,
        triggers: Copier<CreatingTriggers<T>> = identity()
    ) = rxCreating(
        api,
        initial,
        triggers
    )
}

interface FBApi: CsDbKillsUixApi, HasRedisplay
interface FBBackApi: FBApi, BackCsDbKillsUixApi, HasBackRedisplay

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, KillsUixApi, CsApiCommonui, KillsApiCommonui

interface BackCsDbKillsUixApi: CsDbKillsUixApi, BackKillsUixApi

interface KillsLoginApi: Api, KillsApi, HasKillsLogin {
    val Factory.userIcon get() = userIcon(api)
}


interface KillsLoginUixApi: KillsLoginApi, KillsUixApi {
}

interface KillsMessagingUixApi: Api, HasKillsMessagingUix, KillsUixApi, KillsApiCommonui, KillsApiFirebase  {
    val DropdownMenu.messagingMenu get() = messagingMenu(api)
    val Node.messagingButton get() = messagingButton(api)
}