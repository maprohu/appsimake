package buildtool

import org.jetbrains.kotlin.cli.common.arguments.K2JsArgumentConstants
import java.io.File

object functions : JsModule(
    JsModuleConfig(
        "libs/functions"
    ).copy(
        moduleKind = K2JsArgumentConstants.MODULE_COMMONJS
    )
) {
    val indexJs by task {
        val file = File("functions/index.js")

        file.parentFile.mkdirs()
        jsFileValue.forEach {
            it.file.copyTo(file, true)
        }

        file
    }
}
