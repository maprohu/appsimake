package buildtool

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.actor
import java.io.File
import java.nio.file.*

class SourceWatcher {

    var fsmap = mapOf<FileSystem, FsSourceWatcher>()

    @Synchronized
    fun add(file: File, cb: () -> Unit) {
        val p = file.toPath()
        val fs = p.fileSystem

        val fsw =
                fsmap.getOrElse(fs) {
                    val fsw = FsSourceWatcher(fs)
                    fsmap += fs to fsw
                    fsw
                }

        fsw.add(p, cb)
    }

}

sealed class WatcherMsg
class Change(val key: WatchKey) : WatcherMsg()
class Reg(
    val path: Path,
    val cb: () -> Unit
) : WatcherMsg()

class FsSourceWatcher(
    fs: FileSystem,
    val cs: CoroutineScope = GlobalScope
) {

    val act = cs.actor<WatcherMsg> {

        var cbs = mapOf<WatchKey, Reg>()

        fun reg(path: Path, cb: () -> Unit) {
            val key = path.register(
                watch,
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_DELETE,
                StandardWatchEventKinds.ENTRY_MODIFY
            )!!

            cbs += key to Reg(path, cb)
        }

        fun regtree(path: Path, cb: () -> Unit) {
            Files
                .walk(path)
                .filter { it.toFile().isDirectory }
                .forEach { reg(it, cb) }
        }

        fun unreg(key: WatchKey) {
            cbs -= key
        }

        fun change(key: WatchKey) {
            if (key.isValid) {
                val r = cbs.getValue(key)

                r.cb()

                key.pollEvents().forEach {
                    if (it.kind() == StandardWatchEventKinds.ENTRY_CREATE) {
                        val created = r.path.resolve(it.context() as Path)

                        if (created.toFile().isDirectory) {
                            reg(created, r.cb)
                        }
                    }
                }

                key.reset()
            } else {
                unreg(key)
            }
        }

        for (msg in channel) {
            when (msg) {
                is Change -> change(msg.key)
                is Reg -> regtree(msg.path, msg.cb)
            }
        }

    }

    fun add(path: Path, cb: () -> Unit) {
        cs.launch {
            act.send(Reg(path, cb))
        }
    }

    private val watch = fs.newWatchService()


    init {
        GlobalScope.launch {

            while (true) {
                val key = watch.take()

                act.send(Change(key))
            }
        }
    }

}