package ideas

import bootstrap.*
import commonui.CommonApp
import commonui.LoggedInBase
import domx.*
import firebase.User
import styles.scrollVertical

fun main(args: Array<String>) {
    Ideas().start()
}

class Ideas : CommonApp("ideas") {

    override fun loggedIn(user: User) {
        LoggedIn(this, user).main()
    }

}

external interface Idea {
    var title: String
    var text: String
}
fun Idea.toIdeaData() = IdeaData(this)

class LoggedIn(
    base: Ideas,
    user: User
) : LoggedInBase<Ideas>(base, user) {

    val userIdeasRef = privateRef.collection("ideas")

    fun main() {
        base.newRoot {
            classes += scrollVertical
            listGroup {
                padding2()
                commandButton("New Idea") {
                    editIdea()
                }
                commandButton("List Ideas") {
                    listIdeas()
                }
                commandButton("Idea Graph") {
                    ideaGraph()
                }
                commandButton("Sign Out") {
                    base.signOut()
                }
            }
        }
    }

}




fun LoggedIn.ideaGraph() {

}
