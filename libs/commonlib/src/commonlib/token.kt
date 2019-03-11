package commonlib.commonlib

import common.named
import commonshr.*
import commonshr.properties.RxBase


val shared by named { Lib(it) }

interface AdminUsersDoc : AdminDoc
class TokenDeveloperClaims: RxBase<TokenDeveloperClaims>() {
    val adminRight by o.prop(false)
    val musicRight by o.prop(false)
}

val CollectionWrap<AdminDoc>.users by doc<AdminUsersDoc>()
val DocWrap<AdminUsersDoc>.tokens by coll<TokenDeveloperClaims>()

val customToken by shared.function<Unit, String?>()

