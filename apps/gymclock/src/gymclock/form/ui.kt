package gymclock.form

import bootstrap.*
import common.Listeners
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import rx.*

fun Form.ui() = factory.screen {
    topbar {
        title {
            cls.p1
            this %= "Gym Clock"
        }
        right.button {
            m1p2
            fa
            secondary
            icon.rxClass {
                if (model.sounds()) {
                    Fa.volumeUp
                } else {
                    Fa.volumeMute
                }
            }
            click {
                model.sounds.transform { !it }
            }
        }
    }
    main.insert.scrollPane {
        pane {
            cls {
                dFlex
                flexColumn
                p1
            }
            val valids = mutableListOf<RxVal<Boolean>>()
            val submit = Listeners()

            form {
                cls {
                    m1
                }

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
                            val rxn = rx {
                                try {
                                    rxs().toInt()
                                } catch (_: Throwable) {
                                    null
                                }
                            }
                            val valid = rx {
                                rxn() != null && cv()
                            }
                            valids += valid
                            submit += { source.now = rxn.now!! }
                            rxClass(Cls.isInvalid) { !valid() }
                        }

                    }

                }

                number(
                    "Work (seconds)",
                    model.work
                )
                number(
                    "Rest (seconds)",
                    model.rest
                )
                number(
                    "Initial delay (seconds)",
                    model.delay
                )

            }
            insert.button {
                cls {
                    m1
                    flexFixedSize()
                    btnPrimary
                }
                icon.cls.fa {
                    x3
                    running
                }
                val canSubmit = rx {
                    valids.all { it() }
                }
                enabled { canSubmit() }
                click {
                    submit.fire()
                    start()
                }
            }


        }
    }

}.node
