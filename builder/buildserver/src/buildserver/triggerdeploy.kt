package buildserver

fun run(path: String = "build") {
    "git add -A .".runCommand()
    "git commit -m deploy".runCommand()
    "git push".runCommand()
    arrayOf(
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        "https://pullanapp-maprohu.c9users.io/$path"
    ).startProcess()
}

fun main() {
    run()
}