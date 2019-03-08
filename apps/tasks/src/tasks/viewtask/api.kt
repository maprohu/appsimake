package tasks.viewtask

import commonfb.FBApi
import commonshr.FsDoc
import commonshr.HasExec
import commonui.widget.HasForward
import commonui.widget.JobScopeWithView
import commonui.widget.TopAndContent
import tasks.edittask.EditTask
import tasks.loggedin.LoggedInPath
import taskslib.Task

interface ViewTaskApi: LoggedInPath, HasExec, HasForward<JobScopeWithView<TopAndContent>>, FBApi {

    fun newTask() {
        exec {
            forward.switchTo {
                Task().toRandomFsDoc(loggedIn.tasksCollection).run {
                    ViewTask(loggedIn, this@ViewTaskApi, this).apply {
                        item.live
                        forward.switchTo {
                            EditTask(this)
                        }
                    }
                }
            }
        }
    }

    fun FsDoc<Task>.view() {
        exec {
            forward.switchTo {
                ViewTask(loggedIn, this@ViewTaskApi, this)
            }
        }
    }
}