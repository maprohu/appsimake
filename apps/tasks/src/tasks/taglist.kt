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

fun LoggedIn.listTags(panel: RootPanel, after: () -> Unit) : Killable {
    return ListScreenConfig(
        "Tags",
        { Tag() },
        ::viewTag,
        ::editTag,
        userTags.query(db) {
            Tag.name.asc()
        },
        { it.name.initial().orEmpty() }
    ).build(
        panel,
        after
    )
}
