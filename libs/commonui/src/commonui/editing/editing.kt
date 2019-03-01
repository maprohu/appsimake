package commonui.editing

import bootstrap.*
import commonshr.*
import commonshr.properties.RxBase
import commonshr.properties.copy
import commonshr.properties.rxCompare
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

class RxEditing<T: RxBase<*>>(
    val initial: T,
    override val kills: KillSet,
    saveCurrent: suspend (T) -> Unit
): Editing, HasKillSet {
    val current = initial.copy()
    val extraDirty = Var(emptyList<RxIface<Boolean>>())
    val validations = Var(emptyList<RxIface<Boolean>>())
    override val dirty = rx {
        extraDirty().any { it() } || !rxCompare(initial, current)
    }
    override val canSave = rx { validations().all { it() } }
    override val save: Action = {
        saveCurrent(current)
    }

}

interface HasEditing {
    val editing: Editing
}

interface EditingApi : HasEditing, HasKillSet, HasFrom, HasUIX, UiKillsApi {

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