package eventlog

import commonshr.DocWrap
import commonshr.Lib
import commonshr.Private
import commonshr.coll
import commonshr.properties.RxBase

val eventlogLib = Lib("eventlog")

val DocWrap<Private>.eventtypes by coll { EventType() }
val DocWrap<EventType>.occurrences by coll { Occurrence() }

open class EventType: RxBase<EventType>() {

    val name by o.string()
    val ts by o.serverTimestamp()

    companion object: EventType()

}

open class Occurrence: RxBase<Occurrence>() {

    val ts by o.serverTimestamp()

    companion object: Occurrence()

}
