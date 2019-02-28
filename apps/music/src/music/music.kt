package music

import common.isStorageManagerSupported
import commonui.*
import commonui.widget.Loading
import kotlinx.coroutines.*
import music.boot.Boot
import org.w3c.files.Blob

fun main() {

    val loading = Loading()

    if (isServiceWorkerSupported) {
        APP.startRegisteringServiceWorker()
    }

    launchGlobal {
        Boot.create(loading.target)
    }

}

data class Playable(
    val id: String,
    val blob: Blob
)


