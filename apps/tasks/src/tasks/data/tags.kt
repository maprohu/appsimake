package tasks.data

import commonshr.CollectionSource
import firebase.HasCsDbKills
import firebase.firestore.fsLookup
import firebase.firestore.toList
import rx.SimpleRxLookup
import taskslib.Tag

fun tagsLookup(
    deps: HasCsDbKills,
    coll: CollectionSource<Tag>
) = fsLookup(
    deps,
    coll
) { id -> Tag().apply { name %= id } }

fun tagsList(
    deps: HasCsDbKills,
    coll: CollectionSource<Tag>
) = coll.toList(deps)


