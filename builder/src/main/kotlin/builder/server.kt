package builder

import fi.iki.elonen.NanoHTTPD
import fi.iki.elonen.SimpleWebServer
import java.io.File


fun main(args: Array<String>) {

    object : SimpleWebServer(
            "localhost",
            8000,
            File("public"),
            false
    ) {}.apply {
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false)
    }

}