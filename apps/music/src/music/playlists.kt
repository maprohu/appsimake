package music

import bootstrap.*
import common.None
import common.Some
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import fontawesome.Fa
import fontawesome.play
import fontawesome.plus
import indexeddb.IDBDatabase
import indexeddb.get
import indexeddb.getAllKeys
import killable.Killable
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.UserSongState
import styles.scrollVertical

fun playlists(
    panel: RootPanel,
    killables: Killables,
    close: () -> Unit
) {
    panel.newRoot {
        screenLayout(killables) {
            top {
                backButton(close)
                middleTitle {
                    innerText = "Playlists"
                }

                right {
                    faButton(Fa.plus) {
                        cls {
                            m1
                            btnPrimary
                        }
                    }
                }

            }
            main {
                cls {
                    scrollVertical
                }
                div {
                    cls {
                        m1
                        listGroup
                    }
                    clickItemButtons {
                        text {
                            innerText = "All Local Songs"
                        }
                        buttons {
                            faButton(Fa.play) {
                                cls {
                                    btnOutlineSuccess
                                }


                            }
                        }

                    }

                }

            }
        }
    }
}


class Playlist(
    private val idb: IDBDatabase,
    private val userSongsDB: UserSongsDB,
    killables: Killables
) {

    val dontLikes = mutableSetOf<String>()
    val likes = mutableSetOf<String>()

    fun like(id: String) {
        dontLikes -= id
        likes += id
        GlobalScope.launch {
            userSongsDB.get(id).apply {
                state.cv = UserSongState.Like
                props.save()
            }
        }
    }
    fun dontLike(id: String) {
        dontLikes += id
        likes -= id
        GlobalScope.launch {
            userSongsDB.get(id).apply {
                state.cv = UserSongState.DontLike
                props.save()
            }
        }
    }

    init {
        val uskills = mutableMapOf<String, Killables>()
        killables += userSongsDB.queryCache.listen { d ->
            d.removed.forEach { r ->
                val id = r.props.idOrFail
                dontLikes -= id
                uskills.remove(id)?.kill()
            }
            d.added.forEach { r ->
                val id = r.props.idOrFail
                val ks = killables.killables()
                uskills[id] = ks
                ks += r.state.initial.forEach { s ->
                    when (s) {
                        None -> {
                            dontLikes -= id
                            likes -= id
                        }
                        Some(UserSongState.Like) -> {
                            dontLikes -= id
                            likes += id
                        }
                        Some(UserSongState.DontLike) -> {
                            dontLikes += id
                            likes -= id
                        }
                    }
                }

            }

        }
    }



    suspend fun next(): String? {
        val local = idb.getAllKeys<String>(Mp3Store).toSet()

        val lists = listOf(
            { local - likes - dontLikes },
            { local - dontLikes }
        )

        for (lfn in lists) {
            val list = lfn()

            if (list.isNotEmpty()) {
                return list.random()
            }
        }

        return null
    }
}
