package commonlib.commonlib

import common.named
import commonshr.*
import firebaseshr.Base


val shared by named { Lib(it) }

interface AdminUsersDoc : AdminDoc
class TokenDeveloperClaims: Base<TokenDeveloperClaims>() {
    val adminRight by o.scalar<Boolean>().prop()
    val musicRight by o.scalar<Boolean>().prop()
}

val CollectionWrap<AdminDoc>.users by doc<AdminUsersDoc>()
val DocWrap<AdminUsersDoc>.tokens by coll<TokenDeveloperClaims>()

val customToken by shared.function<Unit, String?>()

