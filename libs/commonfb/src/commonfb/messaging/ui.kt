package commonfb.messaging

import bootstrap.*
import fontawesome.*
import commonfb.*
import commonshr.*
import commonui.*
import commonui.widget.*
import domx.*
import org.w3c.dom.Node
import rx.*
import kotlin.browser.document

fun DropdownMenu.messagingMenu(deps: HasKillsMessagingUix) {
    with(deps) {
        item {
            visible(deps) {
                messaging.canEnable()
            }
            text %= "Enable Notifications"
            icon.fa.comment
            click(deps) {
                messaging.enableNotifications()
            }
        }
        item {
            visible(deps) {
                messaging.canDisable()
            }
            text %= "Disable Notifications"
            icon.fa.commentSlash
            click(deps) {
                messaging.disableNotifications()
            }
        }
        item {
            visible(deps) {
                messaging.hasEnabledTokens()
            }
            text %= "Disable Notifications on All Devices"
            icon.fa.ban
            click(deps) {
                messaging.disableAllNotifications()
            }
        }
    }
}

fun Node.messagingButton(deps: HasKillsMessagingUix) = with (deps) {

    widget.rx(deps) {
        fun unsupported() =
            document.div {
                cls {
                    m1
                    textMuted
                    textJustify
                }
                this %= "Notifications are not supported by your browser."
            }

        if (!messaging.fcmSupported) {
            unsupported()
        } else {
            notificationState().let { ns ->
                when (ns) {
                    NotificationState.Unsupported -> {
                        unsupported()
                    }
                    NotificationState.Denied -> {
                        document.div {
                            cls {
                                m1
                                textMuted
                                textJustify
                            }
                            this %= "Notifications have been disabled by the user."
                        }
                    }
                    else -> {
                        messaging.notificationsEnabled().let { enabled ->
                            if (enabled) {
                                factory.button {
                                    m1p2
                                    secondary
                                    text %= "Notifications Enabled"
                                    icon.fa.comment
                                    iconAndText
                                    click(deps) {
                                        messaging.disableNotifications()
                                    }
                                }.node
                            } else {
                                factory.button {
                                    m1p2
                                    secondary
                                    text %= "Notifications Disabled"
                                    icon.fa.commentSlash
                                    iconAndText
                                    click(deps) {
                                        messaging.enableNotifications()
                                    }
                                }.node
                            }
                        }
                    }
                }
            }
        }
    }

}

