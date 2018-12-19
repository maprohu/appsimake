package express

external interface Request
external interface Response {
    fun send(body: dynamic) : Unit
}