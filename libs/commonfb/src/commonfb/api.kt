package commonfb

import commonfb.editing.*
import commonshr.*
import commonshr.properties.RxBase
import commonui.*
import firebase.CsDbKillsApi
import firebase.DbKillsApi


interface DbKillsApiCommonfb: DbKillsApi {

    fun <T: RxBase<*>> rxEditing(
        initial: FsEditable<T>,
        delete: Trigger? = null,
        onPersist: Trigger = {},
        preSave: (T) -> Unit = {}
    ) = rxEditing(
        api,
        initial,
        delete = delete,
        onPersist = onPersist,
        preSave = preSave
    )
}

interface FBApi: CsDbKillsUixApi, HasRedisplay
interface FBFromApi: FBApi, CsDbFromKillsUixApi {
    override val from: HasRedisplay get() = GoBackRedisplay
}

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, KillsUixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromKillsUixApi {

}


