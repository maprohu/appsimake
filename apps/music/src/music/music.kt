package music

import common.isStorageManagerSupported
import commonui.*
import kotlinx.coroutines.*
import music.boot.Boot
import org.w3c.files.Blob

fun main() {

    if (isServiceWorkerSupported) {
        APP.startRegisteringServiceWorker()
    }

    GlobalScope.launch {
        Boot.create()
    }

}

data class Playable(
    val id: String,
    val blob: Blob
)


