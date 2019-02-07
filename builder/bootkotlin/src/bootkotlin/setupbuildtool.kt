package bootkotlin

val buildtoolDeps = listOf(
    kotlinxHtmlJvm,
    nanohttpd,
    nanohttpdWebserver,
    kotlinxCoroutinesCore,
    kotlinxCoroutinesCoreCommon
)

fun main() {

    buildtoolDeps.forEach { it.download() }

}