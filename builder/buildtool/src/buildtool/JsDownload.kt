package buildtool

import bootkotlin.*
import java.io.File
import java.net.URL

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
        fileName: String,
        jsPath: String,
        cssPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        fileName,
        ExtractInfo(
            File(fileName).nameWithoutExtension,
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
        fileName: String,
        pathToFile: String,
        pathToCss: String,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        fileName,
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
                val targetDir = ExtractedDir.resolve(extract.dir ?: File(fileName).nameWithoutExtension )
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

    override val testingCss by task(
        if (extract == null) {
            { listOf<String>() }
        } else {
            { extract.cssPath.map { extracted.resolve(it).relativeTo(TestingDir).invariantSeparatorsPath }}
        }
    )

    override val publicCss by task(
        if (extract == null) {
            { listOf<String>() }
        } else {
            {
                extract.cssPath.map {
                    FileValue(extracted.resolve(it))
                        .publicFile()
                        .relativeTo(PublicDir).invariantSeparatorsPath
                }
            }
        }
    )
}
