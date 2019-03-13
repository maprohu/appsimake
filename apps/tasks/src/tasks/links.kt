package tasks

import commonfb.FBLinks
import commonfb.FBLinksDeps
import commonui.*
import firebase.DbApi
import tasks.edittag.EditTag
import tasks.listtags.ListTags
import tasks.listtasks.ListTasks
import tasks.loggedin.LoggedIn
import tasks.viewtask.ViewTask

interface LinksPath: DbApi {
    val links: Links
}

typealias TasksParam<T> = BaseParam<String, T>

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
            displayRoute = { deps.hole %= this }
        }
    }

    val listTags by link {
        welcome.get()?.let { li ->
            ListTags(li).setTo(li)
        }
    }

    val listTasks by link {
        welcome.get()?.let { li ->
            ListTasks(li).setTo(li)
        }
    }

    val editTag by param<String>().link { p ->
        listTags.get()?.let { vc ->
            EditTag(
                vc,
                vc.loggedIn.userTags.doc(p).get()
            ).setTo(vc)
        }
    }

    val x = listOf(
        welcome,
        listTasks
    )


    val viewTask by param<TasksParam<String>>().link { p ->
        welcome.get()?.let { vc ->
            ViewTask(
                vc,
                vc,
                vc.loggedIn.tasksCollection.doc(p).get()
            ).setTo(vc)
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
