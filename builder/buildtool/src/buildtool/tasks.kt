package buildtool

import bootkotlin.TaskCachesDir
import kfun.Optional
import kfun.Try
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.actor
import java.io.*
import java.lang.RuntimeException
import java.net.URL
import java.security.MessageDigest
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock
import kotlin.reflect.KProperty
import kotlin.reflect.KProperty0
import kotlin.reflect.KProperty1
import kotlin.reflect.jvm.isAccessible
import kotlin.reflect.jvm.javaGetter

//fun extractKotlinJs(): ExtJs {
//    val jarBaseName = "kotlin-stdlib-js"
//    val jarName = "$jarBaseName.jar"
//    val targetDirName = "$jarBaseName-$KotlinVersion"
//
//    return ExtJs(
//        extractJsBin(
//            File(KotlinLibDir).resolve(jarName),
//            "kotlin",
//            File(targetDirName)
//        ).main
//    )
//}

fun File.readObject(): Any? {
    return inputStream().use { fis ->
        ObjectInputStream(fis).use {
            it.readObject()
        }
    }
}

fun File.writeObject(value: Any?) {
    parentFile.mkdirs()
    outputStream().use { fos ->
        ObjectOutputStream(fos).use {
            it.writeObject(value)
        }
    }
}

data class PropertySource(
    val instanceClassName: String?,
    val declaringClassName: String,
    val propertyName: String
) : Serializable {

    override fun toString(): String = "${instanceClassName ?: declaringClassName}.$propertyName"

    private val property
        get() =
            Class.forName(declaringClassName).declaredFields
                .find { it.name == "\$\$delegatedProperties" }!!
                .let { f ->
                    f.isAccessible = true

                    @Suppress("UNCHECKED_CAST")
                    val ps = f.get(null) as Array<KProperty<*>>

                    ps.find { it.name == propertyName }!!.also { it.isAccessible = true }
                }

    private val staticMember
        get() = instanceClassName == null

    private val instance
        get() = Class.forName(instanceClassName).kotlin.objectInstance

    @Suppress("UNCHECKED_CAST")
    val delegate
        get() =
            (if (staticMember) {
                (property as KProperty0<*>).getDelegate()
            } else {
                (property as KProperty1<Any?, *>).getDelegate(instance)
            }) as TaskBaseDelegate<*>

    fun get() : Any? = property.call(instance)

    fun cacheFile(classifier: String) = TaskCachesDir.resolve("$this").resolve("$classifier.dat")

    @Transient
    val upsFile = cacheFile("ups")

    @Transient
    val valFile = cacheFile("val")

    fun loadPersisted() = upsFile.readObject() as TaskDelegate.Persisted

    @Suppress("UNCHECKED_CAST")
    fun <T> loadValue() = valFile.readObject() as Optional<T>

    val classes
        get() = listOf(declaringClassName)
            .let { if (instanceClassName == null) it else it + instanceClassName }
}


internal var currentTaskDelegate : TaskDelegate<*>? = null

class TaskValue<out T>(
    val value: T,
    val token: Any?
)

abstract class TaskBaseDelegate<T>(
    internal val tokenProducer: (T) -> Any?
) {

    private var currentResult0 : Try<TaskValue<T>>? = null

    var currentResult
        get() = currentResult0!!
        set(value) { currentResult0 = value }

    var currentTryValue : Try<T>
        get() = currentResult.map { it.value }
        set(value) { currentResult = value.map { v -> TaskValue(v, tokenProducer(v)) }}

    val currentToken
        get() = currentResult.map { it.token }.toOptional()

    val currentOptionalValue
        get() = currentTryValue.toOptional()

    internal var downs = listOf<TaskDelegate<*>>()

    internal lateinit var propertySource : PropertySource

    private fun connectDown(other: TaskDelegate<*>) {
        this.downs += other
        other.ups += TaskDelegate.Up(this, currentToken)
    }

    private var initialized = false

    open fun init() {}

    open operator fun getValue(thisRef: Any?, property: KProperty<*>) : T {
        if (!initialized) {
            initialized = true

            propertySource =
                    PropertySource(
                        thisRef?.javaClass?.name,
                        property.javaGetter!!.declaringClass.name,
                        property.name
                    )

            init()
        }

        currentTaskDelegate?.let { connectDown(it) }

        return currentResult.get().value
    }

    fun log(msg: String) = println("$propertySource: $msg")
    fun err(msg: String) = System.err.println("$propertySource: $msg")

}




