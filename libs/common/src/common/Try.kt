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
            is Failure -> this as Failure<U>
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

    abstract fun get() : T

}

data class Some<out T>(val value: T) : Optional<T>() {
    override fun toString() = "Some($value)"
    override fun get(): T = value
}

object None : Optional<Nothing>() {
    override fun toString() = "None"
    override fun get(): Nothing = throw NoSuchElementException()
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