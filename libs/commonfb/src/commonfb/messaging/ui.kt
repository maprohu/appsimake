package commonfb.messaging

import bootstrap.*
import commonfb.*
import commonshr.*
import commonui.*
import commonui.widget.*
import domx.*
import org.w3c.dom.Node
import rx.*
import kotlin.browser.document

fun DropdownMenu.messagingMenu(deps: HasMessaging) {

}

fun Node.messagingButton(deps: HasMessaging) {


    widget %= rx {
        notificationState().let { ns ->
            when (ns) {
                NotificationState.Unsupported -> {
                    document.div {
                        cls {
                            m1
                            textMuted
                            textJustify
                        }
                        this %= "Notifications are not supported by your browser."
                    }
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
                    loggedIn.notificationsEnabled().let { enabled ->
                        if (enabled) {
                            factory.buttonGroup {
                                m1
                                button {
                                    p2
                                    secondary
                                    text %= "Notifications Enabled"
                                    icon.fa.comment
                                    iconAndText
                                    click {
                                        loggedIn.disableNotifications()
                                    }
                                }
                                dropdownSplit {
                                    secondary
                                    menu {
                                        right
                                        item {
                                            text %= "Disable on All Devices"
                                            click {
                                                loggedIn.disableAllNotifications()
                                            }
                                        }
                                    }
                                }
                            }.node
                        } else {
                            factory.button {
                                m1p2
                                secondary
                                text %= "Notifications Disabled"
                                icon.fa.commentSlash
                                iconAndText
                                click {
                                    loggedIn.enableNotifications()
                                }
                            }.node
                        }
                    }
                }
            }
        }
    }

}

