package firebaseshr

import rx.RxVal


class BaseValProp<N, P, O: HasProps<O, N, P>>: Prop<O> {
    val value
    override fun extractInitial(o: dynamic) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun resetInitial() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun rollback() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun writeTo(o: dynamic) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun mergeTo(o: dynamic) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override val dirty: RxVal<Boolean>
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.

    override fun clearDirty() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override val name: String
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.
    override val validationErrors: RxVal<Set<ValidationError>>
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.
    override val isValid: RxVal<Boolean>
        get() = TODO("not implemented") //To change initializer of created properties use File | Settings | File Templates.
}