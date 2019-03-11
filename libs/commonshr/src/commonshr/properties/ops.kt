package commonshr.properties

interface DynamicOps {

    fun writeTimestamp(ts: TS): dynamic
    fun readTimestamp(d: dynamic): TS

}

object NoDynamicOps: DynamicOps {
    override fun writeTimestamp(ts: TS): dynamic {
        TODO("not implemented")
    }

    override fun readTimestamp(d: dynamic): TS {
        TODO("not implemented")
    }
}