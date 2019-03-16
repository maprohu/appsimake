package tasks

import commonfb.FBLinks
import commonfb.FBLinksDeps
import commonui.*
import firebase.DbApi
import tasks.editnote.EditNote
import tasks.edittag.EditTag
import tasks.edittask.EditTask
import tasks.listtags.ListTags
import tasks.listtasks.ListTasks
import tasks.loggedin.LoggedIn
import tasks.selecttags.SelectTags
import tasks.viewtask.ViewTask

interface LinksPath: DbApi {
    val links: Links
}

class Links(
    deps: FBLinksDeps
): FBLinks(deps), LinksPath {
    override val links = this


    override val welcome by rootLink {
        LoggedIn(
            this,
            deps.hole,
            login()
        ).apply {
            deps.hole %= this
        }
    }

    val listTags by welcome.child { li ->
        ListTags(li).forwarding(li)
    }

    val listTasks by welcome.child { li ->
        ListTasks(li).forwarding(li)
    }

    val selectTags by listTasks.child { l ->
        SelectTags(l).forwarding(l)
    }

    val editTag by listTags.param(StringHasher).child { lt, tid ->
        EditTag(
            lt,
            lt.loggedIn.userTags.doc(tid).get()
        ).forwarding(lt)
    }

    val newTag: Link<Unit, EditTag> by listTags.child { lt ->
        val item = lt.loggedIn.userTags.randomEditable()
        EditTag(
            lt,
            item,
            exiting(
                newTag,
                LinkParam(editTag, item.id.id.asChildLinkId)
            )
        ).forwarding(lt)
    }

    val viewTask by parentTC().param(StringHasher).child { parent, tid ->
        welcome.get()?.let { w ->
            ViewTask(
                w,
                parent,
                p.link.link,
                w.loggedIn.tasksCollection.doc(p.param).get()
            ).forwarding(parent)
        }
    }

    val editTask by baseTC().param<String>().link { p ->
        viewTask.get(p)?.let { vt ->
            EditTask(
                vt,
                vt.fsDoc.toFsEditable()
            ).forwarding(vt)
        }
    }

    val editNote by viewTask.subParam<String>().link { p ->
        viewTask.get(p)?.let { vt ->
            EditNote(
                vt,
                vt.fsDoc.toFsEditable()
            ).forwarding(vt)
        }
    }
    val newNote by viewTask.subLink { vt ->
        EditNote(
            vt,
            vt.notes.randomEditable()
        ).forwarding(vt)
    }


    val newTask: NewLink<Unit, Unit, EditTask> by baseTC().link { p ->
        welcome.get()?.let { w ->
            p.link.get()?.let { parent ->
                val item = w.loggedIn.tasksCollection.randomEditable()

                val ip = BaseParam(p, item.id.id)

                val vt = ViewTask(
                    w,
                    parent,
                    p.link,
                    item
                )

                EditTask(
                    vt,
                    item,
                    exiting(
                        new = newTask,
                        view = LinkParamView(viewTask, ip, vt),
                        edit = LinkParam(editTask, ip)
                    )
                ).forwarding(vt).also {
                    parent %= vt
                }
            }
        }
    }


//    val newChecklist by link {
//        welcome.get()?.let { li ->
//            Edit(
//                li,
//                li,
//                li.createNewChecklistDoc()
//            ).apply {
//                initial.live
//                li %= this
//            }
//        }
//    }




}
