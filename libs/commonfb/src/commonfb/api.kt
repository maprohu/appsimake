package commonfb

import commonshr.FsDoc
import commonshr.api
import commonfb.editing.*
import commonshr.properties.RxBase
import commonui.CsApiCommonui
import commonui.FromUixApi
import commonui.KillsApiCommonui
import commonui.UixApi
import firebase.CsDbKillsApi
import firebase.DbKillsApi


interface DbKillsApiCommonfb: DbKillsApi {
    fun <T: RxBase<*>> rxEditing(initial: FsDoc<T>, preSave: suspend (T) -> Unit = {}) = rxEditing(api, initial, preSave)

}

typealias FBApi = CsDbKillsUixApi
typealias FBFromApi = CsDbFromKillsUixApi

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, UixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromUixApi {

}


