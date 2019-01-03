package buildtool

import bootkotlin.*
import kotlinx.html.*
import kotlinx.html.stream.appendHTML
import java.io.PrintWriter

open class JsApp(
    path: String,
    title: String,
    css: List<Res>,
    deps: List<JsDep> = listOf(),
    serviceWorker: JsModule = firebaseMessagingSw
) : JsModule(path, css, deps) {

    constructor(
        path: String,
        title: String,
        deps: List<JsDep> = listOf(),
        serviceWorker: JsModule = firebaseMessagingSw
    ) : this(path, title, listOf(), deps, serviceWorker)

    val testHtml by task {
        val file = TestingDir.resolve(simpleName).resolve("index.html")
        file.parentFile.mkdirs()

        val files =
            sequenceOf(kotlinStdlib)
                .plus(depChain)
                .toList()

        file.writer().use { osw ->
            PrintWriter(osw).println("<!DOCTYPE html>")
            osw.appendHTML().html {
                head {
                    link(
                        rel="manifest",
                        href=testingManifest.hrefFrom(file)
                    )
                    setupHtmlHead()
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
                            src = dep.hrefFrom(file)
                        ) {}
                    }
                }
            }
        }

        FileValue(file)
    }

//    val publicMainJs by task {
//        val files =
//            listOf(kotlinStdlib)
//                .plus(depChain)
//                .flatMap { it.publicJsFile }
//                .map { it.relativeTo(PublicDir).fromApp() }
//
//        publicTextFile("$name-main", "js", loadScriptsJs(files))
//    }

//    val publicNocacheJs by task {
//        PublicUncachedDir.resolve("$simpleName.js").apply {
//            parentFile.mkdirs()
//            writeText(
//                loadScriptsJs(
//                    listOf(publicMainJs.relativeTo(PublicDir).fromApp())
//                )
//            )
//        }
//    }

//    val publicMainCss by task {
//        val text = depChain
//            .toList()
//            .flatMap { it.publicCss }
//            .map {
//                "@import '$it';"
//            }
//            .joinToString("\n")
//
//        publicTextFile(
//            "$name-main", "css", text
//        )
//    }

//    val publicNocacheCss by task {
//        PublicUncachedDir.resolve("$simpleName.css").apply {
//            val p = publicMainCss.relativeTo(PublicUncachedDir).invariantSeparatorsPath
//            parentFile.mkdirs()
//            writeText(
//                "@import '$p';"
//            )
//        }
//    }

    val manifestText by task {
        """
            {
                "name": "$title",
                "gcm_sender_id": "103953800507"
            }
        """.trimIndent()
    }

    val publicManifest by task {
//        val targetFile = PublicDir.resolve(simpleName).resolve("manifest.json")
//        targetFile.parentFile.mkdirs()
//        targetFile.writeText(manifestText)
//        targetFile
        testingManifestFileValue.publicFile()
    }

    val testingManifestFileValue by task {
        val targetFile = TestingDir.resolve(simpleName).resolve("manifest.json")
        targetFile.parentFile.mkdirs()
        targetFile.writeText(manifestText)
        FileValue(targetFile)

    }
    val testingManifest by task {
        testingManifestFileValue.file
    }

    val publicHtml by task {
        val file = PublicDir.resolve(simpleName).resolve("index.html")
        file.parentFile.mkdirs()
        file.writer().use { osw ->
            PrintWriter(osw).println("<!DOCTYPE html>")
            osw.appendHTML().html {
                head {
                    setupHtmlHead()
                    link(
                        rel="manifest",
                        href=publicManifest.hrefFrom(file)
                    )

                    depChainWithKotlin
                        .toList()
                        .flatMap { it.publicCss }
                        .forEach { css ->
                            link(
                                rel = "stylesheet",
                                type = "text/css",
                                href = css
                            )
                        }

                }
                body {
                    depChainWithKotlin
                        .toList()
                        .flatMap { it.publicJsFile }
                        .forEach { js ->
                            script(
                                src = js.hrefFrom(file)
                            ) {}
                        }
                }
            }
        }

        FileValue(file)
    }


    val testSW by task {
        val file = TestingDir.resolve(simpleName).resolve(serviceWorkerFileName)

        serviceWorker.writeTestingServiceWorkerJS(file, this)
    }

    val publicSW by task {
        val file = PublicDir.resolve(simpleName).resolve(serviceWorkerFileName)
        serviceWorker.writePublicServiceWorkerJS(file, this)
    }

    private fun HEAD.setupHtmlHead() {
        meta(charset = "UTF-8")
        meta(
            name = "viewport",
            content = "width=device-width, initial-scale=1, shrink-to-fit=no"
        )
        meta(
            name = "mobile-web-app-capable",
            content = "yes"
        )
        meta(
            name = "apple-mobile-web-app-capable",
            content = "yes"
        )
    }

    companion object {
        val serviceWorkerFileName = "service-worker.js"
    }
}
