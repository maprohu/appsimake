package commonui.widget

import bootstrap.*
import common.Listeners
import common.listen
import commonshr.*
import domx.*
import commonshr.KillsApi
import commonshr.properties.EnumProp
import killable.NoKill
import rx.HasVar
import rx.Var
import rx.forEach
import rx.rxClass
import styles.widthAuto
import kotlin.browser.document

class Select: AbstractInput() {
    override val node = document.select {
        cls {
            customSelect
            widthAuto
        }
    }

    override var nodeValue
        get() = node.value
        set(v) { node.value = v }

    val required by lazy {
        node.required = true
    }

    val option get() = node.option


}

fun <E: Enum<E>> Select.bind(
    deps: HasKills,
    prop: EnumProp<*, E>
) {
    prop.values.forEach { e -> // TODO rx value list?
        option {
            value = e.name
            this %= e.name // TODO proper label?
        }
    }
    bindValue(deps, prop.nameVar)
}
