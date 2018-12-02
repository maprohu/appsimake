package bootkotlin

import bootjava.BootJava
import java.io.File

val LocalDirPath = BootJava.LOCAL_DIR
val DownloadsDirPath = BootJava.DOWNLOADS_DIR
val DownloadsDir = File(DownloadsDirPath)
val LocalDir = File(LocalDirPath)
val DerivedDir = LocalDir.resolve("derived")
val CachesDir = DerivedDir.resolve("caches")
val JsCachesDir = CachesDir.resolve("jscompiler")
val TaskCachesDir = CachesDir.resolve("tasks")
val ProdOutDir = DerivedDir.resolve("out/production")
val ExtractedDir = DerivedDir.resolve("extracted")
val TestingDir = DerivedDir.resolve("testing")


val KotlinLibDir = BootJava.KOTLIN_LIB_DIR
val LibDir = BootJava.LIB_DIR
val KotlinVersion = BootJava.KOTLIN_VERSION
val PublicDir = File("public")
val PublicCachedDir = PublicDir.resolve("cache")
val PublicUncachedDir = PublicDir.resolve("nocache")