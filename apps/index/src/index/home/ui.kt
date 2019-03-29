package index.home

import bootstrap.*
import commonfb.KillsLoginApi
import commonfb.KillsLoginUixApi
import commonshr.*
import commonui.widget.*
import domx.*
import firebase.User
import fontawesome.info

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

interface HomeApi: HomePath, KillsLoginUixApi {

    fun Topbar.topbarUi() {
        title %= "Apps I Make"

        right.button {
            m1p2
            secondary
            fa.info
            click {
                home.about()
            }
        }

        right.userIcon {
            cls.m1
        }

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
//                app("testapp", "Test App")
            }
        }
    }
}.node

