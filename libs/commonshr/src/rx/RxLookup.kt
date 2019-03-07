package rx

import commonshr.HasKills
import commonshr.KillsApi
import commonshr.Trigger
import killable.KillSet
import killable.KillableSeq
import killable.killables
import killable.seq

interface RxLookup<K, V> {

    fun get(key: K): RxIface<V>

}

open class RxLookupKills<K, V>(
    deps: HasKills,
    private val factory: HasKills.(K) -> V
): RxLookup<K, V> {
    private val ks = deps.kills.killables()

    private inner class Holder(
        val kseq: KillableSeq,
        val rxv: Var<V>
    ): RxIface<V> by rxv  {
        fun set(value: HasKills.() -> V) {
            rxv %= kseq.killables().value()
        }
    }

    private val map = mutableMapOf<K, Holder>()

    private fun getInternal(key: K) = map.getOrPut(key) {
        ks.seq().let { kseq ->
            Holder(
                kseq,
                Var(kseq.killables().factory(key))
            )
        }
    }
    override fun get(key: K): RxIface<V> = getInternal(key)

    fun put(key: K, value: HasKills.() -> V) = getInternal(key).set(value)

    fun remove(key: K): RxIface<V>? = map.remove(key)?.apply { kseq.kill() }


}

open class SimpleRxLookup<K, V>(
    val factory: (K) -> V
): RxLookup<K, V> {

    private val map = mutableMapOf<K, Var<V>>()

    private fun getInternal(key: K) = map.getOrPut(key) {
        Var(factory(key))
    }
    override fun get(key: K): RxIface<V> = getInternal(key)

    fun put(key: K, value: V) {
        getInternal(key) %= value
    }

    fun remove(key: K): RxIface<V>? = map.remove(key)

}
