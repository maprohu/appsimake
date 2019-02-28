package commonshr

import common.named
import rx.Var

class PropertyItem<T, V>(
    val index: Int,
    val name: String,
    val value: V
)


open class PropertyList<T> {
    val items = mutableListOf<PropertyItem<T, *>>()

    fun <V> delegateProvider(value: V) = named { name ->
        PropertyItem<T, V>(items.size, name, value).apply {
            items += this
        }
    }
}


abstract class PropertiesBase<T> {
    abstract val o : PropertyList<T>
}

typealias RxPropertyItem<T, V> = PropertyItem<T, Var<V>>


open class RxPropertyList<T>: PropertyList<T>() {

    fun <V> prop(initial: V) = delegateProvider(Var(initial))



}

open class RxBase<T>: PropertiesBase<T>() {
    final override val o = RxPropertyList<T>()
}



open class Alfa<T: Alfa<T>>: RxBase<T>() {
    val alfa by o.prop("alfa")

    companion object: Alfa<Nothing>()

}

open class Beta: Alfa<Beta>() {
    val beta by o.prop("beta")

    companion object: Beta()
}

open class Gamma: Alfa<Gamma>() {
    val gamma by o.prop("gamma")
}


class PropertyChooser<T> {
    fun <V> choose(prop: PropertyItem<T, V>) {}
}


fun x() {
    val b = PropertyChooser<>()

    Alfa.alfa
    val x = Beta.alfa

}
