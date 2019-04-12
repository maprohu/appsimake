package buildtool

import bootkotlin.*
import kotlinx.html.*
import kotlinx.html.stream.appendHTML
import java.io.PrintWriter


fun Any?.toJson(): String {
    return when (this) {
        null -> "null"
        is MapBase -> {
            map.entries
                .filter { e -> e.key != null }
                .joinToString(",") { e ->
                    "\n\"${e.key}\": ${e.value.toJson()}".prependIndent("  ")
                }
                .let { s -> "{$s\n}" }
        }
        is String -> {
            this
                .replace("\\", "\\\\")
                .replace("\b", "\\b")
                .replace("\u000C", "\\f")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t")
                .replace("\"", "\\\"")
                .let { s -> "\"$s\"" }
        }
        is Iterable<Any?> -> {
            joinToString<Any?>(",") { e ->
                "\n${e.toJson()}".prependIndent("  ")
            }.let { s ->
                "[$s\n]"
            }
        }
        else -> toString()
    }

}

open class MapBase {
    val map: MutableMap<String, Any?> = mutableMapOf()
}

class AppManifest : MapBase() {
    var name: String by map
    var icons: List<Icon> by map
    var display: String by map
    var gcm_sender_id: String by map
    val start_url: String by map

    init {
        gcm_sender_id = "103953800507"
        display = "standalone"
    }

    class Icon : MapBase() {
        var src: String by map
        var type: String by map
        var sizes: String by map

        init {
            type = "image/png"
            sizes = "192x192"
        }
    }
}

data class JsAppConfig(
//    val path: String,
    val module: JsModuleConfig,
    val title: String,
//    val css: List<Res>,
//    val deps: List<JsDep> = listOf(),
    val serviceWorker: JsModule = fbmessagingsw,
    val icon192: String? = null,
    val icon512: String? = null
) {

    constructor(
        path: String,
        title: String,
        css: List<Res>,
        deps: List<JsDep> = listOf(),
        serviceWorker: JsModule = fbmessagingsw
    ): this(
        JsModuleConfig(
            path
        ).copy(
            css = css,
            deps = deps
        ),
        title,
        serviceWorker
    )

    constructor(
        path: String,
        title: String,
        deps: List<JsDep> = listOf(),
        serviceWorker: JsModule = fbmessagingsw
    ) : this(path, title, listOf(), deps, serviceWorker)

}

open class JsApp(
    config: JsAppConfig
) : JsModule(config.module) {

    constructor(
        path: String,
        title: String,
        css: List<Res>,
        deps: List<JsDep> = listOf(),
        serviceWorker: JsModule = fbmessagingsw
    ): this(
        JsAppConfig(
            JsModuleConfig(
                path
            ).copy(
                css = css,
                deps = deps
            ),
            title,
            serviceWorker
        )
    )

    constructor(
        path: String,
        title: String,
        deps: List<JsDep> = listOf(),
        serviceWorker: JsModule = fbmessagingsw
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

    val icon192 by task { config.icon192 }
    val icon512 by task { config.icon512 }

    val manifestText by task {
        AppManifest().apply {
            name = config.title
            val ics = mutableListOf<AppManifest.Icon>()
            icon192?.let { i ->
                ics += AppManifest.Icon().apply {
                    src = i
                    sizes = "192x192"
                }
            }
            icon512?.let { i ->
                ics += AppManifest.Icon().apply {
                    src = i
                    sizes = "512x512"
                }
            }
            if (!ics.isEmpty()) {
                icons = ics
            }
        }.toJson()
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

        config.serviceWorker.writeTestingServiceWorkerJS(file, this)
    }

    val publicSW by task {
        val file = PublicDir.resolve(simpleName).resolve(serviceWorkerFileName)
        config.serviceWorker.writePublicServiceWorkerJS(file, this)
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
