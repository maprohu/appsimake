package buildserver

import java.net.URL

fun main(args: Array<String>) {
    "git add -A .".runCommand()
    "git commit -m deploy".runCommand()
    "git push".runCommand()
    println(URL("https://pullanapp-maprohu.c9users.io/build").readText())
}