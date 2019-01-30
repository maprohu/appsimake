package music

import bootstrap.*
import common.*
import commonlib.Actor
import commonlib.LoopT
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import domx.*
import fontawesome.*
import indexeddb.IDBDatabase
import killable.Killable
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.*
import org.w3c.dom.HTMLAudioElement
import rx.Var
import rx.rxClass
import styles.scrollVertical
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.floor
import kotlin.math.max


fun MusicCtx.playerFrame(
    panel: RootPanel
): PlayerFrame {

    return PlayerFrame(
        panel,
        killables,
        songSource = songSource,
        idb = idb,
        tagDB = tagDB,
        userSongsDB = userSongsDB
    )

}

class PlayerFrame(
    panel: RootPanel,
    val killables: Killables,
    val songSource: SongSource,
    val idb: IDBDatabase,
    val tagDB: TagDB,
    val userSongsDB: UserSongsDB
): Actor<PlayerFrame.Event>(killables) {

    interface Loop: LoopT<Event>


    sealed class Event {
        class PlayableLoaded(val playable: Playable): Event()
        class PlayingEnded(val loop: VisibleLoop.PlayingLoop): Event()
        object PlayOrPause: Event()
        object Beginning: Event()
        object End: Event()
        object Forward: Event()
        object Backward: Event()
        object Like: Event()
        object DontLike: Event()
    }

    val hidden = Var(true)
    val playing = Var(false)

    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val artist = Var("artist")
    val title = Var("title")

    val state = Var(UserSongState.New)


    val SeekSeconds = 15.0


    interface PlayStateLoop: Loop {
        fun next(p: Playable)
    }
    interface NextPlayableLoop: Loop {
        fun next()
    }
    inner class VisibleLoop(
        val playable: Playable,
        startPlaying: Boolean
    ): Loop  {
        val vks = Killables()


        var nextPlayable: NextPlayableLoop = NoNextPlayable()

        init {
            vks += playable

            vks += playable.userSong.state.initial.forEach { s ->
                state.now = s.getOrDefault(UserSongState.New)
            }

            playable.tag.fixedArtist().addedTo(vks).forEach { artist.now = it.getOrDefault("<unkown artist>") }
            playable.tag.fixedTitle().addedTo(vks).forEach { title.now = it.getOrDefault("<unkown title>") }
        }

        val audio = document.audio {
            vks += listen("durationchange") {
                totalDuration.now = duration.toInt()
            }
            src = playable.url
            currentPosition.now = 0
            load()
        }


        var playState: PlayStateLoop = if (startPlaying) PlayingLoop() else PausedLoop()

        fun next() {
            vks.kill()
            nextPlayable.next()
        }

        fun readCounterNow() {
            currentPosition.now = audio.currentTime.toInt()
        }

        override suspend fun process(e: Event) {
            when (e) {
                is Event.Beginning -> {
                    audio.currentTime = 0.0
                    readCounterNow()
                }
                is Event.Backward -> {
                    audio {
                        currentTime = max(0.0, currentTime - SeekSeconds)
                    }
                    readCounterNow()
                }
                is Event.Like -> {
                    playable.userSong.apply {
                        state.cv = UserSongState.Like
                        props.apply {
                            if (dirty.now) {
                                save()
                            }
                        }
                    }
                }
                is Event.DontLike -> {
                    playable.userSong.apply {
                        state.cv = UserSongState.DontLike
                        props.apply {
                            if (dirty.now) {
                                save()
                            }
                        }
                    }
                    next()
                }
                is Event.Forward -> {
                    val newPos = audio.currentTime + SeekSeconds

                    return if (newPos >= audio.duration) {
                        next()
                    } else {
                        audio.currentTime = newPos
                        readCounterNow()
                    }
                }
                is Event.End -> {
                    next()
                }
                else -> {}
            }
            playState.process(e)
            nextPlayable.process(e)
        }

        inner class NoNextPlayable: NextPlayableLoop {

            init {
                requestNextSong()
            }

            override fun next() {
                root = HiddenLoop()
            }

            override suspend fun process(e: Event) {
                when (e) {
                    is Event.PlayableLoaded -> {
                        nextPlayable = HasNextPlayable(e.playable)
                    }
                    else -> {}
                }
            }
        }
        inner class HasNextPlayable(
            val playable: Playable
        ): NextPlayableLoop {
            override fun next() {
                playState.next(playable)
            }

            override suspend fun process(e: Event) {}
        }

        inner class PlayingLoop: PlayStateLoop {
            val lks = Killables()

            override fun next(p: Playable) {
                lks.kill()
                root = VisibleLoop(p, true)
            }

            init {
                audio.play()
                playing.now = true

                readCounterNow()
                lks += window.onInterval(250) {
                    readCounterNow()
                }
                lks += audio.listen("ended") {
                    post(Event.PlayingEnded(this))
                }
                lks += {
                    audio.pause()
                    playing.now = false
                }
            }
            override suspend fun process(e: Event) {
                when (e) {
                    is Event.PlayOrPause -> {
                        lks.kill()
                        playState = PausedLoop()
                    }
                    is Event.PlayingEnded -> {
                        if (e.loop == this) {
                            next()
                        }
                    }
                    else -> {}
                }
            }
        }
        inner class PausedLoop: PlayStateLoop {
            override fun next(p: Playable) {
                root = VisibleLoop(p, false)
            }

            override suspend fun process(e: Event) {
                when (e) {
                    is Event.PlayOrPause -> {
                        playState = PlayingLoop()
                    }
                    else -> {}
                }
            }
        }


    }


    inner class HiddenLoop: Loop {

        init {
            hidden.now = true
        }

        override suspend fun process(e: Event) {
            return when (e) {
                is Event.PlayableLoaded -> {
                    hidden.now = false
                    root = VisibleLoop(
                        e.playable,
                        false
                    )
                }
                else -> {}
            }
        }
    }

    fun requestNextSong() {
        GlobalScope.launch {
            channel.send(
                Event.PlayableLoaded(
                    songSource.request()
                )
            )
        }
    }


    init {
        root = HiddenLoop()
        requestNextSong()
    }

    val element = panel.newRoot {}

    val rootDiv = element.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }
    }

    val innerPanel = RootPanel(rootDiv)

    init {
        element.div {
            rxDisplayed { !hidden() }
            cls {
                borderTop
                bgLight
                flexFixedSize()
                dFlex
                flexRow
                flexWrap
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                button {
                    cls {
                        btn
                        btnOutlinePrimary
                    }
                    faButtonSpan {
                        rxClass {
                            if (playing()) {
                                Fa.pause
                            } else {
                                Fa.play
                            }
                        }
                    }
                    clickEvent {
                        post(Event.PlayOrPause)
                    }
//                    rxEnabled { !playing() }
                }
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                faButton(Fa.stepBackward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { currentPosition() != 0 || playing() }
                    clickEvent {
                        post(Event.Beginning)
                    }
                }
                faButton(Fa.backward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { currentPosition() != 0 || playing() }
                    clickEvent {
                        post(Event.Backward)
                    }
                }
                faButton(Fa.question) {
                    cls {
                        btnOutlinePrimary
                    }
                }
                faButton(Fa.forward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        post(Event.Forward)
                    }
                }
                faButton(Fa.stepForward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        post(Event.End)
                    }
                }

            }
            div {
                cls {
                    border
                    borderPrimary
                    rounded
                    m1
                    p2
                    flexCenter()
                }
                pre {
                    cls {
                        m0
                        textPrimary
                    }
                    fun formatSecs(s: Int): String {
                        val mins = s / 60.0
                        val minPart = floor(mins)
                        val secPart = mins - minPart
                        val secString = ((secPart * 60).toInt() + 100).toString().substring(1)
                        val minString = minPart.toInt().toString().let { ms ->
                            if (ms.length < 3) {
                                (ms.length .. 3).map { ' ' }.toCharArray().let { String(it) } + ms
                            } else {
                                ms
                            }
                        }

                        return "$minString:$secString"
                    }
                    rxText {
                        "${formatSecs(currentPosition())} / ${formatSecs(totalDuration())}"
                    }
                }
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                faButton(Fa.thumbsUp) {
                    rxClass {
                        if (state() == UserSongState.Like) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    clickEvent {
                        post(Event.Like)
                    }
                }
                faButton(Fa.thumbsDown) {
                    rxClass {
                        if (state() == UserSongState.DontLike) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    clickEvent {
                        post(Event.DontLike)
                    }
                }
            }
//            div {
//                cls {
//                    btnGroup
//                    m1
//                }
//                faButton(Fa.cloudDownloadAlt) {
//                    rxClass {
//                        if (canDownload()) {
//                            Cls.btnPrimary
//                        } else {
//                            Cls.btnOutlinePrimary
//                        }
//                    }
//                    clickEvent {
//                        canDownload.transform { n -> !n }
//                    }
//                }
//                faButton(Fa.cloudUploadAlt) {
//                    rxClass {
//                        if (canUpload()) {
//                            Cls.btnPrimary
//                        } else {
//                            Cls.btnOutlinePrimary
//                        }
//                    }
//                    clickEvent {
//                        canUpload.transform { n -> !n }
//                    }
//                }
//            }
            div {
                cls {
                    m1
                    p1
                    px2
                    border
                    borderPrimary
                    rounded
                    textPrimary
                    scrollVertical
                    dFlex
                    alignItemsCenter
                }
                span {
                    rxText { "${artist()} - ${title()}" }
                }
            }
        }
    }


}

