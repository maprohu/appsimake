package commonfb

import commonfb.editing.*
import commonshr.*
import commonshr.properties.RxBase
import commonui.*
import commonui.editing.EditingTriggers
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
}

interface FBApi: CsDbKillsUixApi, HasRedisplay
interface FBFromApi: FBApi, CsDbFromKillsUixApi {
    override val from: HasRedisplay get() = GoBackRedisplay
}

interface CsDbKillsUixApi: CsDbKillsApi, DbKillsApiCommonfb, KillsUixApi, CsApiCommonui, KillsApiCommonui {

}

interface CsDbFromKillsUixApi: CsDbKillsUixApi, FromKillsUixApi {

}


