package buildtool

import bootkotlin.*
import org.jetbrains.kotlin.cli.common.arguments.K2JsArgumentConstants
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
    val fileName = "firebase-messaging-sw.js"

    fun toDir(targetDir: File, hash: ((JsDep) -> List<FileValue>)? = null, fn: (JsDep) -> List<File>): File {
        val depList =
            listOf(kotlinStdlib)
                .plus(depChain)
        val hashString = if (hash != null) {
            val md = newSha256()
            depList
                .flatMap(hash)
                .forEach { md.update(it.hash) }
            md.digest().toHexString()
        } else {
            ""
        }
        return targetDir.resolve(fileName).also {
            it.writeText(
                depList
                    .flatMap(fn)
                    .map { d -> d.relativeTo(targetDir).invariantSeparatorsPath }
                    .map { p -> "importScripts(\"$p\");" }
                    .plus("// $hashString")
                    .joinToString("\n")
            )
        }
    }

    val testSw by task {
        toDir(File(""), {it.jsFileValue} ) { it.jsFile }
    }

    val publicSw by task {
        toDir(PublicDir) { it.publicJsFile }
    }
}
