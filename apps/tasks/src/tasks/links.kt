package tasks

import commonfb.FBLinks
import commonfb.FBLinksDeps
import commonshr.toFsEditable
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


    override val welcome by link(true) {
        LoggedIn(
            this,
            deps.hole,
            login()
        ).apply {
            deps.hole %= this
        }
    }

    val listTags by link {
        welcome.get()?.let { li ->
            ListTags(li).forwarding(li)
        }
    }

    val listTasks by link {
        welcome.get()?.let { li ->
            ListTasks(li).forwarding(li)
        }
    }
    val selectTags by link {
        listTasks.get()?.let { l ->
            SelectTags(l).forwarding(l)
        }
    }

    val editTag by stringParam().link { p ->
        listTags.get()?.let { vc ->
            EditTag(
                vc,
                vc.loggedIn.userTags.doc(p).get()
            ).forwarding(vc)
        }
    }

    val newTag: Link<Unit, EditTag> by link {
        listTags.get()?.let { vc ->
            val item = vc.loggedIn.userTags.randomEditable()
            EditTag(
                vc,
                item,
                exiting(
                    newTag,
                    LinkParam(editTag, item.id.id)
                )
            ).forwarding(vc)
        }
    }

    val viewTask by baseTC().param<String>().link { p ->
        welcome.get()?.let { w ->
            p.link.get()?.let { parent ->
                ViewTask(
                    w,
                    parent,
                    p.link.link,
                    w.loggedIn.tasksCollection.doc(p.param).get()
                ).forwarding(parent)
            }
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

    val editTask by baseTC().param<String>().link { p ->
        viewTask.get(p)?.let { vt ->
            EditTask(
                vt,
                vt.fsDoc.toFsEditable()
            ).forwarding(vt)
        }
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
