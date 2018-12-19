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

object firebaseJs : JsDownload(
    "https://www.gstatic.com/firebasejs/5.7.0/firebase.js"
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

object bootstrapDist : JsDownload(
    "https://github.com/twbs/bootstrap/releases/download/v4.1.3/bootstrap-4.1.3-dist.zip",
    "js/bootstrap.bundle.js",
    "css/bootstrap.css",
    listOf(
        jquery
    )
)

object common : JsModule(
    "libs/common"
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


object testapp : JsApp(
    "apps/testapp",
    listOf(
        domx
    )
)

object gymclock : JsApp(
    "apps/gymclock",
    css = listOf(
        FileRes("gymclock.css")
    ),
    deps = listOf(
        bootstrap
    )
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        firebaseJs,
        firebaseUiJs,
        kotlinxCoroutines
    )
)

object commonfb : JsModule(
    "libs/commonfb",
    listOf(
        commonui,
        firebase
    )
)

object chat : JsApp(
    "apps/chat",
    listOf(
        bootstrap
    )
)

object index : JsApp(
    "apps/index",
    listOf(
        bootstrap
    )
)

object tasks : JsApp(
    "apps/tasks",
    listOf(
        commonfb
    )
)

object tictactoe : JsApp(
    "apps/tictactoe",
    listOf(
        commonfb
    )
)




