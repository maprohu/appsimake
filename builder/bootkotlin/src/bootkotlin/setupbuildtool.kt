package bootkotlin

val buildtoolDeps = listOf(
    kotlinxHtmlJvm,
    nanohttpd,
    nanohttpdWebserver,
    kotlinxCoroutinesCore,
    kotlinxCoroutinesCoreCommon
)

fun main(args: Array<String>) {

    buildtoolDeps.forEach { it.download() }

}