package builder

object Apps {
    val apps = mutableListOf<App>()
}

class App(
        val name: String
) {
    init {
        Apps.apps += this
    }

}