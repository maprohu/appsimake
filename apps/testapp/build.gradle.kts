import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile

plugins {
    id("kotlin2js") version "1.2.71"
}

repositories {
    jcenter()
}

dependencies {
    compile(project(":libs/common"))
}

