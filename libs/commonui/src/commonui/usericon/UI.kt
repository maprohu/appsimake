package commonui.usericon

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.KillSet
import killable.addedTo
import rx.RxIface
import styles.leftRightTopBottom0
import styles.objectFitCover

fun UI(
    kills: KillSet,
    slot: Factory,
    bind: Bind
) = with(bind) {
    with(slot) {
        userIcon(kills, imageUrl)
    }
}


fun Factory.userIcon(kills: KillSet, imageUrl: RxIface<String>) = wraps.div {
    cls {
        p2
        positionRelative
    }
    span {
        cls.fa.fw
    }
    div {
        cls {
            positionAbsolute
            leftRightTopBottom0
        }
        img {
            cls {
                border
                rounded
                w100
                h100
                objectFitCover
            }
            imageUrl.forEach(kills) { src = it }
        }
    }
}