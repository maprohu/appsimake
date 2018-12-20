package buildtool

import org.jetbrains.kotlin.cli.common.arguments.K2JsArgumentConstants
import java.io.File

object fns {
    val indexJs by task {
        val file = File("functions/index.js")

        file.parentFile.mkdirs()
        file.writeText(
            mainfns.depChain.toList().flatMap { it.publicCommonjsFile }.map {
                "require.cache[\"${it.nameWithoutExtension}\"] = require(\"./${it.relativeTo(file.parentFile).invariantSeparatorsPath}\");"
            }.joinToString("\n")
        )

        file
    }
}
