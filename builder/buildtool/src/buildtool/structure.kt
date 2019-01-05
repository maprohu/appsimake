package buildtool

import bootkotlin.kotlinxCoroutinesCoreJs
import bootkotlin.kotlinxHtmlJs
import bootkotlin.kotlinxStdlibJs
import java.io.File
import java.net.URL
import java.nio.file.Paths

object kotlinxHtml : KotlinJsLib(kotlinxHtmlJs)

object kotlinxCoroutines : KotlinJsLib(
    kotlinxCoroutinesCoreJs,
    "kotlinx-coroutines-core"
)

object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
)

val firebaseVersion = "5.7.2"
val firebaseBaseName = "firebase-bower-$firebaseVersion"
object firebaseJs : JsDownload(
    url = URL("https://codeload.github.com/firebase/firebase-bower/zip/v$firebaseVersion"),
    fileName = "$firebaseBaseName.zip",
    extract = ExtractInfo(
        jsPath = listOf(
            "$firebaseBaseName/firebase-app.js",
            "$firebaseBaseName/firebase-auth.js",
            "$firebaseBaseName/firebase-firestore.js",
            "$firebaseBaseName/firebase-functions.js",
            "$firebaseBaseName/firebase-messaging.js",
            "$firebaseBaseName/firebase-storage.js"
        )
    )
//    "https://www.gstatic.com/firebasejs/5.7.0/firebase.js"
)

val firebaseUiVersion = "3.4.1"
val firebaseUiBaseName = "firebaseui-web-$firebaseUiVersion"
object firebaseUiJs : JsDownload(
    URL("https://github.com/firebase/firebaseui-web/archive/v$firebaseUiVersion.zip"),
    "$firebaseUiBaseName.zip",
    ExtractInfo(
        jsPath = listOf(
            "$firebaseUiBaseName/dist/firebaseui.js"
        ),
        cssPath = listOf(
//            "firebaseui-web-3.4.1/dist/firebaseui.css"
            "$firebaseUiBaseName/stylesheet/firebase-ui.css"
        )
    ),
    listOf(
        firebaseJs
    )
)

private const val fontAwesomeVersion = "5.5.0"
private const val fontAwesomeDirName = "fontawesome-free-$fontAwesomeVersion-web"
object fontAwesomeDist : JsDownload(
    "https://use.fontawesome.com/releases/v$fontAwesomeVersion/$fontAwesomeDirName.zip",
    ExtractInfo(
        filter = { ze ->
            Paths.get(ze.name).let {
                it.nameCount >= 2 &&
                        it.getName(1).toString() in setOf("css", "webfonts")
            }
        },
        dirResources = listOf(
            DirResource(
                fontAwesomeDirName,
                listOf("css/all.css")
            )
        )
    )
)

val bootstrapVersion = "4.2.1"
val bootstrapBaseName = "bootstrap-$bootstrapVersion-dist"
object bootstrapDist : JsDownload(
    "https://github.com/twbs/bootstrap/releases/download/v$bootstrapVersion/$bootstrapBaseName.zip",
    "$bootstrapBaseName/js/bootstrap.bundle.js",
    "$bootstrapBaseName/css/bootstrap.css",
    listOf(
        jquery
    )
)

object buildenv : JsModule(
    "libs/buildenv"
)

object commonshr : JsModule(
    "libs/commonshr"
)

object indexeddb : JsModule(
    JsModuleConfig(
        "libs/indexeddb"
    ).copy(
        deps = listOf(
            kotlinxCoroutines,
            commonshr
        )
    )
)

object common : JsModule(
    "libs/common",
    listOf(
        commonshr,
        buildenv
    )
)

object domx : JsModule(
    "libs/domx",
    listOf(
        common
    )
)

object bootstrap : JsModule(
    "libs/bootstrap",
    listOf(
        bootstrapDist,
        domx
    )
)

object fontawesome : JsModule(
    "libs/fontawesome",
    listOf(
        fontAwesomeDist,
        domx
    )
)

object commonui : JsModule(
    "libs/commonui",
    listOf(
        bootstrap,
        fontawesome,
        domx,
        kotlinxCoroutines
    )
)


object testappsw : JsModule(
    "libs/testappsw",
    listOf(
        firebaseMessagingSw,
        testapplib
    )
)

object tictactoesw : JsModule(
    "libs/tictactoesw",
    listOf(
        firebaseMessagingSw,
        tictactoelib
    )
)

object testapp : JsApp(
    "apps/testapp",
    "Test App",
    listOf(
        commonfb,
        testapplib
    ),
    testappsw
)

object testapp2 : JsApp(
    "apps/testapp2",
    "Test App 2",
    listOf(
        commonfb,
        testapplib
    ),
    testappsw
)

object cachingsw : JsModule(
    JsModuleConfig(
        "libs/cachingsw"
    ).copy(
        deps = listOf(
            buildenv,
            kotlinxCoroutines,
            commonshr,
            indexeddb
        )
    )
)

object gymclocksw : JsModule(
    JsModuleConfig(
        "libs/gymclocksw"
    ).copy(
        deps = listOf(
            cachingsw
        )
    )
)

object gymclock : JsApp(
    "apps/gymclock",
    "Gym Clock",
    deps = listOf(
        commonui
    ),
    serviceWorker = gymclocksw
)

object firebasektjs : JsModule(
    "libs/firebasektjs",
    listOf(
        commonshr,
        firebaseJs,
        kotlinxCoroutines
    )
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        firebasektjs,
        firebaseUiJs,
        kotlinxCoroutines
    )
)

object commonfb : JsModule(
    "libs/commonfb",
    listOf(
        commonui,
        commonlib,
        firebase
    )
)

object commonlib : JsModule(
    "libs/commonlib",
    listOf(
        commonshr
    )
)

object chat : JsApp(
    "apps/chat",
    "Chat",
    listOf(
        bootstrap
    )
)

object index : JsApp(
    "apps/index",
    "Apps I Make",
    listOf(
        commonui
    ),
    serviceWorker = cachingsw
)

object tasks : JsApp(
    "apps/tasks",
    "Tasks",
    listOf(
        commonfb
    )
)


object testapplib : JsModule(
    "libs/testapplib",
    listOf(
        commonlib
    )
)

object tictactoelib : JsModule(
    "libs/tictactoelib",
    listOf(
            commonlib
    )
)

object tictactoe : JsApp(
    "apps/tictactoe",
    "Tic Tac Toe",
    listOf(
        commonfb,
        tictactoelib
    ),
    tictactoesw
)

object functions : JsModule(
    "libs/functions",
    listOf(
        commonshr,
        commonlib,
        kotlinxCoroutines
    )
)

object testappfns : JsModule(
    JsModuleConfig(
        "libs/testappfns"
    ).copy(
        deps = listOf(
            functions,
            testapplib
        )
    )
)

object tictactoefns : JsModule(
    JsModuleConfig(
        "libs/tictactoefns"
    ).copy(
        deps = listOf(
            functions,
            tictactoelib
        )
    )
)

object mainfns : JsModule(
    JsModuleConfig(
        "libs/mainfns"
    ).copy(
        deps = listOf(
            tictactoefns,
            testappfns
        )
    )
)


