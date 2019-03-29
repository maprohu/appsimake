package index.home

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import firebase.User

private fun ScreenWrap.app(
    id: String,
    title: String
) {
    node.a {
        cls {
            listGroupItem
            listGroupItemAction
        }
        href = "../$id/"
        innerText = title
    }
}

fun appListUi() = factory.scrollPane {
    pane {
        insert.card {
            cls.m2
            header %= "Work In Progress"
            header.cls.fontWeightBold
            listGroup {
                app("tasks", "Tasks")
                app("gymclock", "Gym Clock")
                app("checklist", "Checklist")

            }
        }
        insert.card {
            cls.m2
            header %= "More Work In Progress"
            header.cls.fontWeightBold
            listGroup {
                app("tictactoe", "Tic Tac Toe")
                app("music", "Music Player")
                app("download", "Download")
                app("testapp", "Test App")
            }
        }
    }
}.node


