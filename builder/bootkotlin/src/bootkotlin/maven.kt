package bootkotlin


val kotlinxSerializationRuntime = Maven(
    KotlinX,
    "org.jetbrains.kotlinx",
    "kotlinx-serialization-runtime",
    "0.9.1"
)

val kotlinxSerializationRuntimeJs = Maven(
    KotlinX,
    "org.jetbrains.kotlinx",
    "kotlinx-serialization-runtime-js",
    "0.9.1"
)

val kotlinxStdlibJs = Maven(
    Central,
    "org.jetbrains.kotlin",
    "kotlin-stdlib-js",
    KotlinVersion
)

val kotlinxHtmlJs = Maven(
    SpringLibRelease,
    "org.jetbrains.kotlinx",
    "kotlinx-html-js",
    "0.6.11"
)

val kotlinxHtmlJvm = Maven(
    SpringPlugins,
    "org.jetbrains.kotlinx",
    "kotlinx-html-jvm",
    "0.6.11"
)

val proguardBase = Maven(
    Central,
    "net.sf.proguard",
    "proguard-base",
    "6.0.3"
)

val nanohttpdWebserver = Maven(
    Central,
    "org.nanohttpd",
    "nanohttpd-webserver",
    "2.3.1"
)

val nanohttpd = Maven(
    Central,
    "org.nanohttpd",
    "nanohttpd",
    "2.3.1"
)

val kotlinxCoroutinesCore = Maven(
    Central,
    "org.jetbrains.kotlinx",
    "kotlinx-coroutines-core",
    "1.0.1"
)

val kotlinxCoroutinesCoreJs = Maven(
    Central,
    "org.jetbrains.kotlinx",
    "kotlinx-coroutines-core-js",
    "1.0.1"
)

val kotlinxCoroutinesCoreCommon = Maven(
    Central,
    "org.jetbrains.kotlinx",
    "kotlinx-coroutines-core-common",
    "1.0.1"
)
