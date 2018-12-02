package buildtool

import bootkotlin.*
import kotlinx.html.*
import kotlinx.html.stream.appendHTML

open class JsApp(
    path: String,
    css: List<Res>,
    deps: List<JsDep> = listOf()
) : JsModule(path, css, deps) {

    constructor(
        path: String,
        deps: List<JsDep> = listOf()
    ) : this(path, listOf(), deps)

    val testHtml by task {
        val file = TestingDir.resolve("$name.html")
        file.parentFile.mkdirs()

        val files =
            sequenceOf(kotlinStdlib)
                .plus(depChain)
                .toList()

        file.writer().use { osw ->
            osw.appendHTML().html {
                head {
                    files.flatMap { it.testingCss }.forEach {dep ->
                        link(
                            rel = "stylesheet",
                            type = "text/css",
                            href = dep
                        )
                    }
                }
                body {
                    files.flatMap { f -> f.jsFile }.forEach {dep ->
                        script(
                            src = dep.relativeTo(file.parentFile).invariantSeparatorsPath
                        ) {}
                    }
                }
            }
        }

        FileValue(file)
    }

    val publicMainJs by task {
        val files =
            listOf(kotlinStdlib)
                .plus(depChain)
                .flatMap { it.publicJsFile }
                .map { it.relativeTo(PublicDir) }

        publicTextFile("$name-main", "js", loadScriptsJs(files))
    }

    val publicNocacheJs by task {
        PublicUncachedDir.resolve("$name.js").apply {
            parentFile.mkdirs()
            writeText(
                loadScriptsJs(
                    listOf(publicMainJs.relativeTo(PublicDir))
                )
            )
        }
    }

    val publicMainCss by task {
        val text = depChain
            .toList()
            .flatMap { it.publicCss }
            .map {
                "@import '../$it';"
            }
            .joinToString("\n")

        publicTextFile(
            "$name-main", "css", text
        )
    }

    val publicNocacheCss by task {
        PublicUncachedDir.resolve("$name.css").apply {
            val path = publicMainCss.relativeTo(PublicDir).invariantSeparatorsPath
            parentFile.mkdirs()
            writeText(
                "@import '../$path';"
            )
        }
    }

    val publicHtml by task {
        val file = PublicDir.resolve("$name.html")
        file.parentFile.mkdirs()
        file.writer().use {
            it.appendHTML().html {
                head {
                    link(
                        rel = "stylesheet",
                        type = "text/css",
                        href = publicNocacheCss.relativeTo(file.parentFile).invariantSeparatorsPath
                    )
                }
                body {
                    script(src = publicNocacheJs.relativeTo(PublicDir).invariantSeparatorsPath) {}
                }
            }
        }

        FileValue(file)
    }

}
