package buildtool

import bootkotlin.*
import java.io.File

object firebaseMessagingSw : JsModule(
    JsModuleConfig(
        "libs/fbmessagingsw"
    ).copy(
        deps = listOf(
            firebasektjs
        )
    )
) {
//    val fileName = "firebase-messaging-sw.js"
//
//
//    fun writeServiceWorkerJsToDir(targetDir: File, hash: ((JsDep) -> List<FileValue>)? = null, fn: (JsDep) -> List<File>): File {
//        return writeServiceWorkerJS(
//            targetDir.resolve(fileName),
//            hash,
//            fn
//        )
//    }


//    val testSw by task {
//        writeServiceWorkerJsToDir(File(""), {it.jsFileValue} ) { it.jsFile }
//    }
//
//    val publicSw by task {
//        writeServiceWorkerJsToDir(PublicDir) { it.publicJsFile }
//    }
}
