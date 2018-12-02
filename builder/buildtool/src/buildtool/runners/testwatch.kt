package buildtool.runners

import buildtool.SourceWatcher
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.runBlocking
import java.nio.file.Paths

fun main(args: Array<String>) {

    runBlocking {
        println("1")
    }
    println("2")

//    val root1 = Paths.get("local/temp1")
//    root1.toFile().mkdirs()
//    val root2 = Paths.get("local/temp2")
//    root2.toFile().mkdirs()
//
//    val sw = SourceWatcher()
//
//    sw.add(root1.toFile()) {
//        println("1")
//    }
//    sw.add(root2.toFile()) {
//        println("2")
//    }

//    Files.walk(root).filter{ it.toFile().isDirectory }.forEach(::println)
//
//    val watcher = root.fileSystem.newWatchService()
//    val rk = root.register(
//        watcher,
//        StandardWatchEventKinds.ENTRY_CREATE,
//        StandardWatchEventKinds.ENTRY_DELETE,
//        StandardWatchEventKinds.ENTRY_MODIFY
//    )
//    println(rk)
//
//    while (true) {
//        val key = watcher.take()
//        println(key)
//        key.pollEvents().forEach {
//            it.apply {
//                println(
//                    "${kind()}: ${context()}"
//                )
//            }
//        }
//        key.reset()
//    }

}