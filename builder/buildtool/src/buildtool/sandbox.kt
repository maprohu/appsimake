package buildtool

val String.cssEscape get() = replace("[^a-zA-Z0-9-]".toRegex(), "_")

fun main() {

    println(1.25.toString().cssEscape)

}