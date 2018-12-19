package buildtool

import bootkotlin.*
import org.jetbrains.kotlin.cli.common.arguments.K2JSCompilerArguments
import org.jetbrains.kotlin.cli.common.arguments.K2JsArgumentConstants
import org.jetbrains.kotlin.cli.common.messages.CompilerMessageLocation
import org.jetbrains.kotlin.cli.common.messages.CompilerMessageSeverity
import org.jetbrains.kotlin.cli.common.messages.MessageCollector
import org.jetbrains.kotlin.cli.js.K2JSCompiler
import org.jetbrains.kotlin.config.Services
import org.jetbrains.kotlin.incremental.makeJsIncrementally
import java.io.File
import java.nio.file.Files
import kotlin.streams.toList

data class JsModuleConfig(
    val name: String,
    val moduleRoot: File,
    val outputDir: File,
    val css: List<Res> = listOf(),
    val deps: List<JsDep> = listOf(),
    val metaInfo : Boolean = true,
    val moduleKind : String = K2JsArgumentConstants.MODULE_PLAIN
) {
    constructor(
        name: String,
        path: File
    ) : this(name, path, ProdOutDir.resolve(name) )

    constructor(
        path: File
    ) : this(path.name, path, ProdOutDir.resolve(path.name) )

    constructor(
        path: String
    ) : this(File(path))
}
open class JsModule(
    val config: JsModuleConfig
) : KotlinJsDep(config.deps) {

    val name = config.name
    val moduleRoot = config.moduleRoot

    constructor(
        name: String,
        moduleRoot: File,
        outputDir: File,
        css: List<Res>,
        deps: List<JsDep>
    ) : this(JsModuleConfig(
        name,
        moduleRoot,
        outputDir,
        css,
        deps
    ))

    val outputFileLocation = config.outputDir.resolve("${config.name}.js")
    val testResmapFileLocation = config.outputDir.resolve("${config.name}.resmap.js")

    constructor(
        name: String,
        path: String,
        libraries: List<JsDep> = listOf()
    ) : this(
        name,
        File(path),
        ProdOutDir.resolve(name),
        listOf(),
        libraries
    )

    constructor(
        name: String,
        path: String,
        css: List<Res>,
        libraries: List<JsDep> = listOf()
    ) : this(
        name,
        File(path),
        ProdOutDir.resolve(name),
        css,
        libraries
    )

    constructor(
        path: String,
        css: List<Res>,
        libraries: List<JsDep> = listOf()
    ) : this(
        File(path).name,
        path,
        css,
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

    private val sourceRoot = config.moduleRoot.resolve("src")
    private val fileResourcesRoot = config.moduleRoot.resolve("res/files")
    private val dirResourcesRoot = config.moduleRoot.resolve("res/dirs")

    val source by sources(sourceRoot)

    val fileResources by sources(fileResourcesRoot)

    val dirResources by sources(dirResourcesRoot)

//    val fileCss = css.filterIsInstance<FileRes>()
//    val dirCss = css.filterIsInstance<DirRes>()

    val publicFileMapping by task {
        Files
            .walk(fileResources.file.toPath())
            .toList()
            .map { it.toFile() }
            .filter { it.isFile }
            .map {
                it.relativeTo(fileResourcesRoot).invariantSeparatorsPath to
                        FileValue(it).publicFile().relativeTo(PublicDir).invariantSeparatorsPath
            }
            .toMap()
    }

    val publicDirMapping by task {
        dirResources
            .file
            .listFiles()
            .map {
                it.relativeTo(dirResourcesRoot).invariantSeparatorsPath to
                        FileValue(it).publicFile().relativeTo(PublicDir).invariantSeparatorsPath
            }
            .toMap()
    }

    val publicMapping
        get() = publicFileMapping + publicDirMapping

    val testingFileMapping by task {
        Files
            .walk(fileResources.file.toPath())
            .toList()
            .map { it.toFile() }
            .filter { it.isFile }
            .map {
                it.relativeTo(fileResourcesRoot).invariantSeparatorsPath to
                        it.relativeTo(TestingDir).invariantSeparatorsPath
            }
            .toMap()
    }

    val testingDirMapping by task {
        dirResources
            .file
            .listFiles()
            .map {
                it.relativeTo(dirResourcesRoot).invariantSeparatorsPath to
                        it.relativeTo(TestingDir).invariantSeparatorsPath
            }
            .toMap()
    }

    val testingMapping
        get() = testingFileMapping + testingDirMapping



//    fun createFileValueCache() = createCache { f: File -> FileValue(f) }
//
//    val filesHashMap: (File) -> FileValue by task {
//        fileResources // clean cache if changed
//        createFileValueCache()
//    }
//
//    val dirsHashMap: (File) -> FileValue by task {
//        dirResources // clean cache if changed
//        createFileValueCache()
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


        val libs = libraryFileValues.map { it.file.metaJs.path }.joinToString(File.pathSeparator)
        log("libs: $libs")

        val options =
            K2JSCompilerArguments().apply {
                this.outputFile = outputFileLocation.path
                this.metaInfo = config.metaInfo
                this.sourceMap = false
                this.libraries = libs
                this.moduleKind = config.moduleKind
            }

        val mc = SimpleMessageCollector(::log, ::err)

        options.freeArgs = listOf(source.file.invariantSeparatorsPath)
        K2JSCompiler().exec(
            SimpleMessageCollector(),
            Services.EMPTY,
            options
        )

//        makeJsIncrementally(
//            cachesDir,
//            listOf(source.file),
//            options,
//            mc
//        )

        if (mc.hasErrors) {
            throw TaskFailedException("JsModule $sourceRoot: Compiling FAILED")
        } else {
            log("Compiling SUCCESSFUL")
        }

        listOf(FileValue(outputFileLocation))
    }

    override val jsFile by task {
        testResmapFile
            .plus(jsFileValue.map {it.file})
    }

    override val publicJsFile by task {
        publicResmapFile + jsFileValue.map { it.publicFile() }
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

    val testResmapFile by task {
        resmapFileContent(
            testingMapping.toList()
        ).map {
            testResmapFileLocation.parentFile.mkdirs()
            testResmapFileLocation.writeText(it)
            testResmapFileLocation
        }
    }

    val publicResmapFile by task {
        resmapFileContent(
            publicMapping.toList()
        ).map {
            publicTextFile("${config.name}.resmap", "js", it)
        }
    }

    override val testingCss by task {
        cssList({ testingFileMapping }, { testingDirMapping })
    }

    private fun cssList(
        fileMapping: () -> Map<String, String>,
        dirMapping: () -> Map<String, String>
    ): List<String> {
        val fm by lazy { fileMapping() }
        val dm by lazy { dirMapping() }
        return config.css.map { res ->
            when (res) {
                is FileRes -> fm.getValue(res.path)
                is DirRes -> File(dm.getValue(res.dir)).resolve(res.path).invariantSeparatorsPath
            }
        }
    }

    override val publicCss by task {
        cssList({ publicFileMapping }, { publicDirMapping })
    }
}
