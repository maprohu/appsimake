package fontawesome

import common.namedLazy
import common.res
import commonshr.InvokeApply
import commonshr.report
import commonshr.reportd
import domx.*
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.GlobalScope
import org.w3c.dom.*
import org.w3c.xhr.XMLHttpRequest
import svgx.svg
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

private val svgDefs by lazy {
    document.body!!.svg {
        style.display = "none"
    }
}

class FaDoc(
    val doc: Document
) {
    val iconCache = mutableMapOf<String, String>()
    fun icon(cssName: String) = iconCache.getOrPut(cssName) {
        document.importNode(
            doc.getElementById(cssName)!!,
            true
        ).unsafeCast<Element>().let { n ->
            n.id = ""
            val id = n.ref
            svgDefs.appendChild(n)
            id
        }
    }
}

object FaDocs {

    private fun load(sprites: String): Deferred<FaDoc> {
        val cd = CompletableDeferred<FaDoc>()
        XMLHttpRequest().apply {
            overrideMimeType("image/svg+xml")
            open("GET", res("$sprites.svg"))
            send()
            onload = {
                try {
                    cd.complete(FaDoc(responseXML!!))
                } catch (e: dynamic) {
                    reportd(e)
                    cd.completeExceptionally(e)
                }
            }
            onerror = {
                report(it)
                cd.completeExceptionally(
                    Throwable(it.toString())
                )
            }
        }
        return cd
    }

    private val byNameInternal = mutableMapOf<String, Deferred<FaDoc>>()
    private fun loader() = namedLazy { name -> load(name).also { byNameInternal[name] = it } }

    val byName : Map<String, Deferred<FaDoc>> = byNameInternal

    val brands by loader()
    val regular by loader()
    val solid by loader()

}


interface FaBase: InvokeApply {
    fun of(cssName: String, cs: CoroutineScope)
}
interface Fa: FaBase
interface FaSolid: Fa
interface FaRegular: Fa
interface FaBrands: FaBase



class FaCssClass(val name: String, val cs: CoroutineScope = GlobalScope) : ReadOnlyProperty<FaBase, String> {
    override fun getValue(thisRef: FaBase, property: KProperty<*>) : String {
        thisRef.of(name, cs)
        return name
    }
}
class FaCssClassProvider(private val cls: String? = null) {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ) = FaCssClass(cls ?: prop.name.toCss())
}
fun facss(cls: String? = null) = FaCssClassProvider(cls)

val Fa.copy by facss()
val Fa.ban by facss()
val Fa.undo by facss()
val Fa.search by facss()
val Fa.filter by facss()
val Fa.pen by facss()
val Fa.plus by facss()
val Fa.minus by facss()
val Fa.plusSquare by facss()
val Fa.chevronLeft by facss()
val Fa.chevronRight by facss()
val Fa.chevronDown by facss()
val Fa.trashAlt by facss()
val Fa.tasks by facss()
val Fa.checkDouble by facss()
val Fa.pooStorm by facss()
val Fa.backspace by facss()
val Fa.save by facss()
val Fa.tags by facss()
val Fa.ellipsisH by facss()
val Fa.list by facss()
val Fa.listOl by facss()
val Fa.comments by facss()
val Fa.comment by facss()
val Fa.commentSlash by facss()
val Fa.eraser by facss()
val Fa.check by facss()
val Fa.clipboardCheck by facss()
val Fa.times by facss()
val Fa.volumeUp by facss()
val Fa.volumeMute by facss()
val Fa.eyeSlash by facss()
val Fa.eye by facss()
val Fa.running by facss()
val Fa.bars by facss()
val Fa.upload by facss()
val Fa.download by facss()
val Fa.file by facss()
val Fa.folder by facss()
val Fa.folderOpen by facss()
val Fa.fileImport by facss()
val Fa.dumpster by facss()
val Fa.database by facss()
val Fa.play by facss()
val Fa.pause by facss()
val Fa.stop by facss()
val Fa.stepForward by facss()
val Fa.stepBackward by facss()
val Fa.backward by facss()
val Fa.forward by facss()
val Fa.exchangeAlt by facss()
val Fa.cloudDownloadAlt by facss()
val Fa.cloudUploadAlt by facss()
val Fa.cloud by facss()
val Fa.thumbsUp by facss()
val Fa.thumbsDown by facss()
val Fa.question by facss()
val Fa.signOutAlt by facss()
val Fa.signInAlt by facss()
val Fa.at by facss()
val Fa.user by facss()
val Fa.syncAlt by facss()
val Fa.redoAlt by facss()
val Fa.tachometerAlt by facss()
val Fa.spinner by facss()
val Fa.info by facss()
val Fa.edit by facss()
val Fa.code by facss()

val FaBrands.google by facss()

