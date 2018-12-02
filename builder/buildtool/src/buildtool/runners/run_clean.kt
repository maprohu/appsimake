package buildtool.runners

import bootkotlin.CachesDir

fun main(args: Array<String>) {
    CachesDir.deleteRecursively()
}