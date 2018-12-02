package buildsrc

import org.gradle.api.DefaultTask
import org.gradle.api.Project
import org.gradle.api.tasks.*
import org.gradle.api.tasks.incremental.IncrementalTaskInputs
import org.gradle.kotlin.dsl.extra
import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile
import java.io.File
import java.nio.file.Files
import java.security.MessageDigest
import javax.xml.bind.DatatypeConverter

fun hashFile(
    file: File,
    algorithm: String
) : String {
    return file
        .let { Files.readAllBytes(file.toPath()) }
        .let { MessageDigest.getInstance(algorithm).digest(it) }
        .let { DatatypeConverter.printHexBinary(it) }
}

fun writeHashFile(
    file: File,
    algorithm: String,
    targetFile: File
) {
    targetFile.parentFile.mkdirs()
    targetFile.writeText(
        hashFile(file, algorithm)
    )
}

open class CalculateHashes : DefaultTask() {

    @InputDirectory
    var inputDir: File = project.projectDir.resolve("src/main/resources")

    @Input
    val algorithm : String = "SHA-256"

    @OutputDirectory
    var outputDir: File = project.buildDir.resolve("hashes")

    @TaskAction
    fun exec(inputs: IncrementalTaskInputs) {
        if (!inputs.isIncremental) {
            project.delete(outputDir.listFiles())
        }

        inputs.outOfDate {
            if (file.isDirectory) return@outOfDate

            val targetFile = outputDir.resolve(file.relativeTo(inputDir))
            writeHashFile(
                file,
                algorithm,
                targetFile
            )
        }


    }

}

open class CalculateHash : DefaultTask() {

    @InputFile
    lateinit var inputFile: File

    init {
        (project.tasks.findByName("compileKotlin2Js") as Kotlin2JsCompile?)
            ?.also { kjs ->
                inputFile = project.file(kjs.outputFile)
                dependsOn(kjs)
            }
    }

    @Input
    val algorithm : String = "SHA-256"

    @OutputDirectory
    var outputDir: File = project.buildDir.resolve("hashes")

    @TaskAction
    fun exec() {
        writeHashFile(
            inputFile,
            algorithm,
            outputDir.resolve(inputFile.name)
        )
    }

}

enum class Role(val js: Boolean) {
    None(false),
    Ext(false),
    Lib(true),
    App(true),
}

var Project.role : Role
    get() = if (extra.has("role")) extra["role"] as Role else Role.None
    set(v) { extra["role"] = v }