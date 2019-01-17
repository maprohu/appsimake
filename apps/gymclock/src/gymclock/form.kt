package gymclock

import bootstrap.*
import common.Listeners
import commonui.faButtonSpan
import commonui.screenLayout
import domx.*
import fontawesome.Fa
import fontawesome.fa
import fontawesome.running
import fontawesome.x3
import killable.Killables
import rx.*
import styles.cursorPointer
import styles.pointerEventsNone
import styles.scrollVertical
import kotlin.browser.document

object Form {

    val root by lazy {
        val ks = Killables()

        document.div {
            cls {
                flexGrow1
            }
            screenLayout(ks) {
                top {
                    middleTitle {
                        innerText = "Gym Clock"
                    }
                }

                main {
                    cls {
                        scrollVertical
                        dFlex
                        flexColumn
                        p2
                    }

                    val valids = mutableListOf<RxVal<Boolean>>()
                    val submit = Listeners()

                    form {

                        fun number(
                            labelString: String,
                            source: Var<Int>
                        ) {
                            div {
                                cls {
                                    formGroup
                                }
                                val l = label {
                                    innerText = labelString
                                }
                                input {
                                    cls {
                                        formControl
                                    }
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
                                    ks += rxClass(Cls.isInvalid) { !valid() }
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
                            cls {
                                cursorPointer
                            }
                            val i = input {
                                cls {
                                    m1
                                    pointerEventsNone
                                }
                                type = "checkbox"
                                Model.sounds.forEach {
                                    checked = it
                                }
                            }
                            label {
                                cls {
                                    pointerEventsNone
                                }
                                innerText = "Sounds"
                                htmlFor = i.ref
                            }
                            clickEvent {
                                Model.sounds.now = !Model.sounds.now
                            }
                        }
                    }
                    btnButton {
                        cls {
                            flexFixedSize()
                            btnPrimary
                        }
                        faButtonSpan(Fa.running) {
                            cls.fa.x3
                        }
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