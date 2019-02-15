package music.import

import common.Emitter
import common.ListenableMutableList
import common.None
import common.hash
import commonshr.plusAssign
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import commonui.widget.ViewImpl
import music.Playable
import music.data.readAsArrayBuffer
import music.database.Database
import music.database.DatabasePath
import musiclib.Mp3File
import musiclib.UserSongState
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.files.File
import rx.Var
import rx.mapAsync

class ImportPath(
    val import: Import
): DatabasePath(import.from)

class Import(
    val from: Database
): UIBase<TopAndContent>(from) {
    val path = ImportPath(this)

    val importing = ListenableMutableList<ImportFile>()

    override val rawView = ui()

    suspend fun load(list: List<File>) {
        list.forEach { file ->
            ImportFile(
                this,
                file,
                Playable(file.readAsArrayBuffer().hash(), file)
            ).apply {
                importing += this
                kills += {
                    importing -= this
                }
            }
        }
    }

}

class ImportFile(
    val import: Import,
    val file: File,
    val playable: Playable
): UIBase<HTMLElement>(import) {


    val state = import.path.boot.userSongs.map { usi ->
        usi.item?.let { us -> us.get(playable.id)() } ?: UserSongState.New
    }.apply {
        forEach { s ->
            if (s == UserSongState.DontLike) {
                coroutineContext.cancel()
            }
        }
    }

    val tag = import.path.boot.songInfoSource.mapAsync(Var(None)) {
        it.item(playable)
    }.map {
        it().getOrElse { Mp3File() }
    }

    override val rawView = ui()



    init {

    }

}