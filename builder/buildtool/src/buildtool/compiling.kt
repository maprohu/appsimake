package buildtool

import org.jetbrains.kotlin.cli.common.messages.CompilerMessageLocation
import org.jetbrains.kotlin.cli.common.messages.CompilerMessageSeverity
import org.jetbrains.kotlin.cli.common.messages.MessageCollector

class SimpleMessageCollector(
    val log: (String) -> Unit = System.out::println,
    val err: (String) -> Unit = System.err::println
) : MessageCollector {
    var hasErrors = false

    override fun clear() {
        hasErrors = false
    }

    override fun hasErrors(): Boolean {
        return hasErrors
    }

    override fun report(
        severity: CompilerMessageSeverity,
        message: String,
        location: CompilerMessageLocation?
    ) {
        if (severity == CompilerMessageSeverity.OUTPUT) return
        if (severity == CompilerMessageSeverity.ERROR) hasErrors = true

        val locmsg = if (location != null) {
            "\n${location.path}:${location.line}:${location.column}: ${location.lineContent}"
        } else ""

        val out = if (severity == CompilerMessageSeverity.ERROR) err else log

        out("$severity $message$locmsg")
    }
}
