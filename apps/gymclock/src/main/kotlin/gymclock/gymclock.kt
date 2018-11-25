package gymclock

import common.obj
import kotlinx.html.ButtonType
import kotlinx.html.InputType
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.*
import kotlinx.html.source
import org.w3c.dom.*
import rx.Var
import styles.cursorPointer
import styles.pointerEventsNone
import styles.scrollVertical
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.hasClass
import kotlin.dom.removeClass


fun main(args: Array<String>) {
    Main.run()
}

object Main {

    fun run() {
        val config = window
                .localStorage
                .getItem("gymclock")
                ?.let { JSON.parse<Config>(it) }
                ?: Config().apply { rest = 20; work = 40; delay = 3; sounds = true }

        lateinit var settingsForm : HTMLElement
        lateinit var clockPanel: HTMLDivElement
        lateinit var animationPanel: HTMLDivElement

        var workTimeout : Int? = null
        var restTimeout : Int? = null
        var workInterval : Int? = null
        var restInterval : Int? = null
        var countInterval : Int? = null

        fun restart() {
            // hack to restart CSS animation
            animationPanel.style.animation = "none"
            animationPanel.offsetHeight
            animationPanel.style.asDynamic().animation = null
        }

        val seconds = Var(0)

        val sounds = Var(config.sounds ?: true)
        sounds.forEach { config.sounds = it }

        fun createAudio(name: String) =
                document.create.audio {
                    source {
                        src = "audio/$name.mp3"
                        type = "audio/mpeg"
                    }
                    source {
                        src = "audio/$name.m4r"
                        type = "audio/x-m4r"
                    }
                }


        val prepareAudio = createAudio("exquisite")
        val workAudio = createAudio("definite")
        val restAudio = createAudio("not-bad")

        fun HTMLAudioElement.replay() {
            pause()
            currentTime = 0.0
            play()
        }

        seconds.forEach { sec ->
            if (sounds.now) {
                if (sec in 1..3) {
                    prepareAudio.replay()
                }
            }
        }

        fun stopCounter() {
            countInterval?.let { window.clearInterval(it); countInterval = null }
        }

        fun restartCounter(value: Int) {
            stopCounter()
            seconds.now = value
            countInterval = window.setInterval(
                    {
                        seconds.now = seconds.now - 1
                    },
                    1000
            )

        }

        // hack to keep screen of mobile device on
        val video : HTMLVideoElement = document.createElement("video") as HTMLVideoElement
        video.loop = true
        fun addSourceToVideo(mime: String, base64: String) {
            val source : HTMLSourceElement = document.createElement("source") as HTMLSourceElement
            source.src = "data:$mime;base64,$base64"
            source.type = mime
            video.appendChild(source)
        }
        addSourceToVideo("video/webm", "GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA")
        addSourceToVideo("video/mp4", "AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9")

        fun stopTimers() {
            workTimeout?.let { window.clearTimeout(it); workTimeout = null }
            restTimeout?.let { window.clearTimeout(it); restTimeout = null }
            workInterval?.let { window.clearInterval(it); workInterval = null }
            restInterval?.let { window.clearInterval(it); restInterval = null }
            stopCounter()
        }

        fun startAnimation() {
            window
                    .localStorage
                    .setItem("gymclock", JSON.stringify(config))

            video.play()

            val colorElement = animationPanel.parentElement!!

            colorElement.removeClass("bg-success")
            colorElement.addClass("bg-warning")
            animationPanel.style.animationDuration = "${config.delay}s"

            val period = config.rest + config.work

            stopTimers()

            restartCounter(config.delay)

            workTimeout = window.setTimeout(
                    {
                        val h = {
                            colorElement.removeClass("bg-warning")
                            colorElement.addClass("bg-success")
                            restart()
                            restartCounter(config.work)
                            animationPanel.style.animationDuration = "${config.work}s"
                            if (sounds.now) {
                                workAudio.replay()
                            }
                        }
                        h()
                        workInterval = window.setInterval(h, period * 1000)
                    },
                    config.delay * 1000
            )

            restTimeout = window.setTimeout(
                    {
                        val h = {
                            colorElement.addClass("bg-warning")
                            colorElement.removeClass("bg-success")
                            restart()
                            restartCounter(config.rest)
                            animationPanel.style.animationDuration = "${config.rest}s"
                            if (sounds.now) {
                                restAudio.replay()
                            }
                        }
                        h()
                        restInterval = window.setInterval(h, period * 1000)
                    },
                    (config.delay + config.work) * 1000
            )

        }

        document.body!!.append {

            settingsForm = div("w-100 h-100 $scrollVertical") {
                form(classes = "p-2") {
                    div(classes = "form-group") {
                        label {
                            attributes["for"] = "work"
                            +"Work (seconds)"
                        }
                        input(type = InputType.number, classes = "form-control") {
                            id = "work"
                            value = config.work.toString()
                            onChangeFunction = {
                                config.work = (it.target!!.asDynamic().value as String).toInt()
                            }
                        }
                    }
                    div(classes = "form-group") {
                        label {
                            attributes["for"] = "rest"
                            +"Rest (seconds)"
                        }
                        input(type = InputType.number, classes = "form-control") {
                            id = "rest"
                            value = config.rest.toString()
                            onChangeFunction = {
                                config.rest = (it.target!!.asDynamic().value as String).toInt()
                            }
                        }
                    }
                    div(classes = "form-group") {
                        label {
                            attributes["for"] = "delay"
                            +"Delay (seconds)"
                        }
                        input(type = InputType.number, classes = "form-control") {
                            id = "delay"
                            value = config.delay.toString()
                            onChangeFunction = {
                                config.delay = (it.target!!.asDynamic().value as String).toInt()
                            }
                        }
                    }
                    div(classes = "form-group form-check") {
                        input(type = InputType.checkBox, classes = "form-check-input") {
                            id = "sounds"
                            checked = config.sounds ?: true
                            onClickFunction = {
                                sounds.now = (it.target!!.asDynamic().checked as Boolean)
                            }
                        }.also { chk ->
                            sounds.forEach {
                                chk.checked = it
                            }
                        }
                        label(classes = "form-check-label") {
                            attributes["for"] = "sounds"
                            +"Sounds"
                        }
                    }
                    button(classes = "btn btn-primary w-100", type = ButtonType.button) {
                        +"Start!"

                        onClickFunction = {
                            settingsForm.addClass("d-none")
                            clockPanel.removeClass("d-none")
                            startAnimation()
                        }
                    }
                }

            }

            clockPanel = div(classes = "d-none w-100 h-100") {
                div(classes = "w-100 h-100 d-flex flex-column") {
                    div("bg-secondary p-2 border-bottom d-flex flex-row") {
                        button(type = ButtonType.button, classes = "btn btn-light") {
                            +"Back"

                            onClickFunction = {
                                video.pause()
                                stopTimers()
                                settingsForm.removeClass("d-none")
                                clockPanel.addClass("d-none")
                            }
                        }
                        div("flex-grow-1")
                        form(classes = "form-inline bg-light border rounded px-2 $cursorPointer") {
                            div("form-check $pointerEventsNone") {
                                input(InputType.checkBox, classes = "form-check-input") {
                                    id = "runningSounds"
                                }.also { cb ->
                                    sounds.forEach {
                                        cb.checked = it
                                    }
                                }
                                label("form-check-label") {
                                    attributes["for"] = "runningSounds"
                                    +"Sounds"
                                }
                            }
                            onClickFunction = {
                                sounds.now = !sounds.now
                            }
                        }

                    }
                    div(classes = "flex-grow-1 bg-warning position-relative") {

                        animationPanel = div(classes = "bg-light w-100 position-absolute clock") {
                        }

                        div(classes = "seconds") {
                        }.also { div ->
                            seconds.forEach {
                                div.innerText = it.toString()
                            }
                        }

                    }


                }

            }

        }


    }

}

external interface Config {
    var rest: Int
    var work: Int
    var delay: Int
    var sounds: Boolean?
}

fun Config() = obj<Config>()