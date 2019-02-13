package music.player

import commonshr.Trigger

class Hidden(
    player: Player
): PlayerWrap(player, player) {
    override val show: Trigger = { this.player.slot %= null }
}