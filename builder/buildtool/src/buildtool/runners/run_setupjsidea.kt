package buildtool.runners

import bootkotlin.KotlinLibDir
import buildtool.*
import java.io.File
import java.nio.file.Files
import java.nio.file.Paths
import kotlin.streams.toList


fun main(args: Array<String>) {

    val modules = listOf(
        commonshr,
        common,
        domx,
        bootstrap,
        firebasektjs,
        firebase,
        fontawesome,
        commonui,
        commonfb,
        functions,
        firebaseMessagingSw,

        commonlib,
        testapplib,
        testappfns,
        tictactoelib,
        tictactoefns,
        mainfns,

        index,
        testapp,
        gymclock,
        tasks,
        tictactoe,
        chat
    )

    fun createLibrary(
        libraryName: String,
        jarPathWithoutExtention: String
    ): String {
        val fileName = libraryName.replace("[-.]".toRegex(), "_")
        val target = File(".idea/libraries/$fileName.xml")
        if (!target.exists()) {
            target.writeText(
                """
                    <component name="libraryTable">
                      <library name="$libraryName" type="kotlin.js">
                        <CLASSES>
                          <root url="jar://${'$'}PROJECT_DIR${'$'}/$jarPathWithoutExtention.jar!/" />
                        </CLASSES>
                        <JAVADOC />
                        <SOURCES>
                          <root url="jar://${'$'}PROJECT_DIR${'$'}/$jarPathWithoutExtention-sources.jar!/" />
                        </SOURCES>
                      </library>
                    </component>
                """.trimIndent()
            )
        }

        return libraryName
    }

    val kotlinStdlib = createLibrary(
        libraryName = "kotlin-stdlib",
        jarPathWithoutExtention = "$KotlinLibDir/kotlin-stdlib-js"
    )

    fun JsDep.depEntryAttrs(): Iterable<String> {
        return when (this) {
            is JsModule -> listOf( "type=\"module\" module-name=\"$simpleName\"" )
            is KotlinJsLib -> listOf( "type=\"library\" name=\"$name\" level=\"project\"" )
            else -> listOf()
        }
    }

    fun createModuleIML(
        deps: List<JsDep>
    ): String {
        return """
            <?xml version="1.0" encoding="UTF-8"?>
            <module type="JAVA_MODULE" version="4">
              <component name="NewModuleRootManager" inherit-compiler-output="true">
                <exclude-output />
                <content url="file://${'$'}MODULE_DIR${'$'}">
                  <sourceFolder url="file://${'$'}MODULE_DIR${'$'}/src" type="kotlin-source" />
                </content>
                <orderEntry type="jdk" jdkName="Kotlin SDK" jdkType="KotlinSDK" />
                <orderEntry type="sourceFolder" forTests="false" />
                <orderEntry exported="" type="library" name="$kotlinStdlib" level="project" />
${
    deps.flatMap { it.depEntryAttrs() }.map { attrs ->
        "                <orderEntry exported=\"\" $attrs/>"
    }.joinToString("\n")
}
              </component>
            </module>
        """.trimIndent()
    }




    modules
        .asSequence()
        .flatMap { m -> m.depChainOf { d -> d is KotlinJsDep } }
        .filterIsInstance<KotlinJsDep>()
        .distinct()
        .forEach { m ->
            when (m) {
                is JsModule -> {
                    val iml = m.moduleRoot.resolve("${m.simpleName}.iml")
                    iml.writeText(
                        createModuleIML(m.deps)
                    )
                }
                is KotlinJsLib -> {
                    val f = m.downloaded.file
                    createLibrary(
                        m.name,
                        f.parentFile.resolve(f.nameWithoutExtension).invariantSeparatorsPath
                    )
                }
            }

        }

    val imls = Files
        .walk(Paths.get(""))
        .map { it.toFile() }
        .filter { it.extension == "iml"}
        .map { it.invariantSeparatorsPath }
        .toList()

    File(".idea/modules.xml").writeText(
        """
            <?xml version="1.0" encoding="UTF-8"?>
            <project version="4">
              <component name="ProjectModuleManager">
                <modules>
${ imls.map { "                  <module fileurl=\"file://${'$'}PROJECT_DIR${'$'}/$it\" filepath=\"${'$'}PROJECT_DIR${'$'}/$it\" />" }.joinToString("\n") }
                </modules>
              </component>
            </project>
        """.trimIndent()
    )


}