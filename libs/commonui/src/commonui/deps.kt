package commonui

import commonshr.Exec
import commonshr.HasKills
import commonui.editing.DefaultEditing
import commonui.widget.HasRedisplay
import killable.KillSet

interface HasEdit {
    val editing: DefaultEditing
}

interface HasEditKills: HasEdit, HasKills

class EditKillsDeps(
    override val editing: DefaultEditing,
    override val kills: KillSet
): HasEditKills

operator fun DefaultEditing.plus(kills: KillSet) = EditKillsDeps(this, kills)

interface HasEditFromKillsUix: HasEdit, HasFrom, HasKills, HasUix


interface HasFrom {
    val from: HasRedisplay
}

interface HasEditFrom: HasEdit, HasFrom

interface HasUix {
    val uix: Exec
}

interface HasKillsUix: HasKills, HasUix

interface HasEditKillsUix: HasEdit, HasKills, HasUix, HasKillsUix, HasEditKills
