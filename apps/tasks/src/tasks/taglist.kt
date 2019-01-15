package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonui.*
import domx.*
import firebase.firestore.query
import fontawesome.*
import killable.Killable
import killable.Killables
import rx.Var
import taskslib.Tag
import taskslib.Task

fun LoggedIn.listTags(
    killables: Killables,
    panel: RootPanel,
    after: () -> Unit
) {
    ListScreenConfig(
        "Tags",
        { Tag() },
        userTags,
        ::editTag,
        ::editTag,
        { it.name.initial().orEmpty() },
        filter = FilterConfig.of(
            userTags.query(db) {
                Tag.name.asc()
            }
        )
    ).build(
        killables,
        panel,
        db,
        after
    )
}
