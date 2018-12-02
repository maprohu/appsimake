package builder

var projects = listOf<Project>()

class Res(
        val path: String
)

open class Dep

open class Project(
        val name: String,
        vararg dependencies: Dep
) : Dep() {
    init {
        projects += this
    }
}

class App(
        name: String,
        vararg dependencies: Dep
) : Project(name, *dependencies)


class Lib(
        name: String,
        vararg dependencies: Dep
) : Project(name, *dependencies)


class Ext(
        val name: String,
        vararg files: Res
) : Dep()

val kotlin = Ext("kotlin", Res("kotlin.js"))
val kotlinxHtml = Ext("kotlinx-html", Res("kotlinx-html-js.js"))

val common = Lib(
        "common",
        kotlin,
        kotlinxHtml
)

val gymclock = App(
        "gymclock",
        common
)