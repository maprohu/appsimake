//package music
//
//import bootstrap.*
//import common.*
//import commonui.*
//import domx.*
//import firebase.firestore.MaxBatchSize
//import firebase.firestore.docRef
//import fontawesome.*
//import indexeddb.exists
//import indexeddb.put
//import killable.Killables
//import killable.addedTo
//import kotlinx.coroutines.CompletableDeferred
//import kotlinx.coroutines.GlobalScope
//import kotlinx.coroutines.channels.Channel
//import kotlinx.coroutines.launch
//import musiclib.Mp3File
//import musiclib.UserSongState
//import org.w3c.dom.*
//import org.w3c.dom.url.URL
//import org.w3c.files.File
//import rx.*
//import styles.height0
//import styles.scrollVertical
//import styles.widthAuto
//import kotlin.browser.document
//
//private sealed class FileType {
//    object File: FileType()
//    object Folder: FileType()
//}
//
//private sealed class Event {
//    class Load(val fileList: List<File>): Event()
//    object ProcessEnd: Event()
//    object Cancel: Event()
//    object Import: Event()
//    object Close: Event()
//}
//
//fun HTMLDListElement.tagListItem(
//    tagOpt: RxIface<Optional<Mp3File>>,
//    killables: Killables
//) {
//    dt {
//        innerText = "Artist"
//    }
//    dd {
//        rxTextOrEmpty {
//            tagOpt().flatMap { mp3File ->
//                mp3File.artistfix.initial().orElse { mp3File.artist.initial() }
//            }
//        }.addedTo(killables)
//    }
//    dt {
//        innerText = "Title"
//    }
//    dd {
//        rxTextOrEmpty {
//            tagOpt().flatMap { mp3File ->
//                mp3File.titlefix.initial().orElse { mp3File.title.initial() }
//            }
//        }.addedTo(killables)
//    }
//    dt {
//        innerText = "Duration"
//    }
//    dd {
//        rxTextOrEmpty {
//            tagOpt().flatMap { mp3File ->
//                mp3File.secs.initial().map { s ->
//                    "$s secs"
//                }
//            }
//        }.addedTo(killables)
//    }
//    dt {
//        innerText = "Size"
//    }
//    dd {
//        rxTextOrEmpty {
//            tagOpt().flatMap { mp3File ->
//                mp3File.bytes.initial().map { b ->
//                    "$b bytes"
//                }
//            }
//        }.addedTo(killables)
//    }
//
//}
//
//private fun fileListItem(
//    f: File,
//    mp3File: Mp3File,
//    killables: Killables
//): HTMLDivElement {
//    return document.div {
//        cls {
//            listGroupItem
//        }
//        dl {
//            dt {
//                innerText = "Filename"
//            }
//            dd {
//                innerText = f.name
//            }
//            tagListItem(
//                Var(Some(mp3File)),
//                killables
//            )
//            dt {
//                innerText = "Size"
//            }
//            dd {
//                rxTextOrEmpty {
//                    mp3File.bytes.initial().map { b ->
//                        "$b bytes"
//                    }
//                }.addedTo(killables)
//            }
//            dt {
//                innerText = "Artist"
//            }
//            dd {
//                rxTextOrEmpty {
//                    mp3File.artistfix.initial().orElse { mp3File.artist.initial() }
//                }.addedTo(killables)
//            }
//            dt {
//                innerText = "Title"
//            }
//            dd {
//                rxTextOrEmpty {
//                    mp3File.titlefix.initial().orElse { mp3File.title.initial() }
//                }.addedTo(killables)
//            }
//            dt {
//                innerText = "Duration"
//            }
//            dd {
//                rxTextOrEmpty {
//                    mp3File.secs.initial().map { s ->
//                        "$s secs"
//                    }
//                }.addedTo(killables)
//            }
//
//        }
//    }
//}
//
//fun MusicCtx.import(
//    panel: RootPanel,
//    killables: Killables,
//    close: () -> Unit
//) {
//    class Item(
//        val file: File,
//        val hash: String,
//        val element: HTMLElement,
//        val mp3File: Mp3File,
//        val killables: Killables
//    )
//
////    val fileType = Var<FileType>(FileType.Folder)
////    val isFile = Rx { fileType() == FileType.File }
////    val isFolder = Rx { fileType() == FileType.Folder }
//    val pendingFiles = Var(0)
//    val canceling = Var(false)
//    val importing = Var(false)
//    val fileMap = Var(emptyMap<String, Item>())
//    val fileMapNotEmpty = Rx { fileMap().isNotEmpty() }
//    val fileListItemEmitter = Emitter<HTMLElement>()
//
//
//    val channel = Channel<Event>()
//    fun post(e: Event) = GlobalScope.launch {
//        channel.send(e)
//    }
//
//
//    var filesToLoad = emptyList<File>()
//
//    fun addFilesToLoad(fl: List<File>) {
//        val files = fl
//            .filter { f -> f.type == "audio/mp3" }
//
//        pendingFiles.transform { it + files.size }
//
//        filesToLoad += files
//
//    }
//
//
//    fun startLoading() {
//
//        GlobalScope.launch {
//            while (filesToLoad.isNotEmpty()) {
//                val f = filesToLoad.first()
//                filesToLoad = filesToLoad.drop(1)
//
//                val buffer = f.readAsArrayBuffer()
//                val hash = buffer.hash()
//
//
//                val mp3File = tagDB.get(hash) { f to buffer }
//
//                if (
//                    (hash !in fileMap.now) &&
//                    (hash !in userSongsDB.dontLikeSet.current)
//                ) {
//
//                    if (idb.existsMp3(hash)) {
//                        userSongsDB.get(hash) {
//                            this.state.cv = UserSongState.New
//                        }
//                    } else {
//                        val ks = killables.killables()
//
//                        val element = fileListItem(f, mp3File, ks)
//                        fileListItemEmitter.emit(element)
//
//                        Item(
//                            file = f,
//                            hash = hash,
//                            element = element,
//                            mp3File = mp3File,
//                            killables = ks
//                        ).also { i ->
//                            fileMap.transform { it + (hash to i) }
//                        }
//                    }
//
//                }
//
//                if (canceling.now) break
//
//                pendingFiles.transform { it - 1 }
//            }
//
//            post(Event.ProcessEnd)
//        }
//
//    }
//
//    fun startImporting() {
//        GlobalScope.launch {
//
//            val fm = fileMap.now
//            pendingFiles.now = fm.size
//            var b = db.batch()
//            var bc = MaxBatchSize
//
//            val mfm = fm.toMutableMap()
//
//            for (fe in fm.entries) {
//                val f = fe.value
//
//                bc--
//                if (bc == 0) {
//                    b.commit()
//                    bc = MaxBatchSize
//                    b = db.batch()
//                }
//
//                idb.addMp3(f.hash, f.file)
//
//                f.killables.kill()
//                f.element.removeFromParent()
//
//                userSongsDB.get(f.hash) {
//                    this.state.cv = UserSongState.New
//                }
//
//                pendingFiles.decrease()
//
//                mfm.remove(fe.key)
//
////                dbStatus.add(
////                    size = f.mp3File.bytes.iv,
////                    duration = f.mp3File.secs.iv
////                )
//
//                if (canceling.now) break
//            }
//
//            b.commit()
//
//            fileMap.now = mfm.toMap()
//
//            post(Event.ProcessEnd)
//        }
//    }
//
//
//    val processesRunning = Var(0)
//
//    GlobalScope.launch {
//        class Exit: Throwable()
//        fun exit() { throw Exit() }
//
//        fun doClose() {
//            canceling.now = true
//            close()
//            exit()
//        }
//
//
//        suspend fun whileActive(fn: suspend (Event) -> Unit) {
//            while (processesRunning.now > 0) {
//                val e = channel.receive()
//                when (e) {
//                    Event.Close -> {
//                        doClose()
//                    }
//                    else -> fn(e)
//                }
//            }
//        }
//
//        suspend fun cancelingLoop() {
//            canceling.now = true
//            try {
//                whileActive { e ->
//                    when (e) {
//                        Event.ProcessEnd -> {
//                            processesRunning.decrease()
//                        }
//                        else -> {}
//                    }
//                }
//            } finally {
//                canceling.now = false
//                pendingFiles.now = 0
//            }
//        }
//
//
//        suspend fun loadingLoop() {
//            whileActive { e ->
//                when (e) {
//                    is Event.Load -> {
//                        addFilesToLoad(e.fileList)
//                    }
//                    Event.ProcessEnd -> {
//                        processesRunning.decrease()
//                    }
//                    Event.Cancel -> {
//                        cancelingLoop()
//                    }
//                    else -> {}
//                }
//            }
//        }
//
//        suspend fun importingLoop() {
//            importing.now = true
//            try {
//                whileActive { e ->
//                    when (e) {
//                        Event.ProcessEnd -> {
//                            processesRunning.decrease()
//                        }
//                        Event.Cancel -> {
//                            cancelingLoop()
//                        }
//                        else -> {}
//                    }
//                }
//            } finally {
//                importing.now = false
//            }
//        }
//
//        try {
//            for (e in channel) {
//                when (e) {
//                    is Event.Load -> {
//                        processesRunning.increase()
//                        addFilesToLoad(e.fileList)
//                        startLoading()
//                        loadingLoop()
//                    }
//                    Event.Import -> {
//                        processesRunning.increase()
//                        startImporting()
//
//                        importingLoop()
//                    }
//                    Event.Close -> {
//                        doClose()
//                    }
//                    else -> {}
//                }
//
//            }
//        } catch (e: Exit) {}
//    }
//
//
//    panel.newRoot {
//        screenLayout(killables) {
//            top {
//                left {
//                    faButton(Fa.chevronLeft) {
//                        cls {
//                            m1
//                        }
//                        rxClass {
//                            if (processesRunning() > 0) Cls.btnDanger
//                            else Cls.btnSecondary
//                        }
//                        clickEvent {
//                            post(Event.Cancel)
//                            close()
//                        }
//                    }
//                }
//                middleTitle {
//                    innerText = "Import MP3s"
//                }
//                right {
//                    cls {
//                        flexRow
//                        alignItemsCenter
//                    }
//                    div {
//                        cls {
//                            m2
//                            badge
//                            badgePill
//                            badgeWarning
//                        }
//                        rxText { pendingFiles().toString() }
//                        rxDisplayed { pendingFiles() != 0 }
//                    }
//                    div {
//                        cls {
//                            m1
//                            btnGroup
//                        }
//                        faButton(Fa.ban) {
//                            cls {
//                                btnWarning
//                            }
//                            rxDisplayed {
//                                processesRunning() > 0
//                            }
//                            rxEnabled {
//                                !canceling()
//                            }
//                            clickEvent {
//                                post(Event.Cancel)
//                            }
//                        }
//                        faButton(Fa.fileImport) {
//                            cls {
//                                btnPrimary
//                            }
//                            rxDisplayed {
//                                processesRunning() == 0 && fileMapNotEmpty()
//                            }
//                            clickEvent {
//                                post(Event.Import)
//                            }
//                        }
//                    }
//
//                }
//
//            }
//
//            main {
//                cls {
//                    dFlex
//                    flexColumn
//                }
//
//                div {
//                    rxDisplayed { !importing() }
//                    cls {
//                        flexFixedSize()
//                        flexCenter()
//                        borderBottom
//                    }
//                    div {
//                        cls {
//                            dFlex
//                            flexRow
//                            alignItemsCenter
//                        }
//                        val inputContainer = this
//                        div {
//                            cls {
//                                btnGroup
//                                m1
//                            }
//
//                            if (webkitdirectorySupported) {
//                                val inp = inputContainer.input {
//                                    cls {
//                                        dNone
//                                    }
//                                    type = "file"
//                                    this.asDynamic().webkitdirectory = true
//                                    multiple = true
//                                    accept = "audio/mpeg"
//                                    onchange = {
//                                        this@input.files?.let { fl ->
//                                            val list = fl.asList().toList()
//                                            post(Event.Load(list))
//                                        }
//                                        value = ""
//                                        Unit
//                                    }
//                                }
//
//                                label {
//                                    htmlFor = inp.ref
//                                    faButtonSpan {
//                                        cls.fa.folderOpen
//                                    }
//                                    cls {
//                                        btn
//                                        btnPrimary
//                                        m0
//                                    }
//                                }
//
//                            }
//                            val inp = inputContainer.input {
//                                cls {
//                                    dNone
//                                }
//                                type = "file"
//                                multiple = true
//                                accept = "audio/mpeg"
//                                onchange = {
//                                    this@input.files?.let { fl ->
//                                        val list = fl.asList().toList()
//                                        post(Event.Load(list))
//                                    }
//                                    value = ""
//                                    Unit
//                                }
//                            }
//
//                            label {
//                                htmlFor = inp.ref
//                                faButtonSpan {
//                                    cls.fa.file
//                                }
//                                cls {
//                                    btn
//                                    btnPrimary
//                                    m0
//                                }
//                            }
//                        }
//                    }
//                }
//
//                div {
//                    cls {
//                        flexGrow1
//                        scrollVertical
//                        height0
//                    }
//                    div {
//                        cls {
//                            m1
//                            listGroup
//                        }
//                        fileListItemEmitter += { e ->
//                            appendChild(e)
//                        }
//                    }
//                }
//            }
//        }
//    }
//
//
//}