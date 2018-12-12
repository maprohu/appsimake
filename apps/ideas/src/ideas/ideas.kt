package ideas

import bootstrap.*
import commonui.CommonApp
import commonui.hourglass
import domx.*
import firebase.User
import fontawesome.spinner
import rx.Rx
import rx.Var
import styles.scrollVertical

fun main(args: Array<String>) {
    Ideas().start()
}

class Ideas : CommonApp("ideas") {

    val usersRef = baseRef.collection("users")

    override fun loggedIn(user: User) {
        LoggedIn(this, user).main()
    }

}

external interface Idea {
    var title: String
    var text: String
}



class LoggedIn(
    val base: Ideas,
    val user: User
) {

    val userRef = base.usersRef.doc(user.uid)
    val userIdeasRef = userRef.collection("ideas")

    fun main() {
        base.newRoot {
            classes += scrollVertical
            listGroup {
                padding2()
                commandButton("New Idea") {
                    newIdea()
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
