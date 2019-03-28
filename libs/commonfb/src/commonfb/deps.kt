package commonfb

import commonshr.HasKills
import commonui.HasCsToast
import commonui.HasEdit
import commonui.HasToast
import firebase.HasCsDbKills
import firebase.HasDb

interface HasDbEdit: HasDb, HasEdit

interface HasDbEditKills: HasDbEdit, HasKills

interface HasCsDbKillsToast: HasCsDbKills, HasCsToast
