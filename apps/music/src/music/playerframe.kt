package music

import bootstrap.*
import common.Some
import common.listen
import common.onInterval
import commonlib.Actor
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import domx.*
import fontawesome.*
import indexeddb.IDBDatabase
import indexeddb.getAllKeys
import killable.Killable
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import musiclib.*
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.url.URL
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

    override val start: Loop
        get() = hiddenLoop(GlobalState())

    sealed class Event {
        object NextLoaded: Event()
        object PlayingEnded: Event()
        object PlayOrPause: Event()
        object Beginning: Event()
        object End: Event()
        object Forward: Event()
        object Backward: Event()
        object Like: Event()
        object DontLike: Event()
    }

//    val canDownload = Var(false)
//    val canUpload = Var(false)

    val hidden = Var(true)
    val playing = Var(false)

    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val artist = Var("artist")
    val title = Var("title")

    val state = Var(UserSongState.New)



    inner class GlobalState {
        var nextPlayable: Playable? = null

        fun requestNextSong() {
            nextPlayable = null
            GlobalScope.launch {
                val np = songSource.request()
                nextPlayable = np
                channel.send(
                    Event.NextLoaded
                )
            }
        }

        suspend fun loadPlayable() = loadPlayable(nextPlayable!!)

        suspend fun loadPlayable(playable: Playable): LoadedState {
            requestNextSong()

            return LoadedState(
                this,
                playable,
                userSongsDB.get(playable.tag.props.idOrFail)
            )
        }

        fun readNextPlayable(): Playable? {
            return nextPlayable?.let { np ->
                requestNextSong()
                np
            }
        }

        init {
            requestNextSong()
        }



        suspend fun doNext(fn: (LoadedState) -> Loop): Change {
            return Change(
                readNextPlayable()?.let { p ->
                    fn(loadPlayable(p))
                } ?: hiddenLoop(this)
            )
        }
        suspend fun playNext(): Change {
            return doNext { l ->
                playingLoop(
                    l.startPlaying()
                )
            }
        }
        suspend fun loadNext(): Change {
            return doNext { l ->
                pausedLoop(l)
            }
        }
    }

    inner class LoadedState(
        val global: GlobalState,
        val playable: Playable,
        val userSong: UserSong,
        val audio: HTMLAudioElement = document.audio,
        ks: Killables = Killables()
    ): Killable by ks {
        init {
            ks += playable

            ks += userSong.state.initial.forEach { s ->
                state.now = s.getOrDefault(UserSongState.New)
            }

            playable.tag.fixedArtist().addedTo(ks).forEach { artist.now = it.getOrDefault("<unkown artist>") }
            playable.tag.fixedTitle().addedTo(ks).forEach { title.now = it.getOrDefault("<unkown title>") }

            audio {
                ks += listen("durationchange") {
                    totalDuration.now = duration.toInt()
                }
                ks += listen("ended") {
                    post(Event.PlayingEnded)
                }
                src = playable.url
                currentPosition.now = 0
                load()
            }
        }
        fun readCounterNow() {
            currentPosition.now = audio.currentTime.toInt()
        }

        fun startPlaying(): PlayingState {
            audio.play()
            playing.now = true
            return PlayingState(this)
        }

        suspend fun forward(next: suspend () -> Iter): Iter {
            val newPos = audio.currentTime + SeekSeconds

            return if (newPos >= audio.duration) {
                next()
            } else {
                audio.currentTime = newPos
                readCounterNow()
                Same
            }
        }


    }

    inner class PlayingState(
        val loaded: LoadedState,
        ks: Killables = Killables()
    ): Killable by ks {
        init {
            loaded.readCounterNow()
            ks += window.onInterval(250) {
                loaded.readCounterNow()
            }
            ks += {
                loaded.audio.pause()
                playing.now = false
            }
        }
    }

    val SeekSeconds = 15.0

    fun seekMixin(loaded: LoadedState, next: suspend () -> Iter) = mixin { e ->
        when (e) {
            is Event.Beginning -> {
                loaded.audio.currentTime = 0.0
                loaded.readCounterNow()
                Same
            }
            is Event.Backward -> {
                loaded.audio {
                    currentTime = max(0.0, currentTime - SeekSeconds)
                }
                loaded.readCounterNow()
                Same
            }
            is Event.Like -> {
                loaded.userSong.apply {
                    state.cv = UserSongState.Like
                    props.apply {
                        if (dirty.now) {
                            save()
                        }
                    }
                }
                Same
            }
            is Event.DontLike -> {
                loaded.userSong.apply {
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
                loaded.forward {
                    next()
                }
            }
            is Event.End -> {
                next()
            }
            else -> null
        }
    }

    fun pausedLoop(loaded: LoadedState): Loop {
        suspend fun doNext(): Iter {
            loaded.kill()
            return loaded.global.loadNext()
        }

        return seekMixin(loaded) { doNext() } or { e ->
            when (e) {
                is Event.PlayOrPause -> {
                    Change(
                        playingLoop(
                            loaded.startPlaying()
                        )
                    )
                }
                else -> Same
            }
        }
    }

    fun playingLoop(playingState: PlayingState): Loop {
        suspend fun doNext(): Iter {
            playingState.kill()
            playingState.loaded.kill()
            return playingState.loaded.global.playNext()
        }

        return seekMixin(playingState.loaded) { doNext() } or { e ->
            when (e) {
                is Event.PlayOrPause -> {
                    playingState.kill()

                    Change(
                        pausedLoop(
                            playingState.loaded
                        )
                    )
                }
                is Event.PlayingEnded -> {
                    doNext()
                }
                else -> Same
            }
        }
    }

    fun hiddenLoop(global: GlobalState) = loop { e ->
        when (e) {
            is Event.NextLoaded -> {
                hidden.now = false
                Change(
                    pausedLoop(
                        global.loadPlayable()
                    )
                )
            }
            else -> Same
        }
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

