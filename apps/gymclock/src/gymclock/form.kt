package gymclock

import bootstrap.*
import common.Listeners
import commonui.screenLayout
import domx.*
import rx.Rx
import rx.RxVal
import rx.Var
import rx.rxClassOpt
import styles.cursorPointer
import styles.pointerEventsNone
import styles.scrollVertical
import kotlin.browser.document

object Form {

    val root by lazy {

        document.div {
            flexGrow1()
            screenLayout {
                top {
                    middleTitle {
                        innerText = "Gym Clock"
                    }
                }

                main {
                    classes += scrollVertical
                    flexColumn()
                    padding2()

                    val valids = mutableListOf<RxVal<Boolean>>()
                    val submit = Listeners()

                    form {


                        fun number(
                            labelString: String,
                            source: Var<Int>
                        ) {
                            div {
                                formGroup()
                                val l = label {
                                    innerText = labelString
                                }
                                input {
                                    formControl()
                                    type = "number"
                                    l.htmlFor = this.ref
                                    min = "0"
                                    step = "1"
                                    value = source.now.toString()
                                    val rxs = Var(value)
                                    val cv = Var(checkValidity())
                                    fun update() {
                                        rxs.now = value
                                        cv.now = checkValidity()
                                    }
                                    inputEvent {
                                        update()
                                    }
                                    changeEvent {
                                        update()
                                    }
                                    val rxn = Rx {
                                        try { rxs().toInt() } catch (_:Throwable) { null }
                                    }
                                    val valid = Rx {
                                        rxn() != null && cv()
                                    }
                                    valids += valid
                                    submit += { source.now = rxn.now!! }
                                    rxClassOpt(Rx { if (!valid()) "is-invalid" else null })
                                }

                            }

                        }

                        number(
                            "Work (seconds)",
                            Model.work
                        )
                        number(
                            "Rest (seconds)",
                            Model.rest
                        )
                        number(
                            "Initial delay (seconds)",
                            Model.delay
                        )

                        a {
                            classes += cursorPointer
                            val i = input {
                                margin1()
                                classes += pointerEventsNone
                                type = "checkbox"
                                Model.sounds.forEach {
                                    checked = it
                                }
                            }
                            label {
                                classes += pointerEventsNone
                                innerText = "Sounds"
                                htmlFor = i.ref
                            }
                            clickEvent {
                                Model.sounds.now = !Model.sounds.now
                            }
                        }
                    }
                    btnButton {
                        flexFixedSize()
                        btnPrimary()
                        innerText = "Start"
                        val canSubmit = Rx {
                            valids.all { it() }
                        }
                        rxEnabled(canSubmit)
                        clickEvent {
                            if (canSubmit.now) {
                                submit.fire()
                                Clock.show()
                            }
                        }
                    }
                }
            }
        }

    }

    fun show() {
        Main.appCtx.root.setRoot(root)
    }


}