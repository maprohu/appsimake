package buildserver

fun main(args: Array<String>) {
    "git add -A .".runCommand()
    "git commit -m deploy".runCommand()
    "git push".runCommand()
    arrayOf(
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        "https://pullanapp-maprohu.c9users.io/build"
    ).startProcess()
}