package buildtool

import bootkotlin.*
import kfun.Try
import java.io.File
import java.net.URL
import javax.xml.bind.DatatypeConverter

fun fileTask(fn: () -> File) = TaskRootDelegate(
    provider = {
        FileValue(fn())
    },
    register = {}
)

val GlobalWatcher = SourceWatcher()

fun sources(file: File): TaskRootDelegate<FileValue> {
    file.mkdirs()
    return TaskRootDelegate(
        provider = { FileValue(file) },
        register = { cb ->
            GlobalWatcher.add(file, cb)
        }
    )
}

fun <T> task(fn: () -> T) = TaskDelegate(fn)

val File.metaJs
    get() = parentFile.resolve("$nameWithoutExtension.meta.js")

sealed class Res(val path: String) {
    abstract fun <T> choose(file: (FileRes) -> T, dir: (DirRes) -> T) : T
}
class FileRes(path: String) : Res(path) {
    override fun <T> choose(file: (FileRes) -> T, dir: (DirRes) -> T) = file(this)
}

class DirRes(val dir: String, path: String) : Res(path) {
    override fun <T> choose(file: (FileRes) -> T, dir: (DirRes) -> T) = dir(this)
}


class ResMapping(
    val from: String,
    val to: String
)
fun resmapContent(mappings: Iterable<ResMapping>) = wrapJs(
"""
window.resmaps = window.resmaps || { map: {}, modules: [] };
resmaps.modules.push({
${mappings.map { m -> "  \"${m.from}\": \"${m.to}\"" }.joinToString(",\n")}
});
"""
)

fun publicFileName(baseName: String, extension: String, hash: ByteArray): String {
    return "$baseName-${hash.toHexString()}${extension.let { if (it.isEmpty()) "" else ".$it" }}"
}

fun publicTextFile(baseName: String, extension: String, content: String): File {
    val bytes = content.toByteArray()
    val hash = bytes.sha256
    val fileName = publicFileName(baseName, extension, hash)
    val file = PublicCachedDir.resolve(fileName)
    file.parentFile.mkdirs()
    file.writeBytes(bytes)
    return file
}

fun FileValue.publicFile(): File {
    val fileName = publicFileName(file.nameWithoutExtension, file.extension, hash)
    val target = PublicCachedDir.resolve(fileName)
    target.parentFile.mkdirs()
    if (!target.exists() && file.exists()) {
        file.copyRecursively(target, true)
    }
    return target
}

fun publicTask(fn: () -> List<FileValue>) = task {
    fn().map { it.publicFile() }
}

open class KotlinJsLib(
    maven: Maven,
    scriptName: String,
    deps: List<JsDep> = listOf()
) : KotlinJsDep(deps) {
    constructor(maven: Maven) : this(maven, maven.artifactId)

    val name = "${maven.artifactId}-${maven.version}"

    val downloaded by fileTask { maven.download() }



    override val jsOutputFileValue by task {
        val bin = extractJsBin(
            downloaded.file,
            scriptName,
            ExtractedDir.resolve(maven.groupId).resolve("${maven.artifactId}-${maven.version}")
        )

        listOf(JsOutputFileValue(bin.main))
    }

    override val commonjsOutputFileValue: List<JsOutputFileValue>
        get() = jsOutputFileValue

    override val jsFile by task { jsFileValue.map {it.file} }


}

object kotlinStdlib : KotlinJsLib(kotlinxStdlibJs, "kotlin")

fun wrapJs(innerJs: String) = "(function(){\n${innerJs.prependIndent("  ")}\n})();"
fun loadScriptsJs(scripts: Iterable<File>) = wrapJs(
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
${scripts.map { "  \"${it.invariantSeparatorsPath}\"" }.joinToString(",\n")}
]);
"""
)

fun ByteArray.toHexString() =
    DatatypeConverter.printHexBinary(this)


abstract class JsDep(
    val deps: List<JsDep>
) {
    open val jsOutputFileValue: List<JsOutputFileValue> = listOf()
    open val commonjsOutputFileValue: List<JsOutputFileValue> = listOf()

    open val jsFileValue: List<FileValue> by task { jsOutputFileValue.map { it.js } }
    open val jsFile: List<File> by task { jsFileValue.map { it.file } }

    val jsMetaFileValue : List<FileValue> by task {
        jsOutputFileValue.map { it.metaJs }
    }
    val commonjsMetaFileValue : List<FileValue> by task {
        commonjsOutputFileValue.map { it.metaJs }
    }

    open val commonjsFileValue: List<FileValue> by task { commonjsOutputFileValue.map { it.js } }
    open val publicCss : List<String> = listOf()
    open val testingCss : List<String> = listOf()

    open val publicJsFile by publicTask { jsFileValue }
    val publicCommonjsFile: List<File> by task {
        commonjsFileValue.map {
            val target = FunctionsDir.resolve(it.file.name)
            target.parentFile.mkdirs()
            it.file.copyTo(target, true)
            target
        }
    }

    val depChain : Sequence<JsDep>
        get() = deps.asSequence().flatMap { it.depChain }.distinct() + this

    val depChainWithKotlin : Sequence<JsDep>
        get() = sequenceOf(kotlinStdlib) + depChain

    fun depChainOf(filter: (JsDep) -> Boolean) : Sequence<JsDep> =
            deps
                .asSequence()
                .filter(filter)
                .flatMap { it.depChainOf(filter) }
                .distinct()
                .plus(listOf(this).filter(filter))

    open val testingResources: List<File> = listOf()
    open val publicResources: List<File> = listOf()
}

abstract class KotlinJsDep(deps: List<JsDep>) : JsDep(deps) {
    val metaJsFile by task {
        jsFile.map { it.metaJs }
    }

    @Suppress("UNCHECKED_CAST")
    val kotlinDepChain : Sequence<KotlinJsDep> =
        depChainOf { it is KotlinJsDep } as Sequence<KotlinJsDep>
}



fun runTask(fn: () -> Unit) {
    Try { fn() }
    Changes.waitFor()
}

fun <I, O> createCache(fn: (I) -> O): (I) -> O {
    val map = mutableMapOf<I, O>()

    return { i: I ->
        synchronized(map) {
            map.getOrPut(i) { fn(i) }
        }
    }
}

fun resmapFileContent(
    entries: List<Pair<String, String>>
): List<String> {
    return if (entries.isEmpty()) listOf()
    else {
        listOf(resmapContent(
            entries.map {
                ResMapping(it.first, it.second)
            }
        ))
    }
}
