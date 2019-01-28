// http://id3.org/id3v2.4.0-structure
package music

import kotlinx.coroutines.CompletableDeferred
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.DataView
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.get
import org.w3c.files.Blob
import org.w3c.files.File
import org.w3c.files.FileReader
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

data class Id3Version(
    val major: Byte,
    val revision: Byte
) {
    companion object {
        val SupportedMajorVersion = 3.toByte()
    }
    init {
//        require(major <= MaximumSupportedMajorVersion) { "Major version $major > $MaximumSupportedMajorVersion "}
        require(major == SupportedMajorVersion) { "Only version $SupportedMajorVersion is supported. File contains $major."}
        require(major < 0xff && revision < 0xff) { "Invalid version number." }
    }
}


data class Id3Flags(
    val unsynchronisation: Boolean,
    val extendedHeader: Boolean,
    val experimentalIndicator: Boolean,
    val footerPresent: Boolean
) {
    companion object {
        val UnsynchronisationBit = 7
        val ExtendedHeaderBit = 6
        val ExperimentalIndicatorBit = 5
        val FooterPresentBit = 4

        fun of(flags: Byte): Id3Flags {

            var unchecked = flags.toInt()

            fun bit(bit: Int): Boolean {
                val test = 1 shl bit
                val result = (unchecked and test) != 0
                unchecked = unchecked and test.inv()
                return result
            }

            return Id3Flags(
                unsynchronisation = bit(UnsynchronisationBit),
                extendedHeader = bit(ExtendedHeaderBit),
                experimentalIndicator = bit(ExperimentalIndicatorBit),
                footerPresent = bit(FooterPresentBit)
            ).also {
                require(unchecked == 0) { "Used flags not cleared" }
            }
        }
    }
}

data class FrameFlags(
    val tagAlterPreservation: Boolean,
    val fileAlterPreservation: Boolean,
    val readOnly: Boolean,
    val groupingIdentity: Boolean,
    val compression: Boolean,
    val encryption: Boolean,
    val unsynchronisation: Boolean,
    val dataLengthIndicator: Boolean
) {
    companion object {
        fun of(b1: Byte, b2: Byte): FrameFlags {
            var unchecked = (b1.toInt() shl 8) or b2.toInt()

            fun bit(bit: Int): Boolean {
                val test = 1 shl bit
                val result = (unchecked and test) != 0
                unchecked = unchecked and test.inv()
                return result
            }

            return FrameFlags(
                tagAlterPreservation = bit(14),
                fileAlterPreservation = bit(13),
                readOnly = bit(12),
                groupingIdentity = bit(6),
                compression = bit(3),
                encryption = bit(2),
                unsynchronisation = bit(1),
                dataLengthIndicator = bit(0)
            ).also {
                require(unchecked == 0) { "Used flags not cleared" }
            }
        }
    }
}

fun Uint8Array.asList(): List<Byte> = object : AbstractList<Byte>() {
    override val size: Int get() = this@asList.length

    override fun get(index: Int): Byte = when (index) {
        in 0..lastIndex -> this@asList[index]
        else -> throw IndexOutOfBoundsException("index $index is not in range [0..$lastIndex]")
    }
}

fun Uint8Array.asUint16List(littleEndian: Boolean): List<Short> {
    val arrayLength = length
    require( arrayLength % 2 == 0) { "16 bit list byte length not even: $arrayLength" }
    val dv = DataView(buffer, byteOffset = byteOffset, byteLength = byteLength)

    return object : AbstractList<Short>() {
        override val size: Int get() = arrayLength / 2
        override fun get(index: Int): Short = when (index) {
            in 0..lastIndex -> dv.getUint16(index * 2, littleEndian)
            else -> throw IndexOutOfBoundsException("index $index is not in range [0..$lastIndex]")
        }
    }
}

fun Uint8Array.asSynchSafeInt(): Int = asList().map { it.toInt() }.fold(0) { acc, b ->
    require((b and (1 shl 7)) == 0) { "Synchsafe bit 7 not cleared." }
    (acc shl 7) or b
}

