package common

import commonshr.Exec
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Navigator
import org.w3c.dom.Window
import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.browser.window

// https://www.html5rocks.com/en/tutorials/file/filesystem/
external interface WindowWithQuota {

    val TEMPORARY: Int
    val PERSISTENT: Int

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem
    fun webkitRequestFileSystem(
        type: Int,
        size: Number,
        successCallback: (FileSystem) -> Unit,
        errorCallback: (FileError) -> Unit = definedExternally
    )
}

suspend fun WindowWithQuota.requestFileSystem(
    type: Int,
    size: Number
): FileSystem {
    val cd = CompletableDeferred<FileSystem>()
    webkitRequestFileSystem(
        type,
        size,
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

suspend fun Window.requestPersistentFileSystem(size: Number): FileSystem {
    return navigator.withQuota.webkitPersistentStorage.requestQuota(size).let { granted ->
        withQuota.run {
            requestFileSystem(
                PERSISTENT,
                granted
            )
        }
    }
}

inline val Window.withQuota get() = unsafeCast<WindowWithQuota>()

external interface NavigatorWithQuota {
    val webkitPersistentStorage: DeprecatedStorageQuota
    val webkitTemporaryStorage: DeprecatedStorageQuota
}
inline val Navigator.withQuota get() = unsafeCast<NavigatorWithQuota>()


// https://stackoverflow.com/questions/17809824/how-to-use-navigator-instead-of-window-webkitstorageinfo-html5-file-system-api/29662985#29662985
external interface DeprecatedStorageQuota {

    fun requestQuota(
        bytes: Number,
        successCallback: (grantedBytes: Number) -> Unit,
        errorCallback: (Throwable) -> Unit
    )

    fun queryUsageAndQuota(
        successCallback: (usedBytes: Number, grantedBytes: Number) -> Unit,
        errorCallback: (Throwable) -> Unit
    )

}

suspend fun DeprecatedStorageQuota.requestQuota(bytes: Number): Number {
    val cd = CompletableDeferred<Number>()
    requestQuota(
        bytes,
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

data class UsageAndQuota(
    val usage: Number,
    val quota: Number
)
suspend fun DeprecatedStorageQuota.queryUsageAndQuota(): UsageAndQuota {
    val cd = CompletableDeferred<UsageAndQuota>()
    queryUsageAndQuota(
        { usage, quota -> cd.complete(UsageAndQuota(usage = usage, quota = quota)) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystem
external interface FileSystem {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystem/root
    val root: FileSystemDirectoryEntry


}



// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFlags
external interface FileSystemFlags {
    var create: Boolean
    var exclusive: Boolean
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
external interface FileSystemDirectoryEntry: FileSystemEntry {

    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getFile
    fun getFile(
        path: String,
        options: FileSystemFlags,
        successCallback: (FileSystemFileEntry) -> Unit,
        errorCallback: (FileError) -> Unit
    )

    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/getDirectory
    fun getDirectory(
        path: String,
        options: FileSystemFlags,
        successCallback: (FileSystemDirectoryEntry) -> Unit,
        errorCallback: (FileError) -> Unit
    )


    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
    fun createReader(): FileSystemDirectoryReader

}

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
external interface FileSystemDirectoryReader {

    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
    fun readEntries(
        successCallback: (Array<FileSystemEntry>) -> Unit,
        errorCallback: (FileError) -> Unit
    )

}

fun CoroutineScope.readAllEntries(dir: FileSystemDirectoryEntry): ReceiveChannel<Array<FileSystemEntry>> {
    val ch = Channel<Array<FileSystemEntry>>()
    launch {
        val reader = dir.createReader()
        loop@ while(true) {
            val a = reader.readEntries()

            if (a.isEmpty()) {
                break@loop
            }

            ch.send(a)
        }

        ch.close()
    }
    return ch
}

suspend fun FileSystemDirectoryReader.readEntries(): Array<FileSystemEntry> {
    val cd = CompletableDeferred<Array<FileSystemEntry>>()
    readEntries(
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}



suspend fun FileSystemDirectoryEntry.getDirectory(
    path: String,
    options: FileSystemFlags = obj { create = true }
): FileSystemDirectoryEntry {
    val cd = CompletableDeferred<FileSystemDirectoryEntry>()
    getDirectory(
        path,
        options,
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

suspend fun FileSystemDirectoryEntry.getFile(
    path: String,
    options: FileSystemFlags = obj { create = true }
): FileSystemFileEntry {
    val cd = CompletableDeferred<FileSystemFileEntry>()
    getFile(
        path,
        options,
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

suspend fun FileSystemDirectoryEntry.writeFile(name: String, blob: Blob) {
    getFile(name).createWriter().write(blob)
}

external interface FileSystemEntry {
    val isFile: Boolean
    val name: String
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
external interface FileSystemFileEntry: FileSystemEntry {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/createWriter
    fun createWriter(
        successCallback: (FileWriter) -> Unit,
        errorCallback: (FileError) -> Unit
    )

    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry/file
    fun file(
        successCallback: (File) -> Unit,
        errorCallback: (FileError) -> Unit
    )

    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry/remove
    fun remove(
        successCallback: () -> Unit,
        errorCallback: (FileError) -> Unit
    )

}
suspend fun FileSystemFileEntry.createWriter(): FileWriter {
    val cd = CompletableDeferred<FileWriter>()
    createWriter(
        { cd.complete(it) },
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}
suspend fun FileSystemFileEntry.file(): File {
    val cd = CompletableDeferred<File>()
    file(
        { cd.complete(it) } ,
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}
suspend fun FileSystemFileEntry.remove() {
    val cd = CompletableDeferred<Unit>()
    remove(
        { cd.complete(Unit) } ,
        { cd.completeExceptionally(it) }
    )
    return cd.await()
}

external interface FileWriter {
    fun write(blob: Blob)
}

external class FileError: Throwable

val isFileSystemSupported by lazy {
    window.navigator.asDynamic().webkitPersistentStorage != null
}

