package mediasession

import org.w3c.dom.Navigator

val mediaSessionSupported by lazy {
    js("'mediaSession' in navigator").unsafeCast<Boolean>()
}

inline val Navigator.mediaSession
    get() = this.unsafeCast<HasMediaSession>().mediaSession


external interface HasMediaSession {
    val mediaSession: MediaSession
}

// https://developer.mozilla.org/en-US/docs/Web/API/MediaSession
external interface MediaSession {
    var metadata: MediaMetadata
    val playbackState: PlaybackState

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setActionHandler
    fun setActionHandler(type: String, fn: () -> Unit)
}

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface PlaybackState {
    companion object
}
inline val PlaybackState.none get() = "none".unsafeCast<PlaybackState>()
inline val PlaybackState.paused get() = "paused".unsafeCast<PlaybackState>()
inline val PlaybackState.playing get() = "playing".unsafeCast<PlaybackState>()

external class MediaMetadata(
    props: MediaMetadataProps
) {
    var title: String
    var artist: String
    var album: String
    var artwork: Array<MediaMetadataArtwork>
}

external interface MediaMetadataArtwork {
    var src: String
}
external interface MediaMetadataProps {
    var title: String
    var artist: String
    var album: String
    var artwork: Array<MediaMetadataArtwork>
}


