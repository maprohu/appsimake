package buildtool

import bootkotlin.*
import kfun.Try
import org.jetbrains.kotlin.cli.common.arguments.K2JSCompilerArguments
import org.jetbrains.kotlin.cli.common.messages.CompilerMessageLocation
import org.jetbrains.kotlin.cli.common.messages.CompilerMessageSeverity
import org.jetbrains.kotlin.cli.common.messages.MessageCollector
import org.jetbrains.kotlin.incremental.makeJsIncrementally
import java.io.File
import java.io.Serializable
import kotlinx.html.*
import kotlinx.html.stream.appendHTML
import java.net.URL
import javax.xml.bind.DatatypeConverter

fun fileTask(fn: () -> File) = TaskRootDelegate(
    provider = {
        FileValue(fn())
    },
    register = {}
)

val GlobalWatcher = SourceWatcher()

fun sources(file: File) = TaskRootDelegate(
    provider = { FileValue(file) },
    register = { cb ->
        GlobalWatcher.add(file, cb)
    }
)

fun <T> task(fn: () -> T) = TaskDelegate(fn)

val File.metaJs
    get() = parentFile.resolve("$nameWithoutExtension.meta.js")


open class JsModule(
    val name: String,
    sourceRoot: File,
    outputFile: File,
    cachesDir: File,
    deps: List<JsDep>
) : KotlinJsDep(deps) {

    constructor(
        name: String,
        path: String,
        libraries: List<JsDep> = listOf()
    ) : this(
        name,
        File(path).resolve("src"),
        ProdOutDir.resolve(name).resolve("$name.js"),
        JsCachesDir.resolve(name),
        libraries
    )

    constructor(
        path: String,
        libraries: List<JsDep> = listOf()
    ) : this(
        File(path).name,
        path,
        libraries
    )

    val source by sources(sourceRoot)

//    val libraries by task { librariesList.kotlinJsDeps().map { it.jsFile } }
//
//    val librariesFiles by task {
//        libraries.map { js -> js.map{ it.file } }
//    }
//
//    val kotlinLibraries by task {
//        libraries.kotlinOnly()
//    }

    val libraryFileValues by task {
        kotlinDepChain
            .filter { it != this }
            .toList()
            .flatMap { it.jsFileValue }
    }

    override val jsFileValue by task {

        fun log(msg: String) {
            println("JsModule $sourceRoot: $msg")
        }

        fun err(msg: String) {
            System.err.println("JsModule $sourceRoot: $msg")
        }

        log("Compiling...")

        val mc = object : MessageCollector {
            var hasErrors = false

            override fun clear() {
                hasErrors = false
            }

            override fun hasErrors(): Boolean {
                return hasErrors
            }

            override fun report(
                severity: CompilerMessageSeverity,
                message: String,
                location: CompilerMessageLocation?
            ) {
                if (severity == CompilerMessageSeverity.OUTPUT) return
                if (severity == CompilerMessageSeverity.ERROR) hasErrors = true

                val locmsg = if (location != null) {
                    "\n${location.path}:${location.line}:${location.column}: ${location.lineContent}"
                } else ""

                val out = if (severity == CompilerMessageSeverity.ERROR) ::err else ::log

                out("$severity $message$locmsg")
            }
        }

        makeJsIncrementally(
            cachesDir,
            listOf(source.file),
            K2JSCompilerArguments().apply {
                this.outputFile = outputFile.path
                metaInfo = true
                this.libraries = libraryFileValues.map { it.file.metaJs.path }.joinToString(File.pathSeparator)
            },
            mc
        )

        if (mc.hasErrors) {
            throw TaskFailedException("JsModule $sourceRoot: Compiling FAILED")
        } else {
            log("Compiling SUCCESSFUL")
        }

        listOf(FileValue(outputFile))
    }

    override val jsFile by task { jsFileValue.map {it.file} }

//    override val jsFile by task {
//        JsFile(compiled, true, libraries)
//    }
//
//    override val jsFileOnly by task {
//        JsFile(compiledFile, true, librariesFiles)
//    }
//
//    val publicFile by publicTask { compiled }
//
//    override val publicJsFile by task {
//        JsFile(
//            publicFile,
//            true,
//            librariesList.map { it.publicJsFile }
//        )
//    }

}

fun publicTask(fn: () -> List<FileValue>) = task {
    val fvs = fn()

    fvs.map { fv ->
        val fileName = "${fv.file.nameWithoutExtension}-${fv.hash.toHexString()}${fv.file.extension.let { if (it.isEmpty()) "" else ".$it" }}"
        val file = PublicCachedDir.resolve(fileName)
        file.parentFile.mkdirs()
        if (fv.file.exists()) fv.file.copyTo(file, true)
        file
    }
}

open class KotlinJsLib(
    maven: Maven,
    scriptName: String,
    deps: List<JsDep> = listOf()
) : KotlinJsDep(deps) {
    constructor(maven: Maven) : this(maven, maven.artifactId)

    val downloaded by fileTask { maven.download() }

    override val jsFileValue by task {
        val bin = extractJsBin(
            downloaded.file,
            scriptName,
            ExtractedDir.resolve(maven.groupId).resolve("${maven.artifactId}-${maven.version}")
        )

        listOf(FileValue(bin.main))
    }

    override val jsFile by task { jsFileValue.map {it.file} }


}

object kotlinStdlib : KotlinJsLib(kotlinxStdlibJs, "kotlin")

fun wrapJs(innerJs: String) = "(function(){\n${innerJs.prependIndent("  ")}\n})();"
fun loadScriptsJs(vararg scripts: File) = wrapJs(
"""
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}
function loadScripts(srcs) {
    if (srcs.length == 0) return;

    var src = srcs.shift();

    loadScript(src).then(function(){
        loadScripts(srcs);
    });
}

loadScripts([
${scripts.map { "\"${it.invariantSeparatorsPath}\"" }.joinToString(",\n")}
]);
"""
)

