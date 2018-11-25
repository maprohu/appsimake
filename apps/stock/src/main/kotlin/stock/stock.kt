package stock

import common.*
import firebase.AppOptions
import firebase.User
import firebase.firestore.DocumentSnapshot
import firebase.firestore.Firestore
import firebase.firestore.Settings
import firebase.firestore.listen
import firebaseui.Login
import kotlinx.html.ButtonType
import kotlinx.html.TagConsumer
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.HTMLElement
import rx.*
import styles.scrollVertical
import kotlin.browser.document

val login by lazy { Login() }

val db : Firestore by lazy {
    val db = firebase.firestore()
    db.settings(Settings().apply {
        timestampsInSnapshots = true
    })
    db
}

val baseRef by lazy {
    db
            .collection("projects")
            .doc("stock")
}

sealed class UserStatus : Killable {
    override fun kill() {}
}
object Loading : UserStatus()
object Guest : UserStatus()
class LoggedIn(
        val user: User,
        afterFirstSnapshot: LoggedIn.() -> Unit
) : UserStatus() {

    private val configVar = Var<UserConfig?>(null)

    val config : RxVal<UserConfig?>
        get() = configVar

    fun updateConfig(snapshot: DocumentSnapshot) {
        if (!snapshot.exists) {
            configVar.now = null
        } else {
            configVar.now = snapshot.data()
        }
    }

    private var snapshotHandler : (DocumentSnapshot) -> Unit = {
        updateConfig(it)
        snapshotHandler = ::updateConfig
        afterFirstSnapshot()
    }

    private val killUpdates =
            baseRef
                    .collection("users")
                    .doc(user.uid)
                    .onSnapshot { snapshotHandler(it) }

    override fun kill() {
        killUpdates()
        super.kill()
    }

}

class Privileges(
        private val status: RxVal<UserStatus>
) {
    private val config = Rx {
        val s = status()
        when (s) {
            Loading, Guest -> null
            is LoggedIn -> s.config()
        }
    }

    val admin = Rx { config()?.admin ?: false }
    val categories = Rx { admin() }
}

val userStatus = Var<UserStatus>(Loading).apply { killOld() }
val privileges = Privileges(userStatus)


fun main(args: Array<String>) {
    firebase.initializeApp(
            AppOptions().apply {
                apiKey = "AIzaSyCb6qMpHHbW6fvpHcChLg5Ah7pDPvwnl6I"
                authDomain = "laurafortunecom.firebaseapp.com"
                databaseURL = "https://laurafortunecom.firebaseio.com"
                projectId = "laurafortunecom"
                storageBucket = "laurafortunecom.appspot.com"
                messagingSenderId = "28407257069"
            }
    )

    firebase.auth().onAuthStateChanged { user ->
        if (user != null) {
            LoggedIn(user) {
                userStatus.now = this
            }
        } else {
            userStatus.now = Guest
        }
    }


    Slider(
            mainMenu(),
            document.body!!
    )
}

fun mainMenu() : Screen = Screen(
        { fa("home") }
) { wrapper ->
    Main(wrapper,this)
}

class UserContext {
    val user = Var<User?>(null)
    val config = Var<UserConfig?>(null)
}

class Main(
        val wrapper: Slider.Wrapper,
        tc: TagConsumer<HTMLElement>
) {
    private val rootPanel = Panel(tc.div("w-100 h-100"))

    private val killables = Killables()

    init {
        userStatus.forEach {
            when(it) {
                Loading -> rootPanel.new().tab.append { hourglass() }
                Guest -> {
                    val authElement = rootPanel.new(document.create.div("p-2")).tab
                    login.loginUi(authElement)
                }
                is LoggedIn -> loggedIn(it)
            }
        }.addTo(killables)
    }

    fun loggedIn(log: LoggedIn) {
        rootPanel.new().apply {
            tab.append {
                div("list-group list-group-flush") {

                    nextButton("Categories") {
                        wrapper.slider().next(categories())
                    }.rxDisplay(privileges.categories).addTo(killables)

                    nextButton("User Profile") {
                        wrapper.slider().next(userProfile(log))
                    }

                    commandButton("Sign Out") {
                        firebase.auth().signOut()
                    }
                }
            }
            killables.add {
                wrapper.focus()
                wrapper.disposeNexts()
            }
        }
    }

}



fun userProfile(log: LoggedIn) = Screen(
        { span { +"User Profile" } }
) { wrapper ->
    div(classes = "d-flex flex-column w-100 h-100") {
        div("flex-grow-1 m-2 $scrollVertical") {
            div("d-flex w-100 flex-column align-items-center") {
                if (log.user.photoURL != null) {
                    img(classes = "mw-100 border rounded p-2", src = log.user.photoURL)
                }
            }


            dl {
                fun item(label: String, value: String?) {
                    if (value != null) {
                        dt { +label }
                        dd { +value }
                    }
                }

                item("Name", log.user.displayName)
                item("Email", log.user.email)

                dt { +"Admin" }
                dd().rxText( Rx { if (privileges.admin()) "Yes" else "No" }.also { wrapper.killables.add(it) } )
            }
        }
        button(type = ButtonType.button, classes = "btn btn-light border flex-shrink-0 d-flex flex-row m-2") {
            fa("chevron-left")
            span("flex-grow-1") {
                +"Back"
            }
            onClickFunction = {
                wrapper.prev!!.apply {
                    focus()
                    disposeNexts()
                }
            }
        }

    }
}

fun categories() = Screen(
        { span { +"Categories" } }
) { wrapper ->
    wrapper.backPanel(this) {

        val panel = Panel(div("w-100 h-100")).apply { new(document.create.hourglass()) }

        val list = document.create.div("list-group list-group-flush border-bottom")

        val result = baseRef
                .collection("categories")
                .listen<Category>(
                        wrapper.killables,
                        onFirst = { panel.new(list) }
                )

        result.addListener(
                { at, v ->
                    list.insertAt(
                            at,
                            document.create.nextButton(
                                    { span().rxText( Rx { v().name } ) },
                                    {}
                            )
                    )
                },
                { list.removeAt(it) },
                { from, to ->
                    list.insertAt(to, list.removeAt(from))
                }
        )

    }

}

