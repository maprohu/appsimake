package buildtool

import java.io.File

object fns {
    val indexJs by task {
        val file = File("functions/index.js")

        mainfns.depChain.toList().flatMap { it.publicCommonjsFile }
            .forEach { require(it.exists()) }

        file.parentFile.mkdirs()
        file.writeText(
            mainfns.publicCommonjsFile.joinToString {
                "require('./${it.relativeTo(file.parentFile).invariantSeparatorsPath}').init(module.exports);"
            }
//            mainfns.depChain.toList().flatMap { it.publicCommonjsFile }.map {
//                "require(\"./${it.relativeTo(file.parentFile).invariantSeparatorsPath}\");"
//            }.joinToString("\n")
        )

        file
    }
}
