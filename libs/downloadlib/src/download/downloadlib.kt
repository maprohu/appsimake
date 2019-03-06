package download

import commonlib.DocWrap
import commonlib.Lib
import commonlib.Private
import commonlib.coll
import commonshr.properties.RxBase
import firebaseshr.Base

val downloadLib = Lib("download")

val DocWrap<Private>.items by coll { DownloadItem() }
val DocWrap<Private>.process by coll { DownloadProcess() }

open class DownloadItem: RxBase<DownloadItem>() {

    val url by o.string()
    val ts by o.serverTimestamp()

    companion object: DownloadItem()

}

open class DownloadProcess: RxBase<DownloadProcess>() {

    val url by o.string()
    val title by o.string()
    val progress by o.number()
    val ts by o.serverTimestamp()

    companion object: DownloadProcess()

}
