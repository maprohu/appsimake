@file:JsQualifier("firebase.storage")
package firebase.storage

import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.js.Promise

// https://firebase.google.com/docs/reference/js/firebase.storage.Storage
external interface Storage {

    // https://firebase.google.com/docs/reference/js/firebase.storage.Storage#ref
    fun ref(path: String): Reference


}

// https://firebase.google.com/docs/reference/js/firebase.storage.Reference
external interface Reference {

    val parent: Reference?
    val root: Reference

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#fullPath
    val fullPath: String

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#name
    val name: String

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#bucket
    val bucket: String

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#child
    fun child(path: String): Reference


    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#getMetadata
    fun getMetadata(): Promise<FullMetadata>

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#put
    fun put(data: Blob, metadata: UploadMetadata = definedExternally): UploadTask
    fun put(data: File, metadata: UploadMetadata = definedExternally): UploadTask
    fun put(data: Uint8Array, metadata: UploadMetadata = definedExternally): UploadTask
    fun put(data: ArrayBuffer, metadata: UploadMetadata = definedExternally): UploadTask


    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#putString
    fun putString(data: String, format: StringFormat = definedExternally, metadata: UploadMetadata = definedExternally): UploadTask

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#getDownloadURL
    fun getDownloadURL(): Promise<String>

    // https://firebase.google.com/docs/reference/js/firebase.storage.Reference#delete
    fun delete(): Promise<Unit>

}

// https://firebase.google.com/docs/reference/js/firebase.storage.UploadMetadata
external interface UploadMetadata

// https://firebase.google.com/docs/reference/js/firebase.storage#.StringFormat

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface StringFormat {
    companion object
}

// https://firebase.google.com/docs/reference/js/firebase.storage.UploadTask
external class UploadTask: Promise<UploadTaskSnapshot> {

    // https://firebase.google.com/docs/reference/js/firebase.storage.UploadTask#cancel
    fun cancel(): Boolean

}

// https://firebase.google.com/docs/reference/js/firebase.storage.UploadTaskSnapshot
external interface UploadTaskSnapshot

// https://firebase.google.com/docs/reference/js/firebase.storage.FullMetadata
external interface FullMetadata {
    val size: Number
}
