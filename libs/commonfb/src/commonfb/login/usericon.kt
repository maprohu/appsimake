package commonfb.login

import commonfb.HasKillsLogin
import commonfb.UserState
import commonshr.HasKills
import commonui.user.userIcon
import commonui.widget.Factory
import rx.RxIface
import rx.rx

fun RxIface<UserState>.imageUrl(deps: HasKills) = map(deps) { st ->
    when (st) {
        is UserState.LoggedIn -> st.user.photoURL
        else -> null
    }
}

fun Factory.userIcon(deps: HasKillsLogin) = userIcon(deps, deps.userState.imageUrl(deps))

