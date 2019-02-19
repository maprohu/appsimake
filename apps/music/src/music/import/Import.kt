package music.import

import common.*
import commonshr.executor
import commonshr.plusAssign
import commonshr.withCounter
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import music.Playable
import music.common.MusicApi
import music.data.readAsArrayBuffer
import music.database.Database
import music.database.DatabasePath
import musiclib.Mp3File
import musiclib.UserSongState
import org.w3c.dom.HTMLElement
import org.w3c.files.File
import rx.RxMutableSet
import rx.Var

class ImportPath(
    val import: Import
): DatabasePath(import.from)

class Import(
    val from: Database
): UIBase<TopAndContent>(from), MusicApi {
    override val path = ImportPath(this)


    val loadable = RxMutableSet<ImportFile>()
    val loadList = ListenableMutableList<ImportFile>()

    override val rawView = ui()

    private val loadIds: Set<String> = mutableSetOf<String>().apply {
        loadList.emitter.map { m -> m.map { v -> v.playable.id } }.feedTo(this)
    }

    suspend fun load(list: List<File>) {
        list.filter { it.name.endsWith(".mp3") }.forEach { file ->
            path.boot.tasks.exec {
                val id = file.readAsArrayBuffer().hash()

                if (id !in loadIds) {
                    ImportFile(
                        this,
                        file,
                        Playable(id, file)
                    ).apply {
                        loadList += this
                        kills += {
                            loadList -= this
                        }
                    }
                }
            }
        }
    }

    fun startImporting() {
        loadList.forEach {
            it.startImporting()
        }
    }

    fun clear() {
        loadList.forEach {
            it.coroutineContext.cancel()
        }
    }
}

class ImportFile(
    val import: Import,
    val file: File,
    val playable: Playable
): UIBase<HTMLElement>(import) {
    val path = import.path

    val importing = Var(false).apply {
        forEach { i ->
            path.import.loadable.apply {
                if (i) {
                    remove(this@ImportFile)
                    path.boot.tasks.exec {
                        path.boot.localSongs.addMp3(playable)
                    }
                }
                else {
                    add(this@ImportFile)
                    kills += {
                        remove(this@ImportFile)
                    }
                }
            }
        }
    }

    val state = path.loggedIn.userSongs.get(playable.id).apply {
        forEach { s ->
            if (s == UserSongState.DontLike) {
                coroutineContext.cancel()
            }
        }
    }

    val tag = path.loggedIn.songInfoSource(playable.id) { playable.blob }

    override val rawView = ui()

    fun startImporting() {
        importing.now = true
    }

    init {
        path.boot.localSongs.set.containsRx(playable.id).forEach { c ->
            if (c) coroutineContext.cancel()
        }
    }

}