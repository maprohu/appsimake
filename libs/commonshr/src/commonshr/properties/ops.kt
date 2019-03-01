package commonshr.properties

interface DynamicOps {

    fun writeTimestamp(ts: TS): dynamic
    fun readTimestamp(d: dynamic): TS

}