package index.home

import bootstrap.listAction
import bootstrap.m2
import bootstrap.p1
import bootstrap.p2
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

            fun app(
                id: String,
                title: String
            ) {
                listAction {
                    href = "../$id/"
                    innerText = title
                }
            }

            app("tasks", "Tasks")
            app("tictactoe", "Tic Tac Toe")
            app("gymclock", "Gym Clock")
            app("music", "Music Player")
            app("download", "Download")

        }
    }



}.node