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


val firebaseVersion = "5.8.2"
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

val bootstrapVersion = "4.3.1"
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
        firebasektjs,
        cachingsw,
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
        commonui,
        testapplib
    ),
    serviceWorker = testappsw
)

object testapp2 : JsApp(
    "apps/testapp2",
    "Test App 2",
    listOf(
        commonfb
    ),
    serviceWorker = cachingsw
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
        firebaseJs,
        firebaseshr
    )
)
object firebaseuiktjs : JsModule(
    "libs/firebaseuiktjs",
    listOf(
        firebasektjs,
        firebaseUiJs
    )
)
object firebaseui : JsModule(
    "libs/firebaseui",
    listOf(
        firebaseuiktjs
    )
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        commonlib,
        firebasektjs,
        firebaseshr
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
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAAFNUlEQVR42u3dXUhcRxQH8EEWCRJERJASJEiIlCBBCNJQQl6kRYTQIi0lEikrCYEUQiGhRbC0JQFBoVsIdC3tg9CHSh9sY6i0waZpHmxrIVhSUzWGbCNpTcxudP3Yzzunnynuend37r2zd85Mznn3Hn6s/907M3fmMjCgGCEI8UQiNn6+fPH7iKUxYml4H/unAqdXtERY8/11bEsNaYdITZ0KsLwKcp0Q8fEOZldvaoP4PwY29Z0OiPwY5Fe9hR1hF4P8mkSNKBSDvDqJF1EsBrm1EyeiVAzyiuNDiMQgt9LIEIIxQIwQjwFShMMYIEQ4jwE2hKsYoEK4jQEahJcY4EB4jAEChPcYqEZIiYFKhLQYKEPIjIEahOQYKEDIj4HPiPLEwE9E2WLgG6KcMfAHcb+8MfADMf0M87HKgsh2M6Y7ItXCtEfwNqY/4kOmP2KDGYD4yATEXgMQaWYAYtUExDIhCEEIQhCCEIQgBCEIQQhCEIIQTwai4lndEdVvzVjLWiMaw4t8exOdEIdGY/ZNtEEcu5Yo2EQLxM7eG9liTfAjGi78xks0QY44+FlUoAlmxCvfboo1wYqoOjudEW6CErErdIc7aYIPceDTZadNkCE6J9ZdNEGE2PH69Yy7JlgQ9YO3uesmKBAtnzzw1EQ94sjXa16bqEVUvvZTWkIThYi6/luWnCaqEPuGl+Q1UYJo/zIutYnviMDJH1Kym/iLqHl3zipDEx8RTR/fA0mlCNE2tgLySgGiomcyCVLLb0T12zctkF0+I2Y4lKF8RqSBEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCIEbwa1MJmvpithcGH/vWEvV48Xi1p7Q+MKGRgi+ONq9w/5BruDFJR0QiavB4sfG1PTNc9SIzFWhY2OqQ4/QIhbfqBB+omIvTsSsl8M+cCCiz6HePyGC4GHkm0AEEMl2pj0i+hTTHhGrZdoj1mUc6qYYwQ8x/REhpj9ijRmA6DMAIesEIqWIGyYg+k1AvGAC4mkTEFWSEBkTPgluQCZqwYBvp04w4HdiDAz4xX6oFCHn3qkD3CIyG6vRh4/iCcsTIi4Dccc5IrU4MXi0YetEVtfgxN2UuvFEEJwh1iffaSw0J3f+ekrJyK4h4wTxe7ipxPXaLid9H2MH8jeWFEHEwmITK12z93yd7QjcBkEEnzzsYP+fn/NOVQsghrDGd0m6wSz0VeH6HPhmmy0+toiZRml3yQXTPeTu2r1ZEEJkTki81S8SjOddfAwR20ttR0SbmC8I5+sT+38ssM9nG+JWJfMLAXD3jPhK0au/FrxMPmJBwqsjHK3ZXRGa5G/9IlHkInmIJRmvv3C6enqlu/jnceRSib23uYislAPCna9jW5GRl23/jSs6huezJf88F3GaqUH8ezcyd2ngaPN/a/KBps5zozOrYjv2chD3mUrE41+Qv5/tcLbdMAfRgwHhorYiEswAxJQJiD4TEB0mIPaYgCjHXK/viP2SEKAS8ZIcQ71SxAU5iKBSxIIcxDdKEValFMSaUgR8IMNwHNQiUjKGRA8UI+Bz74ZzoBoBXV4NrVw9It3szVAXB/UISHp6S2NtDDAgIHnQvWG3GoPNDKB1xq3hxTRgQQBcq3G1bDACgAgB6V7nhq51wIUAWHE4VD3+BwA6BEBiZLfwd9LQCgBKxF8VOV8tsNR19iYHwIsA4JFw0Ud7GgbmLFBfpceSm9PvH7abtT7QPxUHHCU2IOars1+FTrU31VUGave0nRgY+yXGAU8xMKAIQQiJ9SdBX1+2s6bHMAAAAABJRU5ErkJggg==",
        icon512 = "data:image/png;base64,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"
    )
)

object checklistlib : JsModule(
    "libs/checklistlib",
    listOf(
        commonlib
    )
)
object checklist : JsApp(
    JsAppConfig(
        "apps/checklist",
        "Checklists",
        listOf(
            checklistlib,
            commonfb
        )
    )
)

object downloadlib : JsModule(
    "libs/downloadlib",
    listOf(
        commonlib
    )
)
object download : JsApp(
    JsAppConfig(
        "apps/download",
        "Download",
        listOf(
            downloadlib,
            commonfb
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


