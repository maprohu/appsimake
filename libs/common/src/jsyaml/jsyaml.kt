// https://github.com/nodeca/js-yaml
@file:JsQualifier("jsyaml")
package jsyaml

external interface JsYamlOptions {
    var filename: String?
    var onWarning: ((YAMLException) -> Unit)?
    var schema: String?
    var json: Boolean?
}

external fun safeLoad(
        doc: String,
        options: JsYamlOptions = definedExternally
) : Any

external interface Mark {
    val name: String
    val buffer: String
    val column: Int
    val line: Int
    val position: Int

}

external class YAMLException : Throwable {
    val reason : String
    val mark: Mark
}