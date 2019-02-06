//package music
//
//import bootstrap.*
//import common.*
//import commonlib.Actor
//import commonlib.LoopT
//import commonui.*
//import domx.*
//import fontawesome.*
//import killable.Killables
//import killable.addedTo
//import kotlinx.coroutines.CompletableDeferred
//import kotlinx.coroutines.GlobalScope
//import kotlinx.coroutines.async
//import kotlinx.coroutines.channels.Channel
//import kotlinx.coroutines.launch
//import mediasession.MediaMetadata
//import mediasession.mediaSession
//import mediasession.mediaSessionSupported
//import musiclib.*
//import org.w3c.dom.HTMLButtonElement
//import org.w3c.dom.Node
//import rx.*
//import styles.scrollVertical
//import kotlin.browser.document
//import kotlin.browser.window
//import kotlin.math.floor
//import kotlin.math.max
//
//
//fun playerFrame(
//    killables: Killables,
//    panel: SetPanel,
//    songSource: AsyncEmitter<Playable>,
//    userSongsDB: RxIface<Optional<UserSongsDB>>
//): SetPanel {
//
//    return PlayerFrame(
//        panel,
//        killables,
//        songSource,
//        userSongsDB
//    ).run {
//        runPanel(rootDiv.div)
//    }
//
//}
//
//class PlayerFrame(
//    val panel: SetPanel,
//    val killables: Killables,
//    val songSource: AsyncEmitter<Playable>,
//    val userSongsDB: RxIface<Optional<UserSongsDB>>
//): Actor<PlayerFrame.Event>(killables) {
//
//    interface Loop: LoopT<Event>
//
//    sealed class Event {
//        class PlayableLoaded(val playable: Playable): Event()
//        class PlayingEnded(val loop: VisibleLoop.PlayingLoop): Event()
//        object PlayOrPause: Event()
//        object Beginning: Event()
//        object End: Event()
//        object Forward: Event()
//        object Backward: Event()
//        object Like: Event()
//        object DontLike: Event()
//    }
//
//    val hidden = Var(true)
//    val playing = Var(false)
//
//    val hasUserDB = Rx { !userSongsDB().isEmpty() }.addedTo(killables)
//
//    val totalDuration = Var(0)
//    val currentPosition = Var(0)
//    val artist = Var("artist")
//    val title = Var("title")
//
//    fun formatSecs(s: Int): String {
//        val mins = s / 60.0
//        val minPart = floor(mins)
//        val secPart = mins - minPart
//        val secString = ((secPart * 60).toInt() + 100).toString().substring(1)
//        val minString = minPart.toInt().toString()
//
//        return "$minString:$secString"
//    }
//
//    val totalDurationText = Rx { formatSecs(totalDuration()) }
//    val totalDurationTextLength = Rx { totalDurationText().length }
//    val currentPositionText = Rx { formatSecs(currentPosition()).padStart(totalDurationTextLength(), ' ') }
//
//    val state = Var(UserSongState.New)
//    val stateLoading = Var(false)
//    val likeButtonsDisabled = Rx { !hasUserDB() || stateLoading() }
//
//    val SeekSeconds = 15.0
//
//    interface PlayStateLoop: Loop {
//        fun next()
//    }
//    inner class VisibleLoop(
//        val playable: Playable,
//        startPlaying: Boolean
//    ): Loop  {
//        val vks = Killables()
//
//        suspend fun applyUserSong(fn: UserSong.() -> Unit) {
//            userSongsDB.now.let { us ->
//                when (us) {
//                    is Some -> fn(us.value.get(playable.id))
//                    else -> {}
//                }
//            }
//        }
//
//        init {
//            val usdbch = Channel<Optional<UserSongsDB>>().also { vks += { it.close() } }
//            userSongsDB.forEach { usdbch.offer(it) }.addedTo(vks)
//            GlobalScope.launch {
//                val kseq = vks.seq()
//                for (udb in usdbch) {
//                    when(udb) {
//                        None -> {
//                            state.now = UserSongState.New
//                            kseq += {}
//                        }
//                        is Some -> {
//                            stateLoading.now = true
//                            val userSong = udb.value.get(playable.id)
//                            kseq += userSong.state.initial.forEach { s ->
//                                state.now = s.getOrDefault(UserSongState.New)
//                            }
//                            stateLoading.now = false
//                        }
//                    }
//                }
//            }
//
//            hidden.now = false
//
//            vks += playable
//
////            playable.tag.fixedArtist().forEach { artist.now = it.getOrDefault("<unkown artist>") }
////            playable.tag.fixedTitle().addedTo(kills).forEach { title.now = it.getOrDefault("<unkown title>") }
//
//            if (mediaSessionSupported) {
//                window.navigator.mediaSession.apply {
//                    metadata = MediaMetadata(
//                        obj {
//                            artist = this@PlayerFrame.artist.now
//                            title = this@PlayerFrame.title.now
//                        }
//                    )
//                    setActionHandler("play") {
//                        post(Event.PlayOrPause)
//                    }
//                    setActionHandler("pause") {
//                        post(Event.PlayOrPause)
//                    }
//                    setActionHandler("seekbackward") {
//                        post(Event.Backward)
//                    }
//                    setActionHandler("seekforward") {
//                        post(Event.Forward)
//                    }
//                    setActionHandler("previoustrack") {
//                        post(Event.Beginning)
//                    }
//                    setActionHandler("nexttrack") {
//                        post(Event.End)
//                    }
//
//                }
//            }
//        }
//
//        val audio = document.audio {
//            vks += listen("durationchange") {
//                totalDuration.now = duration.toInt()
//            }
//            src = playable.url
//            currentPosition.now = 0
//            load()
//        }
//
//
//        var playState: PlayStateLoop = if (startPlaying) PlayingLoop() else PausedLoop()
//
//        fun next() {
//            vks.kill()
//            playState.next()
//        }
//
//        fun readCounterNow() {
//            currentPosition.now = audio.currentTime.toInt()
//        }
//
//        override suspend fun process(e: Event) {
//            when (e) {
//                is Event.Beginning -> {
//                    audio.currentTime = 0.0
//                    readCounterNow()
//                }
//                is Event.Backward -> {
//                    audio {
//                        currentTime = max(0.0, currentTime - SeekSeconds)
//                    }
//                    readCounterNow()
//                }
//                is Event.Like -> {
//                    applyUserSong {
//                        state.cv = UserSongState.Like
//                        props.apply {
//                            if (dirty.now) {
//                                save()
//                            }
//                        }
//                    }
//                }
//                is Event.DontLike -> {
//                    applyUserSong {
//                        state.cv = UserSongState.DontLike
//                        props.apply {
//                            if (dirty.now) {
//                                save()
//                            }
//                        }
//                    }
//                    next()
//                }
//                is Event.Forward -> {
//                    val newPos = audio.currentTime + SeekSeconds
//
//                    return if (newPos >= audio.duration) {
//                        next()
//                    } else {
//                        audio.currentTime = newPos
//                        readCounterNow()
//                    }
//                }
//                is Event.End -> {
//                    next()
//                }
//                else -> {}
//            }
//            playState.process(e)
//        }
//
//        inner class PlayingLoop: PlayStateLoop {
//            val lks = Killables()
//
//            override fun next() {
//                lks.kill()
//                nextState(true)
//            }
//
//            init {
//                audio.play()
//                playing.now = true
//
//                readCounterNow()
//                lks += window.onInterval(250) {
//                    readCounterNow()
//                }
//                lks += audio.listen("ended") {
//                    post(Event.PlayingEnded(this))
//                }
//                lks += {
//                    audio.pause()
//                    playing.now = false
//                }
//            }
//            override suspend fun process(e: Event) {
//                when (e) {
//                    is Event.PlayOrPause -> {
//                        lks.kill()
//                        playState = PausedLoop()
//                    }
//                    is Event.PlayingEnded -> {
//                        if (e.loop == this) {
//                            this@VisibleLoop.next()
//                        }
//                    }
//                    else -> {}
//                }
//            }
//        }
//        inner class PausedLoop: PlayStateLoop {
//            override fun next() {
//                nextState(false)
//            }
//
//            override suspend fun process(e: Event) {
//                when (e) {
//                    is Event.PlayOrPause -> {
//                        playState = PlayingLoop()
//                    }
//                    else -> {}
//                }
//            }
//        }
//
//
//    }
//
//
//    inner class HiddenLoop: Loop {
//
//        init {
//            hidden.now = true
//        }
//
//        override suspend fun process(e: Event) {
//            return when (e) {
//                is Event.PlayableLoaded -> {
//                    root = VisibleLoop(
//                        e.playable,
//                        false
//                    )
//                }
//                else -> {}
//            }
//        }
//    }
//
//    fun nextState(startPlaying: Boolean) {
//        val polled = songSource.poll()
//        root = if (polled == null) {
//            GlobalScope.launch {
//                channel.send(
//                    Event.PlayableLoaded(
//                        songSource.receive()
//                    )
//                )
//            }
//            HiddenLoop()
//        } else {
//            VisibleLoop(polled, startPlaying)
//        }
//    }
//    init {
//        nextState(false)
//    }
//
//    val element = document.column {
//        cls {
//            flexGrow1
//        }
//    }
//
//    val rootDiv = element.div {
//        cls {
//            flexGrow1
//            dFlex
//            flexColumn
//        }
//    }
//
//    init {
//        panel %= element
//
//        element.column {
//            rxDisplayed { !hidden() }
//            cls {
//                borderTop
//                bgLight
//                flexFixedSize()
//            }
//            fun Node.mediaButton(faClass: String, btnClass: String? = Cls.btnOutlinePrimary, fn: HTMLButtonElement.() -> Unit) {
//                button {
//                    cls {
//                        btn
//                    }
//                    btnClass?.let { classes += it }
//                    faButtonSpan(faClass) {
//                        cls.fa.x2
//                    }
//                    fn()
//                }
//
//            }
//            column {
//                row {
//                    cls {
//                        justifyContentCenter
//                    }
//                    div {
//                        cls {
//                            m1
//                            p1
//                            px2
//                            border
//                            borderPrimary
//                            rounded
//                            textPrimary
//                            scrollVertical
//                            dFlex
//                            alignItemsCenter
//                        }
//                        span {
//                            rxText { "${artist()} - ${title()}" }
//                        }
//                    }
//                    div {
//                        cls {
//                            border
//                            borderPrimary
//                            rounded
//                            m1
//                            p2
//                            flexCenter()
//                        }
//                        pre {
//                            cls {
//                                m0
//                                textPrimary
//                            }
//                            rxText {
//                                "${currentPositionText()} / ${totalDurationText()}"
//                            }
//                        }
//                    }
//
//                }
//                row {
//                    cls {
//                        flexWrap
//                        justifyContentCenter
//                    }
//                    div {
//                        cls {
//                            m1
//                            btnGroup
//                        }
//                        button {
//                            cls {
//                                btn
//                                btnOutlinePrimary
//                            }
//                            faButtonSpan {
//                                cls.fa.x2
//                                rxClass {
//                                    if (playing()) {
//                                        Fa.pause
//                                    } else {
//                                        Fa.play
//                                    }
//                                }
//                            }
//                            clickEvent {
//                                post(Event.PlayOrPause)
//                            }
//                        }
//                    }
//                    div {
//                        cls {
//                            m1
//                            btnGroup
//                        }
//                        mediaButton(Fa.stepBackward) {
//                            rxEnabled { currentPosition() != 0 || playing() }
//                            clickEvent {
//                                post(Event.Beginning)
//                            }
//                        }
//                        mediaButton(Fa.backward) {
//                            cls {
//                                btnOutlinePrimary
//                            }
//                            rxEnabled { currentPosition() != 0 || playing() }
//                            clickEvent {
//                                post(Event.Backward)
//                            }
//                        }
//                        mediaButton(Fa.forward) {
//                            cls {
//                                btnOutlinePrimary
//                            }
//                            clickEvent {
//                                post(Event.Forward)
//                            }
//                        }
//                        mediaButton(Fa.stepForward) {
//                            cls {
//                                btnOutlinePrimary
//                            }
//                            clickEvent {
//                                post(Event.End)
//                            }
//                        }
//
//                    }
//                    div {
//                        cls {
//                            m1
//                            btnGroup
//                        }
//                        mediaButton(Fa.thumbsUp, null) {
//                            likeButtonsDisabled.forEach { disabled = it }
//                            rxClass {
//                                if (state() == UserSongState.Like) Cls.btnPrimary
//                                else Cls.btnOutlinePrimary
//                            }
//                            clickEvent {
//                                post(Event.Like)
//                            }
//                        }
//                        mediaButton(Fa.thumbsDown, null) {
//                            likeButtonsDisabled.forEach { disabled = it }
//                            rxClass {
//                                if (state() == UserSongState.DontLike) Cls.btnPrimary
//                                else Cls.btnOutlinePrimary
//                            }
//                            clickEvent {
//                                post(Event.DontLike)
//                            }
//                        }
//                    }
//
//                }
//            }
//        }
//    }
//
//
//}
//

