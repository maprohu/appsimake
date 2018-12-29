package buildtool

import java.io.File

fun File.hrefFrom(html: File) = this.relativeTo(html.parentFile).invariantSeparatorsPath

fun File.fromApp() = File("..").resolve(this@fromApp)