fun ByteArray.toHexString() =
    DatatypeConverter.printHexBinary(this)

abstract class JsDep(
    val deps: List<JsDep>
) {
    abstract val jsFileValue: List<FileValue>
    abstract val jsFile: List<File>
    open val cssFileValue: List<FileValue> = listOf()
    open val cssFile: List<File> = listOf()


    val publicJsFile by publicTask { jsFileValue }

    val depChain : Sequence<JsDep>
        get() = deps.asSequence().flatMap { it.depChain }.distinct() + this

    fun depChainOf(filter: (JsDep) -> Boolean) : Sequence<JsDep> =
            deps
                .asSequence()
                .filter(filter)
                .flatMap { it.depChainOf(filter) }
                .distinct()
                .plus(listOf(this).filter(filter))

}

abstract class KotlinJsDep(deps: List<JsDep>) : JsDep(deps) {
    val metaJsFile by task {
        jsFile.map { it.metaJs }
    }

    val kotlinDepChain : Sequence<KotlinJsDep> =
        depChainOf { it is KotlinJsDep } as Sequence<KotlinJsDep>
}

class DirResource(
    val pathToDir: String,
    val cssPath: List<String> = listOf()
)
class ExtractInfo(
    val dir: String? = null,
    val jsPath: List<String> = listOf(),
    val cssPath: List<String> = listOf(),
    val dirResources: List<String> = listOf()
)
open class JsDownload(
    url: URL,
    fileName: String,
    extract: ExtractInfo?,
    deps: List<JsDep> = listOf()
): JsDep(deps) {

    companion object {
        fun URL.extractDir() =
            File(file).nameWithoutExtension
    }

    constructor(
        url: URL,
        jsPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        ExtractInfo(
            url.extractDir(),
            jsPath = listOf(jsPath)
        ),
        deps
    )


    constructor(
        url: URL,
        extract: ExtractInfo,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        extract,
        deps
    )
    constructor(
        url: String,
        extract: ExtractInfo,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        extract,
        deps
    )

    constructor(
        url: URL,
        jsPath: String,
        cssPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        ExtractInfo(
            File(url.file).nameWithoutExtension,
            jsPath = listOf(jsPath),
            cssPath = listOf(cssPath)
        ),
        deps
    )

    constructor(
        url: URL,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        null,
        deps
    )

    constructor(
        url: String,
        pathToFile: String,
        deps: List<JsDep> = listOf()
    ) : this(URL(url), pathToFile, deps)

    constructor(
        url: String,
        pathToFile: String,
        pathToCss: String,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        pathToFile,
        pathToCss,
        deps
    )

    constructor(
        url: String,
        deps: List<JsDep> = listOf()
    ) : this(URL(url), deps)

    val downloaded by task {
        url.download(fileName)
    }

    val extracted by task(
        if (extract == null) {
            { downloaded }
        } else {
            {
                val targetDir = ExtractedDir.resolve(extract.dir ?: url.extractDir())
                extractFiles(downloaded, targetDir)
                targetDir
            }
        }
    )

    override val jsFile by task(
        if (extract == null) {
            { listOf(downloaded) }
        } else {
            { extract.jsPath.map { extracted.resolve(it) } }
        }
    )

    override val jsFileValue by task { jsFile.map { FileValue(it) } }

    override val cssFile by task(
        if (extract == null) {
            { listOf<File>() }
        } else {
            { extract.cssPath.map { extracted.resolve(it) }}
        }
    )

    override val cssFileValue by task { cssFile.map { FileValue(it) }}
}

open class JsApp(
    path: String,
    deps: List<JsDep> = listOf()
) : JsModule(path, deps) {

    val testHtml by task {
        val file = TestingDir.resolve("$name.html")
        file.parentFile.mkdirs()

        val files =
            sequenceOf(kotlinStdlib)
                .plus(depChain)
                .toList()

        file.writer().use {
            it.appendHTML().html {
                head {
                    files.flatMap { it.cssFile }.forEach {dep ->
                        link(
                            rel = "stylesheet",
                            type = "text/css",
                            href = dep.relativeTo(file.parentFile).invariantSeparatorsPath
                        )
                    }
                }
                body {
                    files.flatMap { it.jsFile }.forEach {dep ->
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
        val deps =
            listOf(kotlinStdlib, this)

        val files =
            listOf(kotlinStdlib)
                .plus(depChain)
                .flatMap { it.publicJsFile }
                .map { it.relativeTo(PublicDir) }
                .toTypedArray()

        val content = loadScriptsJs(*files)

        val fileName = "$name-main-${content.toByteArray().sha256.toHexString()}.js"

        val file = PublicCachedDir.resolve(fileName)

        file.parentFile.mkdirs()
        file.writeText(content)

        file
    }

    val publicNocacheJs by task {
        PublicUncachedDir.resolve("$name.js").apply {
            parentFile.mkdirs()
            writeText(
                loadScriptsJs(
                    publicMainJs.relativeTo(PublicDir)
                )
            )
        }
    }

    val publicHtml by task {
        val file = PublicDir.resolve("$name.html")
        file.parentFile.mkdirs()
        file.writer().use {
            it.appendHTML().html {
                body {
                    script(src = publicNocacheJs.relativeTo(PublicDir).invariantSeparatorsPath) {}
                }
            }
        }

        FileValue(file)
    }

}

fun runTask(fn: () -> Unit) {
    Try { fn() }
    Changes.waitFor()
}