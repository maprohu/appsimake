package music.data

import common.*
import commonshr.groupThousands
import commonui.globalStatus
import kotlinx.coroutines.CompletableDeferred
import music.common.FileSystemLocalSongStorage
import music.common.IDBLocalSongStorage
import music.common.LocalSongStorage
import music.localDatabase
import kotlin.browser.window
import kotlin.math.max

suspend fun setupFileStorage(): LocalSongStorage {
    val MinQuota = 1024 * 1024 * 1024

    val ldb = localDatabase()
    val ilss = IDBLocalSongStorage(ldb)

    return if (isFileSystemSupported) {
        globalStatus %= "Calculating IDB size..."
        val currentSize = ilss.listMp3s().sumByDouble { id ->
            (ilss.readMp3(id)?.size ?: 0).toDouble()
        }

        val requestSize = max(MinQuota.toDouble(), currentSize * 2)

        globalStatus %= "Requesting FileSystem storage: ${requestSize.toLong().groupThousands} bytes..."
        val fs = window.requestPersistentFileSystem(requestSize)

        FileSystemLocalSongStorage.create(fs).apply {
            globalStatus %= "Moving files to FileSystem..."
            ilss.listMp3s().forEach { id ->
                ilss.readMp3(id)?.let { blob ->
                    writeMp3(id, blob)
                    ilss.deleteMp3(id)
                }
            }
            globalStatus %= "FileSystem created."
        }
    } else {
        globalStatus %= "Using IDB."
        ilss
    }
}