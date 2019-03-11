package firebaseshr

//import common.None
//import common.Some
//import common.dyn
//import rx.RxVal


//class BaseValProp<in O, T: BaseRootVal<T>>(
//    name: String,
//    ops: Ops<O, T>,
//    private val wrapper: (dynamic) -> T
//) : ScalarPropBase<O, T>(name, ops) {
//
//    override fun extractInitial(o: dynamic) {
//        val propValueOpt = extractPropValue(o)
//
//        initial.now = propValueOpt.map { pv ->
//            val new = wrapper(o)
//
//            fun initNew(): T {
//                new.props.extractInitial(pv)
//                return new
//            }
//
//            initial.now.map { i ->
//                if (i::class == new::class) {
//                    i.props.extractInitial(pv)
//                    i
//                } else {
//                    initNew()
//                }
//            }.getOrElse {
//                initNew()
//            }
//        }
//    }
//
//    override fun rollback() {
//        super.rollback()
//        current.now.forEach { it.props.rollback() }
//    }
//
//    override fun mergeTo(o: dynamic) {
//        beforeWrite()
//
//        val i = initial.now
//        val c = current.now
//
//        when {
//            i is Some && c is Some -> {
//                o[name] = if (i.value == c.value) {
//                    c.value.props.merge()
//                } else {
//                    val d = dyn()
//                    i.value.props.deleteTo(d)
//                    c.value.props.writeTo(d)
//                    d
//                }
//            }
//            i is Some -> {
//                o[name] = binderOps.delete()
//            }
//            c is Some -> {
//                o[name] = c.value.props.write()
//            }
//            else -> {}
//        }
//    }
//
//
//    override fun calculateDirty(): Boolean {
//        val i = initial()
//        val c = current()
//
//        return when {
//            i is Some && c is Some -> {
//                if (i.value == c.value) {
//                    c.value.props.dirty()
//                } else {
//                    true
//                }
//            }
//            else -> i == c
//        }
//    }
//
//
//    override fun clearDirty() {
//        super.clearDirty()
//        initial.now.forEach { i -> i.props.clearDirty() }
//    }
//
//    override fun calculateIsValid(): Boolean {
//        return super.calculateIsValid() && current().map { c -> c.props.isValid() }.getOrDefault(true)
//    }
//
//}