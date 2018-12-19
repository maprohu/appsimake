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
    return split(" ").toTypedArray().startProcess()
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

    val build = HttpHandler { e ->
        "git pull".runCommand()
        "firebase deploy --project appsimake".runCommand()

        e.sendResponseHeaders(200, 0)
        e.responseBody.bufferedWriter().also{ it.write("OK") }.close()
    }

    HttpServer.create(
        InetSocketAddress(
            System.getenv("IP") ?: "0.0.0.0",
            System.getenv("PORT")?.toInt() ?: 8080
        ),
        0
    ).apply {
        createContext("/build", build)
        executor = null
    }.start()

    println("buildserver started")


}