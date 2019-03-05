package common

import commonshr.CsKillsApi
import commonshr.api

interface CsKillsApiCommon: CsKillsApi {

    fun <T> ListenableList<T>.events() = events(api)

}