package commonfb

import firebase.User

class LoggedInCtx(
    val fbCtx: FbCtx,
    val user: User
) {
    val privateRef = fbCtx.baseRef.collection("private").doc(user.uid)
}