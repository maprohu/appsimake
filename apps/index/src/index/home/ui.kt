package index.home

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*

fun Home.ui() = factory.screen {
    topbar {
        title {
            cls.p1
            this %= "Apps I Make"
        }
    }
    main.insert.scrollPane {
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
    }



}.node