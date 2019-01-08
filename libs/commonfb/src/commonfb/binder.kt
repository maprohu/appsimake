package commonfb

import commonshr.PropOps
import commonshr.ScalarProp
import firebase.firestore.FieldValue

val ClientPropOps = PropOps(
    delete = { FieldValue.delete() }
)
