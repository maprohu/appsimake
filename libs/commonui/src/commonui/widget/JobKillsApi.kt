package commonui.widget

import killable.HasKillSet
import killable.seq
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var
import rx.toChannelLater

interface JobKillsApi: CoroutineScope, HasKillSet {

    suspend fun <T, S> RxIface<T>.mapAsync(
        fn: suspend HasKillSet.(T) -> S
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