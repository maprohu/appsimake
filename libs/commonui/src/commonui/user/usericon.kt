package commonui.user

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import rx.*
import styles.*

const val UnknownUserSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAz1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZY6YEAAAARHRSTlMAAQIEBQcKCwwODxITGBkkLzM1OEpLTFJXXWJnaGlrfH6IiYuMjo+Xo6Wtr7Cyur7Aw8XHyMrM0dPc4uTo6e/x8/n7/fpxHuUAAAFVSURBVBgZ5cHpMgNBFAbQj2kSy5CNIIIIEVsS+zZNTH/v/0xUSaXouXGv387BP+aqnaH3w07V4S+SVs6JvJXALM34TZbCqBL4Q16BSRoYyVMYJBkLsgS6XQpaULlAQe6gqVFUheaQog40I4qG0HiKPDSeIg/NiKIhNF2KOtDUKKpC4wIFuYOqTUELusSzIEtgsBYYCSlMKoE/hAqM1jy/yVLoFprnvjePpB04EXYTzPf8WXMBv2gEfrpaBFytO/J+dFhzQOman0IDMx3xS2g7TLm9wC9dzLDDqfeT+pID3FL95J1TOxCtUrUCSZ+qPgRlGpRRtEWDLRTd0+AOBY4mDrF1mqwjtkmTDcQOaLKP2ClN+ojd0uQGsReaPCP2RpNXxHKa5Ii90OQZsUuaXCC2TZNtxJZpsoyCHg2OUeSeqHpyEJQeqXhYhGiuMRhzpvGgMYf/5QNf4mAOhjK3vQAAAABJRU5ErkJggg=="

fun Factory.userIcon(deps: HasKills, imageUrl: RxIface<String?>) = wraps.div {
    cls {
        p2
        positionRelative
    }
    div {
        cls.iconSquare
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
            imageUrl.forEach(deps) { src = it ?: UnknownUserSrc }
        }
    }
}
