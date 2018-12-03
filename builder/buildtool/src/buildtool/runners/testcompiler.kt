package buildtool.runners

import buildtool.SimpleMessageCollector
import org.jetbrains.kotlin.cli.common.arguments.K2JSCompilerArguments
import org.jetbrains.kotlin.cli.js.K2JSCompiler
import org.jetbrains.kotlin.config.Services


fun main(args: Array<String>) {

    val options =
        K2JSCompilerArguments().apply {
            outputFile = "local/temp/common/common.js"
            metaInfo = true
            sourceMap = true
            libraries = "local/derived/extracted/org.jetbrains.kotlinx/kotlinx-html-js-0.6.11/kotlinx-html-js.meta.js"
        }


    options.freeArgs = listOf("libs/common/src")
    K2JSCompiler().exec(
        SimpleMessageCollector(),
        Services.EMPTY,
        options
    )


}