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
                model.sounds.rxv.transform { !it }
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

            form {
                cls {
                    m1
                }

                fun number(
                    labelString: String,
                    source: Var<Int>
                ) {
                    insert.formGroup {
                        label %= labelString
                        input {
                            node.type = "number"
                            bind(
                                source,
                                { it.toString() },
                                { str ->
                                    val double = str.toDouble()
                                    val int = double.toInt()
                                    require(int.toDouble() == double) { "Must be round number." }
                                    require(int >= 0) { "Cannot be negative." }
                                    int
                                }
                            )
                        }
                    }
                }

                number(
                    "Work (seconds)",
                    model.work.rxv
                )
                number(
                    "Rest (seconds)",
                    model.rest.rxv
                )
                number(
                    "Initial delay (seconds)",
                    model.delay.rxv
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
                enabled { bindings.canSave() }
                click {
                    startWorkout()
                }
            }


        }
    }

}.node
