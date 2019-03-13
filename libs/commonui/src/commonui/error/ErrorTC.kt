package commonui.error

import bootstrap.m1
import bootstrap.p1
import commonshr.invoke
import commonui.*
import commonui.widget.TopAndContent
import commonui.widget.factory
import domx.invoke
import domx.remAssign
import domx.span

class ErrorTC(
    parent: HasKillsRouting<TopAndContent>,
    val message: dynamic
) : SimpleView<TopAndContent>(parent), FromKillsUixApi, HasFrom by SimpleFrom {
    override val rawView = TopAndContent(
        topbar = factory.topbar {
            left.backButton
            title %= "Error"
        }.node,
        content = factory.scrollPane {
            pane {
                cls.p1
                span {
                    cls.m1
                    this %= "$message"
                }
            }
        }.node
    )
}

