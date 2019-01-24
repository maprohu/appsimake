package music

import org.khronos.webgl.ArrayBuffer

data class Mp3Tag(
    val artist: List<String> = emptyList(),
    val title: List<String> = emptyList()
)


fun ArrayBuffer.extractMp3Tag(): Mp3Tag {
    return try {
        val tag = id3v2_3(this)

        val artists = listOf(
            Frames.TPE1,
            Frames.TPE2,
            Frames.TPE3,
            Frames.TPE4
        )
        val titles = listOf(
            Frames.TIT1,
            Frames.TIT2,
            Frames.TIT3
        )

        fun list(frs: List<Frames.Frame>): List<String> {
            return frs
                .flatMap { fr ->
                    tag.text.getOrElse(fr.name) { listOf() }
                }
        }

        Mp3Tag(
            artist = list(artists),
            title = list(titles)
        )
    } catch (e: Throwable) {
        try {
            val tag = id3v1(this)

            Mp3Tag(
                artist = listOf(tag.artist),
                title = listOf(tag.title)
            )
        } catch (e: Throwable) {
            Mp3Tag()
        }
    }

}
