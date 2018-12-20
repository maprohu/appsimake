package buildtool

import bootkotlin.PublicDir
import bootkotlin.TestingDir
import org.jetbrains.kotlin.cli.common.arguments.K2JsArgumentConstants
import java.io.File

object firebaseMessagingSw : JsModule(
    JsModuleConfig(
        "libs/fbmessagingsw"
    )
) {
    val fileName = "firebase-messaging-sw.js"

    fun toDir(targetDir: File, fn: (JsDep) -> List<File>): File {
        return targetDir.resolve(fileName).also {
            it.writeText(
                listOf(kotlinStdlib)
                    .plus(depChain)
                    .flatMap(fn)
                    .map { d -> d.relativeTo(targetDir).invariantSeparatorsPath }
                    .map { p -> "importScripts(\"$p\");" }
                    .joinToString("\n")
            )
        }
    }

    val testSw by task {
        toDir(File("")) { it.jsFile }
    }

    val publicSw by task {
        toDir(PublicDir) { it.publicJsFile }
    }
}
