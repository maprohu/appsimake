package commonfb

import commonshr.FsDoc
import commonshr.api
import commonfb.editing.*
import commonshr.Action
import commonshr.properties.RxBase
import commonui.CsApiCommonui
import commonui.FromKillsUixApi
import commonui.KillsApiCommonui
import commonui.KillsUixApi
import commonui.widget.HasJobRedisplay
import firebase.CsDbKillsApi
import firebase.DbKillsApi


interface DbKillsApiCommonfb: DbKillsApi {
    fun <T: RxBase<*>> rxEditing(
        initial: FsDoc<T>,
        delete: Action? = null,
        preSave: suspend (T) -> Unit = {}
    ) = rxEditing(api, initial, delete, preSave)

}

interface FBApi: CsDbKillsUixApi, HasJobRedisplay
interface FBFromApi: FBApi, CsDbFromKillsUixApi

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, KillsUixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromKillsUixApi {

}


