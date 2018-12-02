package buildtool.runners

import buildtool.*
import kfun.Try


//lateinit var xsetter : (String) -> Unit
//
//open class Task {
//}
//
//object test {
//
//    val a by TaskRootDelegate<String> { xsetter = it }
//    val b by TaskDelegate { "b-$a" }
//    val c by TaskDelegate { "c-$a" }
//    val d by TaskDelegate { "d-$b-$c" }
//
//}
//
//open class T(fn: () -> String) {
//    val t by TaskDelegate(fn)
//}
//
//object t1 : T({ "tt-${test.d}" })
//
//object t2 : T({ "tt-${t1.t}" })
//
//val res by TaskDelegate {
//    println(t2.t)
//    ""
//}

fun main(args: Array<String>) {

    runTask {
        gymclock.testHtml
    }

//    println( Try { testapp.publicHtml } )
//
//    Changes.waitFor()

//    val pcp = ClassPool()
//    val lcp = ClassPool()
//    val conf = Configuration().apply {
//        programJars = ClassPath().apply {
//            add(
//                ClassPathEntry(
//                    File("local/temp"),
//                    false
//                )
//            )
//            add(
//                ClassPathEntry(
//                    File("local/tempout"),
//                    true
//                )
//            )
//        }
//
//    }
//    val ir = InputReader(conf)
//    ir.execute(pcp, lcp)
//
//    pcp.classesAccept(
//        AllAttributeVisitor(
//            true,
//            LineNumberTableAttributeTrimmer()
//        )
//    )
//
//    val ow = OutputWriter(conf)
//    ow.execute(pcp, MultiValueMap())




//    val d = ::res.also{it.isAccessible=true}.getDelegate() as TaskDelegate<String>

//    val cls = Class.forName("bootkotlin.runners.TestKt")
//    val cls = Class.forName("buildtool.test")
//    cls.declaredFields.forEach { f ->
//        println(f)
//        f.isAccessible = true
//        val v = f.get(null)
//
//        if (v is Array<*> && v.isArrayOf<KProperty<*>>()) {
//            v.forEach { p ->
//                println(p)
//
//                p as KProperty<*>
//
//                println(p.call(cls.kotlin.objectInstance))
//            }
//        }
//
//
//    }


//    res


//    println(::res.javaField)
//
//    xsetter("x")
//
//    res
//
//    Changes.startProcessor()
//
//    xsetter("y")





//    val zz = bla.bla::y.apply { isAccessible = true }.getDelegate() as PersistedTaskDelegate<String>
//    println(zz.propertySource.get())

//    val ref = "public static final java.lang.String bootkotlin.runners.TestKt.getX()"
//    val ref2 = "public final java.lang.String bootkotlin.runners.bla\$bla.getY()"
//
////    Class.forName("bootkotlin.runners.TestKt").getDeclaredMethod("getX").invoke(null)
//
////    println(bla.bla.y)
//
//    val className = "bootkotlin.runners.bla\$bla"
//    val propertyName = "y"
//
//    val cl = Class
//        .forName("bootkotlin.runners.bla\$bla")
////        .enclosingClass
////        .classes
////        .find { it.name == className }!!
//
////    val m = cl.kotlin.memberProperties.find { it.name == propertyName }!!.javaGetter!!
//    val m = cl.getMethod("getY")
//
//    m.invoke(cl.kotlin.objectInstance)




//    val cl = bla::class.nestedClasses.find { it.simpleName == "bla" }!!
//    println(cl)
//    println(cl.objectInstance)
//    val m = cl.memberProperties.find { it.name == "y" }!!
//    m.getter.


//    val i = cl.javaClass.kotlin.objectInstance
//    println(i)
//        .methods.forEach { println(it) }

//        .invoke(
//            cl
//                .javaClass
//                .kotlin
//                .objectInstance
//        )


//    bla.javaClass.kotlin.memberProperties.forEach { println(it) }





//    println(x)

//    kotlinxSerializationRuntime.download()
//    kotlinxHtmlJs.download()


//    val p = Project()
//    p.x.now = "x"
//
//    println()



}

