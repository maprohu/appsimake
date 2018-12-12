package buildtool

import bootkotlin.kotlinxHtmlJs
import bootkotlin.kotlinxStdlibJs
import java.nio.file.Paths

object kotlinxHtml : KotlinJsLib(kotlinxHtmlJs)

object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
)

object firebaseJs : JsDownload(
    "https://www.gstatic.com/firebasejs/5.6.0/firebase.js"
)

object firebaseUiJs : JsDownload(
    "https://github.com/firebase/firebaseui-web/archive/v3.4.1.zip",
    "firebaseui-3.4.1.zip",
    "firebaseui-web-3.4.1/dist/firebaseui.js",
    "firebaseui-web-3.4.1/dist/firebaseui.css",
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
        dirResources = listOf(fontAwesomeDirName),
        cssPath = listOf("$fontAwesomeDirName/css/all.css")
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

object htmlx : JsModule(
    "libs/htmlx",
    listOf(
        common,
        kotlinxHtml
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
        domx
    )
)

object testapp : JsApp(
    "apps/testapp",
    listOf(
        common
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

object tictactoe : JsApp(
    "apps/tictactoe"
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        firebaseJs,
        firebaseUiJs
    )
)

object pullanappfb : JsModule(
    "libs/pullanappfb",
    listOf(
        firebase
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
        pullanappfb,
        bootstrap
    )
)

object index : JsApp(
    "apps/index",
    listOf(
        bootstrap
    )
)

object ideas : JsApp(
    "apps/ideas",
    listOf(
        commonfb
    )
)



