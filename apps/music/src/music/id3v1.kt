package music

import org.khronos.webgl.ArrayBuffer

data class ID3v1(
    val title: String,
    val artist: String,
    val album: String,
    val year: String,
    val comment: String,
    val genre: String
)

fun id3v1(buffer: ArrayBuffer): ID3v1 {
    val tr = TagReader(buffer)
    tr.pos = buffer.byteLength - 128
    val tag = tr.string(3)

    if (tag != "TAG") {
        throw IllegalArgumentException("No ID3v1 tag found.")
    }

    fun str0(size: Int) = tr.string(size).takeWhile { ch -> ch != 0.toChar() }

    return ID3v1(
        title = str0(30),
        artist = str0(30),
        album = str0(30),
        year = str0(4),
        comment = str0(30),
        genre = str0(1)
    )
}