class TaskRootDelegate<T>(
    tokenProducer: (T) -> Serializable = { it as Serializable },
    private val provider: () -> T,
    private val register: (() -> Unit) -> Unit
) : TaskBaseDelegate<T>(tokenProducer) {

    override fun init() {
        super.init()

        currentTryValue = Try { provider() }

        register {
            Changes.changed(this)
        }
    }

    fun applyChange(): Boolean {
        val newValue = Try { provider() }
        if (newValue.toOptional() != currentTryValue.toOptional()) {
            currentTryValue = newValue
            return true
        } else {
            if (newValue.isFailure()) { // means old value was also failure
                currentTryValue = newValue // to keep the latest error
            }
            return false
        }
    }

}

fun <T> serializeDefault(value: T) : Serializable? {
    return when (value) {
        is Serializable -> value
        null -> null
        is Unit -> null
        else -> throw NotSerializableException(value.toString())
    }
}

val Class<*>.classFile: URL
    get() = getResource("${name.drop(name.lastIndexOf('.')+1)}.class")

val ByteArray.sha256
    get() = MessageDigest.getInstance("SHA-256").digest(this)

class TaskDelegate<T>(
    tokenProducer: (T) -> Serializable?,
    private val provider: () -> T
) : TaskBaseDelegate<T>(tokenProducer) {


    private val providerClassToken by lazy {
        val md = MessageDigest.getInstance("SHA-256")

        propertySource.classes.map { Class.forName(it) }
            .plus(provider.javaClass)
            .map { it.classFile.readBytes() }
            .forEach { md.update(it) }

        md.digest()
    }

    constructor(
        provider: () -> T
    ) : this( { serializeDefault(it) }, provider)

    class Up(
        val task: TaskBaseDelegate<*>,
        val token: Optional<Any?>
    )

    internal var ups = listOf<Up>()

    class PersistedUp(
        val propertySource: PropertySource,
        val token: Optional<Any?>
    ) : Serializable

    class Persisted(
        val ups : List<PersistedUp>,
        val providerClassToken: ByteArray
    ) : Serializable


    override fun init() {
        super.init()

        try {
            log("loading state from disk")

            val persisted = propertySource.loadPersisted()

            if (!providerClassToken.contentEquals(persisted.providerClassToken)) {
                log("implementation changed")
                recalc()
            } else {

                val inputChanged =
                    asCurrent {
                        persisted.ups.find { p ->
                            val ps = p.propertySource
                            Try { ps.get() }

                            ps.delegate.currentToken != p.token
                        }.also {
                            if (it!=null) {
                                log("input changed: ${it.propertySource}")
                            }
                        } != null
                    }

                if (inputChanged) {
                    recalc()
                } else {
                    log("inputs unchanged, loading value from disk")
                    currentTryValue = Try { propertySource.loadValue<T>().get() }
                }

            }


        } catch (e: Exception) {
            when (e) {
                is FileNotFoundException -> log("state file not found")
                is InvalidClassException -> log("state file format changed")
                else -> {
                    log("exception while loading state: ${e.message}")
                    e.printStackTrace()
                }
            }

            recalc()
        }
    }

    private fun <T> asCurrent(fn: () -> T) : T {
        ups.forEach { up -> up.task.downs -= this }
        ups = listOf()

        val savedCurrent = currentTaskDelegate
        currentTaskDelegate = this

        try {
            return fn()
        } finally {
            currentTaskDelegate = savedCurrent
        }
    }

    internal fun recalc() {
        log("recalc")

        asCurrent {
            currentTryValue = Try { provider() }
        }

        propertySource.upsFile.writeObject(
            Persisted(
                ups.map { up ->
                    PersistedUp(
                        up.task.propertySource,
                        up.token
                    )
                },
                providerClassToken
            )
        )

        propertySource.valFile.writeObject(currentTryValue.toOptional())

        currentTryValue.fold(
            { e -> err("FAILED: $e") },
            { log("DONE") }
        )

    }




}

