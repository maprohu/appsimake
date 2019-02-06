package common

// https://github.com/bijukunjummen/kfun/blob/master/src/main/kotlin/io/kfun/Try.kt
sealed class Try<out T> {

    companion object {
        suspend operator fun <T> invoke(body: suspend () -> T): Try<T> {
            return try {
                Success(body())
            } catch (e: Exception) {
                Failure(e)
            }
        }
    }

    abstract fun isSuccess(): Boolean

    abstract fun isFailure(): Boolean

    suspend fun <U> map(f: suspend (T) -> U): Try<U> {
        @Suppress("UNCHECKED_CAST")
        return when (this) {
            is Success -> Try {
                f(this.value)
            }

            is Failure -> this as Failure<U>
        }
    }

    fun <U> flatMap(f: (T) -> Try<U>): Try<U> {
        return when (this) {
            is Success -> f(this.value)
            is Failure -> this.unsafeCast<Failure<U>>()
        }
    }

    abstract fun get(): T

    abstract fun getOrElse(default: @UnsafeVariance T): T

    abstract fun orElse(default: Try<@UnsafeVariance T>): Try<T>

    abstract fun <U> fold(fa: (Throwable) -> U, fb: (T) -> U): U

    abstract fun toOptional() : Optional<T>
}

data class Success<out T>(val value: T) : Try<T>() {
    override fun toOptional(): Optional<T> = Some(value)

    override fun isSuccess(): Boolean = true
    override fun isFailure(): Boolean = false
    override fun getOrElse(default: @UnsafeVariance T): T = value
    override fun get() = value
    override fun orElse(default: Try<@UnsafeVariance T>): Try<T> = this
    override fun <U> fold(fa: (Throwable) -> U, fb: (T) -> U): U = try {
        fb(value)
    } catch (e: Exception) {
        fa(e)
    }
}

data class Failure<out T>(val e: Throwable) : Try<T>() {
    override fun toOptional(): Optional<T> = None
    override fun isSuccess(): Boolean = false
    override fun isFailure(): Boolean = true
    override fun getOrElse(default: @UnsafeVariance T): T = default
    override fun get(): T = throw e
    override fun orElse(default: Try<@UnsafeVariance T>): Try<T> = default
    override fun <U> fold(fa: (Throwable) -> U, fb: (T) -> U): U = fa(e)
}

// https://github.com/gojuno/koptional/blob/master/koptional/src/main/kotlin/com/gojuno/koptional/Optional.kt
sealed class Optional<out T> {

    companion object {

        /**
         * Wraps an instance of T (or null) into an [Optional]:
         *
         * ```java
         * String a = "str";
         * String b = null;
         *
         * Optional<String> optionalA = Optional.toOptional(a); // Some("str")
         * Optional<String> optionalB = Optional.toOptional(b); // None
         * ```
         *
         * This is the preferred method of obtaining an instance of [Optional] in Java. In Kotlin,
         * prefer using the [toOptional][com.gojuno.koptional.toOptional] extension function.
         */
        fun <T : Any> toOptional(value: T?): Optional<T> = if (value == null) None else Some(value)
    }

    abstract fun isEmpty(): Boolean
    abstract fun get() : T
    abstract fun <U> map(fn: (T) -> U) : Optional<U>
    abstract fun <U> flatMap(fn: (T) -> Optional<U>) : Optional<U>
    abstract fun orElse(default: () -> Optional<@UnsafeVariance T>): Optional<T>
    abstract fun any(fn: (T) -> Boolean) : Boolean
    abstract fun forEach(fn: (T) -> Unit) : Unit
    abstract fun getOrElse(default: () -> @UnsafeVariance T) : T
    abstract fun getOrDefault(default: @UnsafeVariance T) : T
}

fun <T: Any> Optional<T>.getOrNull(): T? = when (this) {
    None -> null
    is Some -> this.value
}

data class Some<out T>(val value: T) : Optional<T>() {
    override fun isEmpty(): Boolean = false
    override fun toString() = "Some($value)"
    override fun get(): T = value
    override fun orElse(default: () -> Optional<@UnsafeVariance T>) = this
    override fun <U> map(fn: (T) -> U): Optional<U> = Some(fn(value))
    override fun any(fn: (T) -> Boolean) = fn(value)
    override fun forEach(fn: (T) -> Unit) { fn(value) }
    override fun getOrElse(default: () -> @UnsafeVariance T): T = value
    override fun getOrDefault(default: @UnsafeVariance T): T = value
    override fun <U> flatMap(fn: (T) -> Optional<U>): Optional<U> = fn(value)
}

object None : Optional<Nothing>() {
    override fun isEmpty(): Boolean = true
    override fun toString() = "None"
    override fun get(): Nothing = throw NoSuchElementException()
    override fun orElse(default: () -> Optional<Nothing>) = default()
    override fun <U> map(fn: (Nothing) -> U): Optional<U> = None
    override fun any(fn: (Nothing) -> Boolean) = false
    override fun forEach(fn: (Nothing) -> Unit) {}
    override fun getOrElse(default: () -> Nothing): Nothing = default()
    override fun getOrDefault(default: Nothing): Nothing = default
    override fun <U> flatMap(fn: (Nothing) -> Optional<U>): Optional<U> = None
}

/**
 * Wraps an instance of T (or null) into an [Optional]:
 *
 * ```kotlin
 * val a: String? = "str"
 * val b: String? = null
 *
 * val optionalA = a.toOptional() // Some("str")
 * val optionalB = b.toOptional() // None
 * ```
 *
 * This is the preferred method of obtaining an instance of [Optional] in Kotlin. In Java, prefer
 * using the static [Optional.toOptional] method.
 */
fun <T : Any> T?.toOptional(): Optional<T> = if (this == null) None else Some(this)

fun Optional<String>.orEmpty() = getOrDefault("")
operator fun <T> Optional<Set<T>>.plus(item: T) = map { it + item }.orElse { Some(setOf(item)) }
fun <T> Optional<Set<T>>.orEmpty() = getOrDefault(emptySet())
fun <T> Optional<Collection<T>>.orEmpty() = getOrDefault(emptyList())

sealed class Either<out A, out B> {
    class Left<A>(val value: A): Either<A, Nothing>()
    class Right<B>(val value: B): Either<Nothing, B>()
}
