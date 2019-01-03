package buildserver

import com.sun.net.httpserver.HttpHandler
import com.sun.net.httpserver.HttpServer
import java.io.File
import java.net.InetSocketAddress
import java.util.concurrent.TimeUnit

fun Array<String>.startProcess(): Process {
    println("Running CMD: ${this.joinToString(" ")}")
    return ProcessBuilder(*this)
        .redirectOutput(ProcessBuilder.Redirect.INHERIT)
        .redirectError(ProcessBuilder.Redirect.INHERIT)
        .start()!!
}

fun String.startProcess(): Process {
    return trim().split("\\s+".toRegex()).toTypedArray().startProcess()
}


fun String.runCommand() {
    startProcess()
        .waitFor(60, TimeUnit.MINUTES)
}

fun Array<String>.runCommand() {
    startProcess()
        .waitFor(60, TimeUnit.MINUTES)
}

fun main(args: Array<String>) {

    fun pull() {
        "git pull".runCommand()
    }

    fun handler(fn: () -> Unit) =
        HttpHandler { e ->
            fn()
            e.sendResponseHeaders(200, 0)
            e.responseBody.bufferedWriter().also{ it.write("OK") }.close()
        }

    fun handler(extra: String = "") = handler {
        pull()
        "firebase deploy --project appsimake $extra".runCommand()
    }

    val build = handler()
    val hosting = handler("--only hosting")

    HttpServer.create(
        InetSocketAddress(
            System.getenv("IP") ?: "0.0.0.0",
            System.getenv("PORT")?.toInt() ?: 8080
        ),
        0
    ).apply {
        createContext("/build", build)
        createContext("/hosting", hosting)
        createContext("/pull", handler { pull() })
        executor = null
    }.start()

    println("buildserver started")


}