package commonlib

import commonshr.MetaDoc
import commonshr.properties.RxBase

abstract class HtmlPageBase<T: HtmlPageBase<T>>: RxBase<T>(), MetaDoc {
    val html by o.string()
}

open class HtmlPage: HtmlPageBase<HtmlPage>()
