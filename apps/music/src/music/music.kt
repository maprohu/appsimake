package music

import commonui.*
import kotlinx.coroutines.*
import music.boot.Boot
import org.w3c.files.Blob

fun main() {

    GlobalScope.launch {
        APP.registerServiceWorker()
        Boot.create()
    }

}

data class Playable(
    val id: String,
    val blob: Blob
)