sealed class ChangeMsg
class ChangedRoot(val root: TaskRootDelegate<*>) : ChangeMsg()
object Fire: ChangeMsg()

val Changes = ChangeHandler()

class ChangeHandler(
    private val cs: CoroutineScope = GlobalScope
) {
    private val channel = Channel<ChangeMsg>()

    private val act = cs.launch {
        var scheduled = false
        var changes = setOf<TaskRootDelegate<*>>()

        for (msg in channel) {
            when (msg) {
                is ChangedRoot -> {
                    changes += msg.root
                    if (!scheduled) {
                        scheduled = true
                        launch {
                            delay(200)
                            channel.send(Fire)
                        }
                    }
                }
                Fire -> {
                    scheduled = false
                    processChanges(changes)
                    changes = setOf()
                }

            }

        }
    }




    fun changed(root: TaskRootDelegate<*>) {
        cs.launch {
            channel.send(ChangedRoot(root))
        }
    }

    fun waitFor() {
        runBlocking {
            act.join()
        }
    }


}

private enum class ChangeState {
    Unknown,
    Unchanged,
    Changed
}

class TaskFailedException : RuntimeException {
    constructor() : super()
    constructor(message: String?) : super(message)
    constructor(message: String?, cause: Throwable?) : super(message, cause)
    constructor(cause: Throwable?) : super(cause)
    constructor(message: String?, cause: Throwable?, enableSuppression: Boolean, writableStackTrace: Boolean) : super(
        message,
        cause,
        enableSuppression,
        writableStackTrace
    )
}

fun processChanges(changes: Set<TaskRootDelegate<*>>) {
    val actualChanges = changes.filter { it.applyChange() }

    var states : Map<TaskBaseDelegate<*>, ChangeState> =
        actualChanges.map { it to ChangeState.Changed }.toMap()


    fun addDownsUnknown(node: TaskBaseDelegate<*>) {
        node.downs.forEach {
            if (it !in states) {
                states += it to ChangeState.Unknown
                addDownsUnknown(it)
            }
        }
    }
    actualChanges.forEach { addDownsUnknown(it) }

    fun calculateState(node: TaskBaseDelegate<*>): ChangeState {
        val atStart = states.getOrDefault(node, ChangeState.Unchanged)
        if (atStart != ChangeState.Unknown) {
            return atStart
        } else {
            node as TaskDelegate<*>

            val upChanged = node.ups.fold(false) { z, up ->
                val upState = calculateState(up.task)

                z || upState == ChangeState.Changed
            }

            val newState = if (upChanged) {
                val oldValue = node.currentOptionalValue
                node.recalc()
                if (oldValue == node.currentOptionalValue) {
                    ChangeState.Unchanged
                } else {
                    ChangeState.Changed
                }
            } else {
                ChangeState.Unchanged
            }

            states += node to newState
            return newState
        }
    }

    fun calculateDowns(node: TaskBaseDelegate<*>) {
        node.downs.forEach {
            calculateState(it)
            calculateDowns(it)
        }
    }

    try {
        actualChanges.forEach { calculateDowns(it) }
    } catch (e: TaskFailedException) {
        System.err.println("build failed: ${e.message}")
    }


}


fun <T> constant(value: T) = TaskRootDelegate(
    provider = { value },
    register = {}
)


