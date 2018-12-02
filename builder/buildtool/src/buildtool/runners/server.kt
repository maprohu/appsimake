package buildtool.runners

import fi.iki.elonen.NanoHTTPD
import fi.iki.elonen.SimpleWebServer
import java.io.File


fun main(args: Array<String>) {

    SimpleWebServer(
        "localhost",
        8000,
        File("."),
        false
    ).apply {
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false)
    }

}
