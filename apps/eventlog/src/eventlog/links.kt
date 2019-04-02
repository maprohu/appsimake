package eventlog

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonui.links.StringHasher
import commonui.view.forwarding
import eventlog.editeventtype.EditEventType
import firebase.DbApi
import eventlog.loggedin.LoggedIn
import eventlog.neweventtype.NewEventType
import eventlog.recordoccurrence.RecordOccurrence

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    override val home = root { lnk ->
        LoggedIn(
            this,
            lnk,
            deps.hole,
            requestUser()
        ).apply {
            deps.hole %= this
        }
    }



    val editEventType by home.param(StringHasher).child { parent, id, lnk ->
        EditEventType(
            parent,
            lnk,
            parent.loggedIn.eventTypes.doc(id).getCachedOrServer()
        ).forwarding(parent)
    }

    val newEventType by home.child { parent, lnk ->
        NewEventType(
            parent,
            lnk
        ).forwarding(parent)
    }


    val recordOccurrence by home.param(StringHasher).child { parent, id, lnk ->
        RecordOccurrence(
            parent,
            lnk,
            parent.loggedIn.eventTypes.doc(id).getCachedOrServer()
        ).forwarding(parent)
    }



}
