package checklist

import commonlib.DocWrap
import commonlib.Lib
import commonlib.Private
import commonlib.coll
import firebaseshr.Base
import firebaseshr.BaseRootVal
import firebaseshr.firestore.Timestamp

val checklistLib = Lib("checklist")

val DocWrap<Private>.checklists by coll<Checklist>()

open class Checklist: Base<Checklist>() {
    val name by o.scalar<String>().prop()
    val ts  by o.scalar<Timestamp>().prop()
    val items by o.scalar<List<ChecklistItem>>().prop()

    companion object: Checklist()
}

open class ChecklistItem: BaseRootVal<ChecklistItem>() {
    val name by o.scalar<String>().prop()
    val checked by o.scalar<Boolean>().withDefault(false).prop()
}

