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
object webAnimationsJs : JsDownload(
    "https://raw.githubusercontent.com/web-animations/web-animations-js/2.3.1/web-animations.min.js"
)
object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
)

val firebaseVersion = "5.8.0"
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
    JsModuleConfig(
        "libs/commonshr"
    ).copy(
        deps = listOf(
            kotlinxCoroutines
        )
    )
)

object indexeddb : JsModule(
    JsModuleConfig(
        "libs/indexeddb"
    ).copy(
        deps = listOf(
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
        domx
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
    JsAppConfig(
        "apps/gymclock",
        "Gym Clock",
        deps = listOf(
            webAnimationsJs,
            commonui
        ),
        serviceWorker = gymclocksw
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAKlBMVEUAAAAdHR06OjpISEhubm6QkJCgoKC2trbKysrb29vv7+/6+vr7+/v///+25UbwAAAA3ElEQVR42u3aMQrCMABA0YKLBd08gEfwDnZ18yAexUkoLh7JtYh3EUqtEYOt1bj0/amQkDclQ5PsmrgMAAAAAAAAAAAAAADjBk5Z0KZjgX04GQAIgGlZ1w/I67mHj4BZM9oLmNcfFQAA6AYu5b3dYKBd4hgBqvBQGQi05YDxAr/ZB2cAAAAAAAAAAACQBNgWTes4sCjet4oCk3Y8W77+sXoCehQBggAjAOxkAAAAAAAAAAAA4KIOkABIfuX+yLMHAOA/QPJncJ4iAr4EfhoAAAAAAAAAAAAAAEYE3ACG9BYki+NpjQAAAABJRU5ErkJggg==",
        icon512 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEUAAAD///+l2Z/dAAAA20lEQVR42u3cMQ7CMBBFQSOKlByJq3E0jkRJgfgUwUVQLIUkyBTzWltTrqt1ycYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAoDPwLO9Oc1cf9fQMAAAAS4AkubaAQ5JcAAAAAAD4PXCrz9YSYOwIAAAADWD4biLdAQAAAAAAAAAAAAAAAAAAAAAAsAKoTYBGE+AzAAAA2AyYygAAAAAAAAAAAAAAAAAAAAAA0AGwvwAAAHYCxqxoAgAAAODvAL/SAACAfYA1AQAAAAAAAAAAAAAAAAAAAAAAAAAAADoAL6TzNF65IIK3AAAAAElFTkSuQmCC"
    )
)

object firebaseshr : JsModule(
    "libs/firebaseshr",
    listOf(
        commonshr
    )
)

object firebasektjs : JsModule(
    "libs/firebasektjs",
    listOf(
        commonshr,
        firebaseshr,
        firebaseJs
    )
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        commonlib,
        firebasektjs,
        firebaseUiJs
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
        firebaseshr
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

object taskslib : JsModule(
    "libs/taskslib",
    listOf(
        commonlib
    )
)

object tasks : JsApp(
    "apps/tasks",
    "Tasks",
    listOf(
        taskslib,
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
    JsAppConfig(
        "apps/tictactoe",
        "Tic Tac Toe",
        listOf(
            commonfb,
            tictactoelib
        ),
        tictactoesw
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAAAAAB3tzPbAAABGUlEQVR42u3boQ2DUBSGURbpIhXswRIoZIdBsgWSGToFggRDAhVc3+Y+QUnO5+//chyG6si1z2frUdYWO1t2oEreLdVZWwgYY2cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+HPAlGuIh+uprC52Xsn7rbp5MwAAAMDFgDFXHwPPsaw2drrk/eZTAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA7oM3VxMOPtqxn7NTJ+/X+f3AAAAAAXAtYcr1joFnK6mNnSN7vPiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfuoDFd7p/LGexZwAAAAASUVORK5CYII=",
        icon512 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAKlBMVEUAAAAQEBAsLCw8PDxVVVVubm6QkJC4uLi/v7/V1dXm5ubv7+/5+fn///9OhxeDAAACw0lEQVR42u3ZsQkCQRCG0Q2vEEuwAIVL7MASxBKMxOhA7EEwO7QESxAMDDS4XsxuGpgV5N5XwM/wwt0ypPXpxu5Dhd6x/8hbLXlTrzJ2qgHwjP0bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/C9CndYkDt32FzrG/Sxu9lonXAAAAAAAAAAAAAAAAAAAAAAAAAAAAYGIA/gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqAXRpHeLAdVehfexv0kaPZeI1AAAAAAAAAAAAAAAAAAAAAAAAAABMDaBNaxmzs7ZCi9ifp42uPIsDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgpwBfE+DbRqeaja8AAAAASUVORK5CYII="
    )
)

object musiclib : JsModule(
    "libs/musiclib",
    listOf(
        commonlib
    )
)
object music : JsApp(
    JsAppConfig(
        "apps/music",
        "Music Player",
        listOf(
            musiclib,
            commonfb,
            indexeddb
        )
    )
)

object functions : JsModule(
    "libs/functions",
    listOf(
        commonshr,
        commonlib
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


