package commonfb

import commonshr.HasKills
import commonui.HasEdit
import firebase.HasDb

interface HasDbEdit: HasDb, HasEdit

interface HasDbEditKills: HasDbEdit, HasKills
