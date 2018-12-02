pluginManagement {

    resolutionStrategy {
        eachPlugin {
            if (requested.id.id == "kotlin2js") {
                useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:${requested.version}")
            }
        }
    }

    repositories {
        mavenCentral()
        gradlePluginPortal()
        jcenter()
    }

}

include(
//        "builder",
        "exts:kotlinjs",
        "libs:common",
        "libs:firebase",
//        "apps:testapp",
        "apps:gymclock"
//        "apps:stock"
)