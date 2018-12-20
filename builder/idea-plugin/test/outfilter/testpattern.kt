package outfilter

import java.io.File

fun main(args: Array<String>) {

    val filePath = "C:\\Oracle\\local\\src\\pullanapp\\builder\\idea-plugin\\test\\outfilter\\testpattern.kt"
    val line = "$filePath:3:10:  asfdasfd"
    println(line)
    println("http://www.google.com")
    println(File(filePath).toURI())

    val m = OutputLinkFilter.FILE_PATTERN.matcher(
        line
    )

    if (m.find()) {
        println(m.group(1))
        println(m.group(2))
        println(m.group(3))
    }

}