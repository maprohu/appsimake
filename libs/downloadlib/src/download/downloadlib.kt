package download

import commonlib.DocWrap
import commonlib.Lib
import commonlib.Private
import commonlib.coll
import firebaseshr.Base

val downloadLib = Lib("download")

val DocWrap<Private>.items by coll<DownloadItem>()

class DownloadItem: Base<DownloadItem>() {

    val url by o.scalar<String>().prop()

}
