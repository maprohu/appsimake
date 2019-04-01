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

fun Bindings.addDirty(deps: HasKills, fn: KillsApi.() -> Boolean) {
    addDirty(deps, rx(deps, fn))
}


open class DefaultBindings(
    final override val kills: KillSet
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
interface Creating: Bindings {
    val persist: Trigger
    val edit: Trigger
}
interface Editing: Bindings {
    val save: Trigger
    val delete: Trigger
}

abstract class DefaultEditing(
    kills: KillSet
): DefaultBindings(
    kills
), Editing

data class CreatingTriggers<T>(
    val persist: (T) -> Unit,
    val edit: () -> Unit = {}
)
data class EditingTriggers<T>(
    val delete: Trigger,
    val save: (T) -> Unit
)

class RxCreating<T: RxBase<*>>(
    kills: KillSet,
    val initial: FsEditable<T>,
    val triggers: CreatingTriggers<T>
): DefaultBindings(kills), Creating, KillsApi {
    val current: T = initial.doc.copy()

    init {
        extraDirty.transform { it + rx { !rxCompare(initial.doc, current) } }
    }

    override val persist: Trigger = {
        triggers.persist(current)
    }

    override val edit = {
        triggers.edit()
    }
}

fun <T> onPersist(fn: Trigger): Copier<CreatingTriggers<T>> = { tr ->
    tr.copy(
        persist = { current ->
            tr.persist(current)
            fn()
        }
    )
}
fun <T> onEdit(fn: Trigger): Copier<CreatingTriggers<T>> = { tr ->
    tr.copy(
        edit = {
            fn()
        }
    )
}

class RxEditing<T: RxBase<*>>(
    kills: KillSet,
    val initial: FsDoc<T>,
    val triggers: EditingTriggers<T>
): DefaultEditing(kills), KillsApi {
    val current: T = initial.rxv.now.copy()
    override val delete = triggers.delete

    init {
        extraDirty.transform { it + rx { !initial.id.state().exists || !rxCompare(initial(), current) } }
    }

    override val save: Trigger = {
        triggers.save(current)
    }
}

fun <T> backOnDelete(deps: HasBack): Copier<EditingTriggers<T>> = { tr ->
    tr.copy(
        delete = {
            tr.delete()
            deps.back()
        }
    )
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

        deps.bindings.addValidation(deps, b.valid)
        deps.bindings.addDirty(deps, b.dirty)

        b.valid.forEach(deps.kills) { valid %= it }
    }
}

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

fun Factory.persistButton(
    deps: HasCreateKillsUix,
    fn: Button.() -> Unit = { m1 }
) = button {
    p2
    primary
    fa.save
    enabled(deps) { deps.creating.canSave() }
    click(deps) {
        deps.creating.persist()
        deps.creating.edit()
    }
}.apply(fn)

fun Factory.saveDeleteButton(deps: HasBackEditKillsUix) = buttonGroup {
    m1
    slots.buttons.slot.insert.saveButton(deps) {}
    dropdownSplit {
        primary
        menu {
            right
            item {
                cls.textDanger
                fa.trashAlt
                text %= "Delete"
                click(deps) {
                    deps.editing.delete()
                    deps.back()
                }
            }
        }
    }
}

class BackPersistDiscard(
    deps: HasBackCreateKillsUix,
    holes: SlotHoles
): HasBackCreateKillsUix by deps, KillsApiCommonui, KillsUixApi, InvokeApply {
    val discardButton = holes.slot.insert.button {
        visible { creating.dirty() && !creating.canSave() }
        m1p2
        fa.backspace
        danger
        click {
            back()
        }
    }

    val backButton = holes.slot.insert.button {
        visible { !creating.dirty() && !creating.canSave() }
        back
        click {
            back()
        }
    }
    val saveButtonGroup = holes.slot.insert.buttonGroup {
        visible { creating.canSave() }
        cls.m1
        button {
            cls {
                p2
                btnSuccess
            }
            insert.icon {
                fa {
                    chevronLeft
                }
            }
            insert.icon {
                fa {
                    save
                }
            }
            click {
                creating.persist()
                back()
            }
        }
        dropdownSplit {
            cls.btnSuccess
        }
        menu {
            item {
                visible { !creating.dirty() }
                fa.chevronLeft
                text %= "Back"
                click {
                    back()
                }
            }
            item {
                visible { creating.dirty() }
                cls.textDanger
                fa.backspace
                text %= "Discard"
                click {
                    back()
                }
            }
        }
    }

    fun saveAndView(view: Trigger) {
        saveButtonGroup.menu.item {
            cls.textSuccess
            fa.save
            text %= "Save and View"
            click {
                creating.persist()
                view()
            }
        }
    }

}

class BackSaveDiscard(
    deps: HasBackEditKillsUix,
    holes: SlotHoles
): HasBackEditKillsUix by deps, KillsApiCommonui, KillsUixApi, InvokeApply {
    val discardButton = holes.slot.insert.button {
        visible { editing.dirty() && !editing.canSave() }
        m1p2
        fa.backspace
        danger
        click {
            back()
        }
    }

    val backButton = holes.slot.insert.buttonGroup {
        visible { !editing.dirty() }
        cls.m1
        button {
            cls {
                p2
                btnSecondary
            }
            fa.chevronLeft
            click {
                back()
            }
        }
    }

    val backButtonDropdown by lazy {
        backButton.dropdownSplit {
            cls.btnSecondary
        }
        backButton.menu
    }

    val saveButtonGroup = holes.slot.insert.buttonGroup {
        visible { editing.dirty() && editing.canSave() }
        cls.m1
        button {
            cls {
                p2
                btnSuccess
            }
            insert.icon {
                fa {
                    chevronLeft
                }
            }
            insert.icon {
                fa {
                    save
                }
            }
            click {
                editing.save()
                back()
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
                    back()
                }
            }
        }
    }

    fun saveAndView(view: Trigger) {
        saveButtonGroup.menu.item {
            cls.textSuccess
            fa.save
            text %= "Save and View"
            click {
                editing.save()
                view()
            }
        }
        backButtonDropdown.item {
            fa.eye
            text %= "Close and View"
            click {
                view()
            }
        }
    }

}