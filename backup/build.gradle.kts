import buildsrc.CalculateHash
import buildsrc.CalculateHashes
import buildsrc.Role
import buildsrc.role

plugins {
    id("kotlin2js")
}

allprojects {


    repositories {
        mavenCentral()
        jcenter()
    }

}

project("apps") {
    subprojects {
        role = Role.App
    }
}

project("libs") {
    subprojects {
        role = Role.Lib
    }
}

project("exts") {
    subprojects {
        role = Role.Ext
    }
}

configure(subprojects.filter { it.role != Role.None } ) {
    apply(plugin = "kotlin2js")

    if (role != Role.Ext) {
        kotlin.sourceSets {
            getByName("main") {
                kotlin.srcDir("build/generated-sources/main/kotlin")
                kotlin.srcDir("src/main/kotlin")
            }
        }

        tasks.create<CalculateHashes>("hashes")
        tasks.create<CalculateHash>("hash")
    }

}



