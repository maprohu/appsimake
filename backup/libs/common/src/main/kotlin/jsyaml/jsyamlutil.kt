package jsyaml

import common.obj

fun JsYamlOptions() = obj<JsYamlOptions>()

enum class Schema {
    FAILSAFE_SCHEMA,
    JSON_SCHEMA,
    CORE_SCHEMA,
    DEFAULT_SAFE_SCHEMA,
    DEFAULT_FULL_SCHEMA
}

var JsYamlOptions.schemaEnum : Schema?
    get() = schema?.let { Schema.valueOf(it) }
    set(v) { schema = v?.toString() }
