package music.import

import common.*
import commonshr.discardExecutor
import commonshr.plusAssign
import commonshr.withCounter
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import music.Playable
import music.common.MusicApi
import music.data.readAsArrayBuffer
import music.database.Database
import music.database.DatabasePath
import musiclib.UserSongState
import org.w3c.dom.HTMLElement
import org.w3c.files.File
import rx.RxMutableSet
import rx.Var

interface ImportPath: DatabasePath {
    val import: Import
}

class Import(
    val from: Database
): UIBase<TopAndContent>(from), MusicApi, ImportPath, DatabasePath by from {
    override val import = this


    val loadable = RxMutableSet<ImportFile>()
    val loadList = RxMutableList<ImportFile>()


    private val loadIds: Set<String> = mutableSetOf<String>().apply {
        loadList.emitter.map { m -> m.map { v -> v.playable.id } }.feedTo(this)
    }

    val loader = discardExecutor().withCounter

    suspend fun load(list: List<File>) {
        list.filter { it.name.endsWith(".mp3") }.forEach { file ->
            loader.exec {
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

    override val rawView = ui()
}

class ImportFile(
    import: Import,
    val file: File,
    val playable: Playable
): UIBase<HTMLElement>(import), ImportPath by import {

    val importing = Var(false).apply {
        forEach { i ->
            import.loadable.apply {
                if (i) {
                    remove(this@ImportFile)
                    boot.tasks.exec {
                        boot.localSongs.addMp3(playable)
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

    val state = loggedIn.userSongs.get(playable.id).apply {
        forEach { s ->
            if (s == UserSongState.DontLike) {
                coroutineContext.cancel()
            }
        }
    }

    val tag = loggedIn.songInfoSource(playable.id) { playable.blob }

    override val rawView = ui()

    fun startImporting() {
        importing.now = true
    }

    init {
        boot.localSongs.set.containsRx(playable.id).forEach { c ->
            if (c) coroutineContext.cancel()
        }
    }

}