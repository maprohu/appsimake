package commonfb

import commonfb.editing.*
import commonfb.login.*
import commonshr.*
import commonshr.properties.RxBase
import commonui.*
import commonui.editing.CreatingTriggers
import commonui.editing.EditingTriggers
import commonui.widget.Factory
import firebase.CsDbKillsApi
import firebase.DbKillsApi


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
