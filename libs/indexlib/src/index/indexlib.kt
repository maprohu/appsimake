package index

import commonlib.HtmlPage
import commonshr.CollectionWrap
import commonshr.Lib
import commonshr.MetaDoc
import commonshr.doc

val indexLib = Lib("index")

val CollectionWrap<MetaDoc>.about by doc { HtmlPage() }






