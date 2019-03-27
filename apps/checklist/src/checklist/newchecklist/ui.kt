package checklist.newchecklist

import bootstrap.*
import checklist.Checklist
import checklist.editchecklist.editChecklistUi
import commonshr.*
import commonui.editing.bind
import commonui.editing.required
import commonui.plus
import commonui.widget.*
import domx.div
import domx.*
import fontawesome.*

fun NewChecklist.ui() = editChecklistUi(
    creating.current,
    control
) {
    slots.left.backPersistDiscard
    title %= "New Checklist"
    right.persistButton
}

