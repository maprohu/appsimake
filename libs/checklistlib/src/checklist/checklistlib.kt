package checklist

import commonlib.DocWrap
import commonlib.Lib
import commonlib.Private
import commonlib.coll
import commonshr.properties.RxBase
import firebaseshr.Base
import firebaseshr.BaseRootVal
import firebaseshr.firestore.Timestamp

val checklistLib = Lib("checklist")

val DocWrap<Private>.checklists by coll<Checklist>()

open class Checklist: RxBase<Checklist>() {
    val name by o.string()
    val ts  by o.timestamp()
    val items by o.rxlist { ChecklistItem() }

    companion object: Checklist()
}

open class ChecklistItem: RxBase<ChecklistItem>() {
    val name by o.string()
    val checked by o.boolean()
}

