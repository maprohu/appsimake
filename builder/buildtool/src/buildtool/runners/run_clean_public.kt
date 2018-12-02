package buildtool.runners

import bootkotlin.CachesDir
import bootkotlin.PublicDir

fun main(args: Array<String>) {
    CachesDir.deleteRecursively()
    PublicDir.deleteRecursively()

}