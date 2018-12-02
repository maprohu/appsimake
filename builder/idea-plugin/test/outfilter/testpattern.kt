package outfilter

fun main(args: Array<String>) {

    val m = OutputLinkFilter.FILE_PATTERN.matcher(
        "C:\\Oracle\\local\\src\\kotlinjvmtest\\apps\\testapp\\src\\testapp\\testapp.kt:11:28:     document.body!!.append {"
    )

    if (m.find()) {
        println(m.group(1))
        println(m.group(2))
        println(m.group(3))
    }

}