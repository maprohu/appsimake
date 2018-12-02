package buildtool.runners

import bootkotlin.CachesDir
import bootkotlin.TaskCachesDir

fun main(args: Array<String>) {
    TaskCachesDir.deleteRecursively()
}