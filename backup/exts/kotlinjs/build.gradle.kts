dependencies {
    compile(kotlin("stdlib-js", version = "1.3.10"))
}

val extractJs by tasks.registering {
    doLast {
//        configurations.compile.dependencies.forEach {println(it)}
    }
}