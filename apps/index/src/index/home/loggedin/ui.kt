package index.home.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import firebase.User

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
        title %= "Apps I Make"
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p2
            }
            insert.listGroup {

                fun app(
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

                app("tasks", "Tasks")
                app("tictactoe", "Tic Tac Toe")
                app("gymclock", "Gym Clock")
                app("music", "Music Player")
                app("download", "Download")
                app("testapp", "Test App")
                app("checklist", "Checklist")

            }
        }
    }.node
)