fun Uint8Array.asInt(): Int {
    val dv = DataView(this.buffer, this.byteOffset, this.byteLength)
    return dv.getInt32(0, littleEndian = false)
}

class TagReader(buffer: ArrayBuffer) {
    val uia = Uint8Array(buffer)
    var pos = 0

    fun subarray(length: Int) = uia.subarray(pos, pos+length).also {
        pos += length
    }

    fun string(length: Int) = subarray(length).asString()

    fun id3(): String = string(3).also { s ->
        require(s == "ID3") { "ID3 id missing." }
    }

    fun <T> byte2(fn: (Byte, Byte) -> T) = subarray(2).let { b2 -> fn(b2[0], b2[1]) }

    fun id3Version() = byte2(::Id3Version)

    fun byte() = uia[pos++]

    fun id3Flags() = Id3Flags.of(byte())

    fun synchSafeInt() = subarray(4).asSynchSafeInt()

    fun int() = subarray(4).asInt()

    fun frameFlags() = byte2(FrameFlags.Companion::of)

    fun <T> peek(fn: () -> T): T {
        val saved = pos
        try {
            return fn()
        } finally {
            pos = saved
        }
    }

    fun encoding() = byte().let {  b ->
        when (b.toInt()) {
            0 -> Encoding.ISO_8859_1
            1 -> Encoding.UTF_16
            2 -> Encoding.UTF_16BE
            4 -> Encoding.UTF_8
            else -> throw Error("Unknown encoding: $b")
        }
    }

    fun strings(size: Int): List<String> {
        return encoding()
            .read(subarray(size-1))
            .split('\u0000')
    }

}

external fun decodeURIComponent(d: dynamic): String
external fun escape(d: dynamic): dynamic

@Suppress("ClassName")
sealed class Encoding {
    abstract fun read(data: Uint8Array): String

    object ISO_8859_1 : Encoding() {
        override fun read(data: Uint8Array) = data.asString()
    }

    object UTF_16 : Encoding() {
        override fun read(data: Uint8Array): String {
            val b1 = data[0].toInt()
            val b2 = data[1].toInt()


            val littleEndian = when {
                b1 == 0xFF && b2 == 0xFE -> true
                b1 == 0xFE && b2 == 0xFF -> false
                else -> throw Error("No BOM found: $b1 $b2")
            }

            return data.subarray(2, data.length)
                .asUint16List(littleEndian)
                .map { it.toChar() }
                .asString()
        }
    }
    object UTF_16BE : Encoding() {
        override fun read(data: Uint8Array): String {
            return data
                .asUint16List(littleEndian = false)
                .map { it.toChar() }
                .asString()
        }
    }

    object UTF_8 : Encoding() {
        override fun read(data: Uint8Array): String {
            return decodeURIComponent(escape(data.asString()))
        }
    }
}

fun List<Char>.asString(): String = toCharArray().let { String(it) }

fun Uint8Array.asString(): String = asList()
    .map { b -> b.toChar() }
    .asString()

suspend fun Blob.readAsArrayBuffer() : ArrayBuffer {
    val d = CompletableDeferred<ArrayBuffer>()

    val reader = FileReader()
    reader.onload = {
        d.complete(reader.result.unsafeCast<ArrayBuffer>())
    }
    reader.onerror = { e ->
        d.completeExceptionally(e.unsafeCast<Throwable>())
    }
    reader.readAsArrayBuffer(this)
    return d.await()
}

fun id3v2_3(buffer: ArrayBuffer): FramesData {

    val tr = TagReader(buffer)

    tr.id3()
    tr.id3Version()
    val tagFlags = tr.id3Flags()
    val tagSize = tr.synchSafeInt()

    val trLimit = tr.pos + tagSize

    if (tagFlags.extendedHeader) {
        val pos = tr.pos
        val extendedHeaderSize = tr.synchSafeInt()
        tr.pos += pos + extendedHeaderSize
    }

    var frameData = FramesData()

    fun frame(): Boolean {
        if (tr.peek { tr.byte() } == 0.toByte()) {
            return false
        }

        val id = tr.string(4)

        val fr = Frames.all[id]
        val frameSize = tr.int()
        val frameFlags = tr.frameFlags()

        if (fr == null) {
            console.log("Unknown frame, skipping: $id")
            tr.pos += frameSize
        } else {
            frameData = fr.process(
                Frames.FrameInput(
                    size = frameSize,
                    flags = frameFlags,
                    tr = tr,
                    data = frameData
                )
            )
        }

        return true
    }

    while (tr.pos < trLimit && frame()) {}

    return frameData
}

