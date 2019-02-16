package music.import

import common.*
import commonshr.plusAssign
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import music.Playable
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
): UIBase<TopAndContent>(from) {
    val path = ImportPath(this)

    val pending = Var(0)

    val loadable = RxMutableSet<ImportFile>()
    val loadList = ListenableMutableList<ImportFile>()

    override val rawView = ui()

    private val loadIds: Set<String> = mutableSetOf<String>().apply {
        loadList.emitter.map { m -> m.map { v -> v.playable.id } }.feedTo(this)
    }

    suspend fun load(list: List<File>) {
        pending.transform { it + list.size }
        list.forEach { file ->
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

            pending.transform { it - 1 }
        }
    }

    fun startImporting() {
        loadList.forEach {
            it.startImporting()
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
                    path.import.pending.transform { it + 1 }
                    kills += {
                        import.pending.transform { it - 1 }
                    }
                    exec {
                        path.boot.localSongs.addMp3(playable)
                    }
                }
                else add(this@ImportFile)
            }
        }
    }

    val state = path.boot.userSongs.map { usi ->
        usi.item?.let { us -> us.get(playable.id)() } ?: UserSongState.New
    }.apply {
        forEach { s ->
            if (s == UserSongState.DontLike) {
                coroutineContext.cancel()
            }
        }
    }

    val tag = path.boot.songInfoSource.mapAsync(Var(None)) {
        it.item(playable)
    }.map {
        it().getOrElse { Mp3File() }
    }

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