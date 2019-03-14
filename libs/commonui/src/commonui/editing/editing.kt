package commonui.editing

import bootstrap.*
import commonshr.*
import commonshr.properties.*
import commonui.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.*
import rx.*

interface Bindings {
    val dirty: RxIface<Boolean>
    val canSave: RxIface<Boolean>

    fun addValidation(deps: HasKills, rxv: RxIface<Boolean>)
    fun addDirty(deps: HasKills, rxv: RxIface<Boolean>)
}
open class DefaultBindings(
    final override val kills: KillSet
//    defaultDirty: () -> Boolean = { false }
): Bindings, KillsApi {


    val extraDirty = Var(emptyList<RxIface<Boolean>>())
    val validations = Var(emptyList<RxIface<Boolean>>())

    final override val canSave = this.rx { validations().all { it() } }

    final override val dirty = this.rx {
        extraDirty().any { it() }
    }

    override fun addValidation(deps: HasKills, rxv: RxIface<Boolean>) = validations.add(deps, rxv)
    override fun addDirty(deps: HasKills, rxv: RxIface<Boolean>) = extraDirty.add(deps, rxv)

}
interface Editing: Bindings {
    val save: Trigger
    val delete: Trigger
    val canDelete: RxIface<Boolean>
}

abstract class DefaultEditing(
    kills: KillSet
//    defaultDirty: () -> Boolean
): DefaultBindings(
    kills
//    defaultDirty
), Editing

class RxEditing<T: RxBase<*>>(
    kills: KillSet,
    val initial: FsDoc<T>,
    override val canDelete: RxIface<Boolean>,
    override val delete: Trigger,
    saveCurrent: (T) -> Unit,
    onPersist: Trigger
): DefaultEditing(kills), KillsApi {
    val current: T = initial.rxv.now.copy()

    init {
        extraDirty.transform { it + rx { !initial.id.state().exists || !rxCompare(initial(), current) } }
    }


//    constructor(
//        kills: KillSet,
//        initial: FsDoc<T>,
//        canDelete: RxIface<Boolean>,
//        delete: Trigger,
//        saveCurrent: (T) -> Unit
//    ): this(
//        kills,
//        initial,
//        initial.rxv.now.copy(),
//        canDelete,
//        delete,
//        saveCurrent
//    )

    private val onPersistOnce by lazy {
        onPersist()
    }

    init {
        initial.id.state.forEach {s ->
            if (s.exists) {
                onPersistOnce
            }
        }
    }

    override val save: Trigger = {
        onPersistOnce
        saveCurrent(current)
    }
}


class Binder<V>(
    val rawValue: RxIface<String>,
    val parsedValue: RxIface<V>,
    override val kills: KillSet
): KillsApi {
    val validations = Var(emptyList<RxIface<Boolean>>())
    val valid = Rx(NoKill) { validations().all { it() } }
    val dirties = Var(emptyList<RxIface<Boolean>>())
    val dirty = Rx(NoKill) { dirties().any { it() } }
}

fun Binder<*>.validate(fn: KillsApi.() -> Boolean) {
    validations.add(this, rx { fn() } )
}

fun Binder<*>.raw(fn: KillsApi.(String) -> Boolean) = validate { fn(rawValue()) }
fun <V> Binder<V>.parsed(fn: KillsApi.(V) -> Boolean) = validate { fn(parsedValue()) }

fun Binder<String>.required() = parsed { it.isNotBlank() }

fun AbstractInput.bind(
    deps: HasBindKills,
    rxv: HasVar<String>
): Binder<String> = bind(deps, rxv.rxv)

fun AbstractInput.bind(
    deps: HasBindKills,
    rxv: Var<String>
): Binder<String> {
    return bind(
        deps,
        rxv,
        identityCopier(),
        { it.trim() }
    )
}

fun <V> AbstractInput.bind(
    deps: HasBindKills,
    modelValue: Var<V>,
    initial: (V) -> String,
    extract: (String) -> V
): Binder<V> {
    value = initial(modelValue.now)

    val extractValid = Var(true)

    this.rxv.forEach(deps.kills) { s ->
        try {
            modelValue %= extract(s)
            extractValid %= true
        } catch (e: Throwable) {
            extractValid %= false
        }
    }

    return Binder(
        this.rxv,
        modelValue,
        deps.kills
    ).also { b ->
        b.validations.transform { it + extractValid }
        b.dirties.transform { it + Rx(deps.kills) { !extractValid() } }

        deps.editing.addValidation(deps, b.valid)
        deps.editing.addDirty(deps, b.dirty)

        b.valid.forEach(deps.kills) { valid %= it }
    }
}


//interface EditingApi : HasEdit, KillsApi, HasFrom, HasUix, KillsApiCommonui {
//
//    fun <T: RxBase<*>> rxEditing(initial: T, saveCurrent: suspend (T) -> Unit) = RxEditing(initial, kills, saveCurrent)
//
//
//}

fun Factory.saveButton(
    deps: HasEditKillsUix,
    fn: Button.() -> Unit = { m1 }
) = button {
    p2
    primary
    fa.save
    enabled(deps) { deps.editing.dirty() && deps.editing.canSave() }
    click(deps) { deps.editing.save() }
}.apply(fn)

fun Factory.saveDeleteButton(deps: HasEditExitFromKillsUix) = buttonGroup {
    m1
    slots.buttons.slot.insert.saveButton(deps) {}
    dropdownSplit {
        primary
        visible(deps) { deps.editing.canDelete() }
        menu {
            visible(deps) { deps.editing.canDelete() }
            right
            item {
                enabled(deps) { deps.editing.canDelete() }
                cls.textDanger
                fa.trashAlt
                text %= "Delete"
                click(deps) {
                    deps.editing.delete()
                    deps.exit.redisplay()
                }
            }
        }
    }
}

class BackSaveDiscard(deps: HasEditExitFromKillsUix, holes: SlotHoles): HasEditExitFromKillsUix by deps, KillsApiCommonui, KillsUixApi {
    private fun fromOrExit() {
        if (editing.canDelete.now) {
            from.redisplay()
        } else {
            exit.redisplay()
        }
    }
    val discard = holes.slot.insert.button {
        visible { editing.dirty() && !editing.canSave() }
        m1p2
        fa.backspace
        danger
        click {
            fromOrExit()
        }
    }
    val back = holes.slot.insert.button {
        visible { !editing.dirty() }
        back
        click {
            fromOrExit()
        }
    }
    val save = holes.slot.insert.buttonGroup {
        visible { editing.dirty() && editing.canSave() }
        cls.m1
        button {
            cls {
                p2
                btnSuccess
            }
            node.span {
                cls.fa {
                    fw
                    chevronLeft
                }
            }
            node.span {
                cls.fa {
                    fw
                    save
                }
            }
            click {
                editing.save()
                from.redisplay()
            }
        }
        dropdownSplit {
            cls.btnSuccess
        }
        menu {
            item {
                cls.textDanger
                fa.backspace
                text %= "Discard"
                click {
                    fromOrExit()
                }
            }
        }
    }

}