data class FramesData(
    val text: Map<String, List<String>> = emptyMap(),
    val url: Map<String, String> = emptyMap(),
    val userText: Map<String, String> = emptyMap(),
    val comments: Map<CommentKey, String> = emptyMap()
) {
    data class CommentKey(
        val language: String,
        val content: String
    )
}


object Frames {
    class FrameInput(
        val size: Int,
        val flags: FrameFlags,
        val tr: TagReader,
        val data: FramesData
    )

    var all  = emptyMap<String, Frame>()

    // http://id3.org/id3v2.3.0
    val TPE1 by text()
    val TPE2 by text()
    val TPE3 by text()
    val TPE4 by text()
    // http://id3.org/id3v2.3.0#TIT1
    val TIT1 by text()
    val TIT2 by text()
    val TIT3 by text()
    val TALB by text()
    val TRCK by text()
    val TYER by text()
    val TDRC by text()
    val TCON by text()
    val TPOS by text()
    val TPUB by text()
    val TCMP by text()
    val TENC by text()
    val TKEY by text()
    val TSOA by text()
    val TSOP by text()
    val TCOP by text()
    val TSRC by text()
    val TEXT by text()
    val TRSN by text()
    val TOPE by text()
    val TOLY by text()
    val TLAN by text()
    val TCOM by text()
    val TDAT by text()
    val TSSE by text()
    val WCOM by url()
    val APIC by skip()
    val GEOB by skip()
    val RVA2 by skip()
    val PRIV by skip()
    val WXXX by skip()

    val COMM by frame { _, input ->
        val encoding = input.tr.encoding()
        val language = input.tr.string(3)
        val texts = encoding.read(input.tr.subarray(input.size - 4)).split('\u0000')
        val content = texts[0]
        val text = texts[1]


        val key = FramesData.CommentKey(
            language,
            content
        )

        require(key !in input.data.comments) { "Comment already exists: $key" }

        input.data.copy(
            comments = input.data.comments + (key to text)
        )
    }

    val TXXX by frame { _, input ->
        val texts = input.tr.strings(input.size)
        val content = texts[0]
        val text = texts[1]
        require(content !in input.data.userText) { "User text already exists: $content" }
        input.data.copy(
            userText = input.data.userText + (content to text)
        )
    }

    class Frame(val name: String, val fn: (FrameInput) -> FramesData) {
        init {
            all += name to this
        }

        fun process(input: FrameInput): FramesData = fn(input)
    }

    class FrameProvider(val fn: (String, FrameInput) -> FramesData) {
        operator fun provideDelegate(
            thisRef: Frames,
            prop: KProperty<*>
        ): ReadOnlyProperty<Any?, Frame> {
            val name = prop.name
            val frame = Frame(name) { fi -> fn(name, fi) }
            return object : ReadOnlyProperty<Any?, Frame> {
                override fun getValue(thisRef: Any?, property: KProperty<*>) = frame
            }
        }

    }

    fun frame(fn: (String, FrameInput) -> FramesData) = FrameProvider(fn)
    fun url() = frame { name, input ->
        val d = input.data

        require(name !in d.url)

        d.copy(
            url = d.url + (name to input.tr.string(input.size))
        )
    }
    fun text() = frame { name, input ->
        val d = input.data

        require(name !in d.text)

        d.copy(
            text = d.text + (name to input.tr.strings(input.size))
        )
    }
    fun skip() = frame { _, input ->
//        console.log("Skipping frame: $name")
        input.tr.pos += input.size
        input.data
    }


}
