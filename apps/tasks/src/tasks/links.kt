package tasks

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonshr.toFsEditable
import commonui.*
import commonui.links.StringHasher
import firebase.DbApi
import tasks.editnote.EditNote
import tasks.edittag.EditTag
import tasks.edittask.EditTask
import tasks.listtags.ListTags
import tasks.listtasks.ListTasks
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInTC
import tasks.newnote.NewNote
import tasks.newtag.NewTag
import tasks.newtask.NewTask
import tasks.selecttags.SelectTags
import tasks.viewtask.ViewTask

interface LinksPath: DbApi {
    val links: Links
}

class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    override val home = root { link ->
        LoggedIn(
            this,
            link,
            deps.hole,
            requestUser()
        ).also {
            deps.hole %= it
        }
    }

    val listTags by home.child { li, link ->
        ListTags(li, link).forwarding(li)
    }

    val listTasks by home.child { li, lnk ->
        ListTasks(li, lnk).forwarding(li)
    }

    val selectTags by listTasks.child { l, lnk ->
        SelectTags(l, lnk).forwarding(l)
    }

    val editTag by listTags.param(StringHasher).child { lt, tid, lnk->
        EditTag(
            lt,
            lnk,
            lt.loggedIn.userTags.doc(tid).get()
        ).forwarding(lt)
    }

    val newTag by listTags.child { lt, lnk ->
        NewTag(
            lt,
            lnk
        ).forwarding(lt)
    }

    val viewTask by base<LoggedInTC<*>>().param(StringHasher).child { parent, tid, lnk ->
        ViewTask(
            parent,
            lnk,
            parent.loggedIn.tasksCollection.doc(tid).get()
        ).forwarding(parent)
    }

    val editViewTask by viewTask.child { vt, lnk ->
        EditTask(
            vt,
            lnk,
            vt.fsDoc.toFsEditable(),
            deleteTrigger = { vt.backOnRedisplay() }
        ).forwarding(vt)
    }

    val editNote by viewTask.param(StringHasher).child { vt, nid, lnk ->
        EditNote(
            vt,
            lnk,
            vt.notes.doc(nid).get()
        ).forwarding(vt)
    }

    val newNote by viewTask.child { vt, lnk ->
        NewNote(
            vt,
            lnk
        ).forwarding(vt)
    }


    val editTask by base<LoggedInTC<*>>().param(StringHasher).child { parent, tid, lnk ->
        EditTask(
            parent,
            lnk,
            parent.loggedIn.tasksCollection.doc(tid).get()
        ).forwarding(parent)
    }

    val newTask by base<LoggedInTC<*>>().child { parent, lnk ->
        NewTask(
            parent,
            lnk
        ).forwarding(parent)
    }

}
