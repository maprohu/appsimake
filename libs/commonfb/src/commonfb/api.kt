package commonfb

import commonshr.FsDoc
import commonshr.api
import commonfb.editing.*
import commonshr.Action
import commonshr.properties.RxBase
import commonui.CsApiCommonui
import commonui.FromUixApi
import commonui.KillsApiCommonui
import commonui.UixApi
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

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, UixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromUixApi {

}


