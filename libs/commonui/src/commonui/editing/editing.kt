package commonui.editing

import bootstrap.*
import commonshr.*
import commonshr.properties.*
import commonui.UiKillsApi
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.*
import rx.*

interface Editing {
    val dirty: RxIface<Boolean>
    val canSave: RxIface<Boolean>
    val save: Action
}

abstract class DefaultEditing(
    final override val kills: KillSet
): Editing, HasKillSet {

    val extraDirty = Var(emptyList<RxIface<Boolean>>())
    val validations = Var(emptyList<RxIface<Boolean>>())

    final override val canSave = this.rx { validations().all { it() } }

}
class RxEditing<T: RxBase<*>>(
    val initial: T,
    kills: KillSet,
    saveCurrent: suspend (T) -> Unit
): DefaultEditing(kills), HasKillSet {
    val current = initial.copy()
    override val save: Action = {
        saveCurrent(current)
    }
    override val dirty = this.rx {
        extraDirty().any { it() } ||
                !rxCompare(initial, current)
    }
}

interface HasEditing {
    val editing: Editing
}

class Binder<V>(
    val rawValue: RxIface<String>,
    val parsedValue: RxIface<V>,
    override val kills: KillSet
): HasKillSet {
    val validations = Var(emptyList<RxIface<Boolean>>())
    val valid = Rx(NoKill) { validations().all { it() } }
    val dirties = Var(emptyList<RxIface<Boolean>>())
    val dirty = Rx(NoKill) { dirties().any { it() } }
}

fun Binder<*>.validate(fn: HasKillSet.() -> Boolean) {
    val rxv = rx { fn() }
    validations.transform { it + rxv }
    kills += { validations.transform { it - rxv } }
}

fun Binder<*>.raw(fn: HasKillSet.(String) -> Boolean) = validate { fn(rawValue()) }
fun <V> Binder<V>.parsed(fn: HasKillSet.(V) -> Boolean) = validate { fn(parsedValue()) }

fun Binder<String>.required() = parsed { it.isNotBlank() }

interface HasDefaultEditing: HasEditing {
    override val editing: DefaultEditing

    fun Input.bind(
        kills: KillSet,
        rxv: Var<String>
    ): Binder<String> {
        return bind(
            kills,
            rxv,
            identityCopier(),
            { it.trim() }
        )
    }

    fun <V> Input.bind(
        kills: KillSet,
        modelValue: Var<V>,
        initial: (V) -> String,
        extract: (String) -> V
    ): Binder<V> {
        value = initial(modelValue.now)

        val extractValid = Var(true)

        this.rxv.forEach(kills) { s ->
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
            kills
        ).also { b ->
            b.validations.transform { it + extractValid }
            b.dirties.transform { it + Rx(kills) { !extractValid() } }

            editing.validations.transform { it + b.valid }
            kills += { editing.validations.transform { it - b.valid } }

            editing.extraDirty.transform { it + b.dirty }
            kills += { editing.extraDirty.transform { it - b.dirty } }

            b.valid.forEach(kills) { valid %= it }
        }
    }
}

interface EditingApi : HasDefaultEditing, HasKillSet, HasFrom, HasUIX, UiKillsApi {

    fun <T: RxBase<*>> rxEditing(initial: T, saveCurrent: suspend (T) -> Unit) = RxEditing(initial, kills, saveCurrent)

    val SlotHoles.backSaveDiscard get() = BackSaveDiscard(this@EditingApi, this)

    val Factory.saveButton get() = button {
        m1p2
        primary
        fa.save
        enabled { editing.dirty() && editing.canSave() }
        click { editing.save() }
    }


}

class BackSaveDiscard(api: EditingApi, holes: SlotHoles): EditingApi by api {
    val discard = holes.slot.insert.button {
        visible { editing.dirty() && !editing.canSave() }
        m1p2
        fa.backspace
        danger
        click { from.redisplay() }
    }
    val back = holes.slot.insert.button {
        visible { !editing.dirty() }
        back
        click { from.redisplay() }
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
                click { from.redisplay() }
            }
        }
    }

}