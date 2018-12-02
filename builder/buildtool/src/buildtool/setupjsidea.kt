package buildtool

import bootjava.BootJava
import bootkotlin.KotlinLibDir
import java.io.File



fun main(args: Array<String>) {

    File(".idea/libraries/KotlinJavaScript.xml").writeText(
        """
            <component name="libraryTable">
              <library name="KotlinJavaScript" type="kotlin.js">
                <CLASSES>
                  <root url="jar://${'$'}PROJECT_DIR${'$'}/$KotlinLibDir/kotlin-stdlib-js.jar!/" />
                </CLASSES>
                <JAVADOC />
                <SOURCES>
                  <root url="jar://${'$'}PROJECT_DIR${'$'}/$KotlinLibDir/kotlin-stdlib-js-sources.jar!/" />
                </SOURCES>
              </library>
            </component>
        """.trimIndent()
    )

}