package bootkotlin

import java.io.File
import java.io.FileOutputStream
import java.io.Serializable
import java.lang.Exception
import java.net.URL
import java.nio.channels.Channels
import java.security.MessageDigest
import java.util.zip.ZipEntry
import java.util.zip.ZipFile

fun newSha256() = MessageDigest.getInstance("SHA-256")

fun File.sha256(): ByteArray {
    val md = newSha256()
    update(md)
    return md.digest()

}

fun File.update(md: MessageDigest) {
    if (!exists()) {
        return
    } else if (isFile) {
        md.update(readBytes())
    } else {
        updateDir(md)
    }
}

fun File.updateDir(md: MessageDigest) {
    listFiles()
        .sortedBy { it.name }
        .forEach {
            md.update(it.name.toByteArray())
            if (it.isFile) {
                md.update(it.readBytes())
            } else {
                md.update("//".toByteArray())
                it.updateDir(md)
                md.update("".toByteArray())
            }
        }
}

class FileValue(
    val file: File,
    val hash: ByteArray
) : Serializable {
    constructor(file: File) : this(file, file.sha256() )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as FileValue

        if (!hash.contentEquals(other.hash)) return false

        return true
    }

    override fun hashCode(): Int {
        return hash.contentHashCode()
    }

}


data class ExtJs(
    val main: File
)

data class KotlinJsBin(
    val main: File,
    val meta: File
)



fun extractFiles(from: File, destDir: File, filter: (ZipEntry) -> Boolean = { true }) {
    if (destDir.exists()) return
    ZipFile(from).use { zip ->
        zip.entries().asSequence()
            .filter { !it.isDirectory && filter(it) }
            .forEach { entry ->
            zip.getInputStream(entry).use { input ->
                File(destDir, entry.name)
                    .also { it.parentFile.mkdirs() }
                    .outputStream().use { output ->
                        input.copyTo(output)
                    }
            }
        }
    }
}

fun zipEntryFileName(entry: ZipEntry) = File(entry.name).name

fun extractJs(
    zipFile: File,
    targetDir: File
) {
    if (!targetDir.exists()) {
        extractFiles(
            zipFile,
            targetDir
        ) {
            it.name.endsWith(".js")
        }
    }
}

fun extractJsBin(
    zipFile: File,
    fileNameBase: String,
    targetDir: File
): KotlinJsBin {

    val jsFileName = "$fileNameBase.js"
    val metaJsFileName = "$fileNameBase.meta.js"

    extractJs(
        zipFile,
        targetDir
    )

    return KotlinJsBin(
        File(targetDir, jsFileName),
        File(targetDir, metaJsFileName)
    )
}

class Repo(
    val url: String
)

val KotlinX = Repo("https://dl.bintray.com/kotlin/kotlinx")
val SpringLibRelease = Repo("http://repo.spring.io/libs-release")
val SpringPlugins = Repo("http://repo.spring.io/plugins-release")
val Central = Repo("http://central.maven.org/maven2")

class Maven(
    val repo: Repo,
    val groupId: String,
    val artifactId: String,
    val version: String

) {
    fun url(classifier: String? = null) =
        "${repo.url}/${groupId.replace('.', '/')}/$artifactId/$version/$artifactId-$version${classifier?.let{"-$it"}?:""}.jar"

    fun download(): File {
        try {
            download(url("sources"), groupId)
        } catch (e:Exception) {}
        return download(url(), groupId)
    }
}

val URL.fileName
    get() = File(file).name

fun download(urlString: String, subdir: String? = null): File =
    URL(urlString).let { it.download(it.fileName, subdir) }


fun URL.download(): File = download(fileName)

fun URL.download(fileName: String, subdir: String? = null): File {
    val targetDir = if (subdir == null) DownloadsDir else DownloadsDir.resolve(subdir)
    targetDir.mkdirs()
    val targetFile = targetDir.resolve(fileName)

    if (!targetFile.exists()) {
        println("Downloading: $this")

        this.openStream().use { source ->
            FileOutputStream(targetFile).use { dest ->
                dest.channel.transferFrom(
                    Channels.newChannel(source),
                    0,
                    Long.MAX_VALUE
                )
            }
        }
    }

    return targetFile
}




