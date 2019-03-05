package commonui.widget

import commonshr.KillsApi
import killable.seq
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var

interface JobKillsApi: CoroutineScope, KillsApi {

    suspend fun <T, S> RxIface<T>.mapAsync(
        fn: suspend KillsApi.(T) -> S
    ): RxIface<S> {
        val kseq = kills.seq()

        suspend fun calc(t: T): S = kseq.killables().fn(t)

        val rxv = Var(calc(now))
        val ch = toChannelLater()

        launch {
            for (t in ch) {
                rxv.now = calc(t)
            }
        }

        return rxv
    }
}