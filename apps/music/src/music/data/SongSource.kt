package music.data

import common.SetSource
import common.priorityMerge
import common.random
import killable.Assign
import killable.KillSet
import killable.addedTo
import killable.seq
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch

fun songIdSource(
    kills: KillSet,
    globalExclude: Set<String>,
    vararg sources: SetSource<String>
): ReceiveChannel<String> {
    return priorityMerge(
        kills,
        *sources.map { s ->
            s.random(kills, globalExclude)
        }.toTypedArray()
    )
}

class SongSource(
    val channel: ReceiveChannel<String>,
    val set: Assign<List<SetSource<String>>>
) {
    companion object {
        operator fun invoke(ks: KillSet): SongSource {
            val exclude = mutableSetOf<String>()

            val channel = Channel<String>(Channel.RENDEZVOUS)

            val kseq = ks.seq()

            return SongSource(channel) { chs ->
                val cks = kseq.killSet()

                val src = songIdSource(cks, exclude, *chs.toTypedArray())

                GlobalScope.launch {
                    for (id in src) {
                        exclude.clear()
                        exclude += id
                        channel.send(id)
                    }
                }.addedTo(cks)
            }

        }
    }
}


