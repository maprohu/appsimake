pluginManagement {
    resolutionStrategy {
        eachPlugin {
            if (requested.id.id == "kotlin2js") {
                useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:${requested.version}")
            }
        }
    }
}

include(
        "builder",
        "libs/common",
        "libs/firebase",
        "apps/testapp",
        "apps/gymclock",
        "apps/stock"
)