package commonfb

import commonshr.FsDoc
import commonshr.api
import commonfb.editing.*
import commonshr.Action
import commonshr.Trigger
import commonshr.properties.RxBase
import commonui.*
import firebase.CsDbKillsApi
import firebase.DbKillsApi


interface DbKillsApiCommonfb: DbKillsApi {
    fun <T: RxBase<*>> rxEditing(
        initial: FsDoc<T>,
        delete: Trigger? = null,
        preSave: (T) -> Unit = {}
    ) = rxEditing(api, initial, delete, preSave)

}

interface FBApi: CsDbKillsUixApi, HasRedisplay
interface FBFromApi: FBApi, CsDbFromKillsUixApi

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, KillsUixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromKillsUixApi {

}


