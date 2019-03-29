package index.about

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import commonui.widget.TopAndContent
import commonui.widget.factory
import kotlin.browser.document

fun About.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        title %= "About"
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p2
            h3 {
                this %= "Dear Visitor!"
            }

            p {
                cls.textJustify
                this += """
                    Welcome to my collection of mobile web apps. Here you will
                    find a (currently) small collection of apps that I am developing
                    in my free time. Feel free to use them as you wish. They are completely
                    free and the source code for all of these apps is available on
                """

                a {
                    href = "https://github.com/maprohu/appsimake"
                    this %= "GitHub"
                }

                this += """.
                    Please reference the GitHub repository or the apps themselves
                    if you decide to use any part of the code base.
                """

            }

            p {
                cls.textJustify
                this += """
                    Be warned that this effort is a work in progress, in its very early phase.
                    Most of the source code and the user interface is undocumented,
                    under continuous development,
                    with the possibility of breaking without warning.
                    Also note that the apps are mostly tested on Android, Windows, Google Chrome and Firefox.
                    Testing on Apple devices is limited simply because I don't own any (donations welcome).
                    I would be happy
                    for any feedback about the apps, suggestions, ideas for improvements
                    or even completely new projects. For the time being please use the
                """

                a {
                    href = "https://github.com/maprohu/appsimake/issues"
                    this %= "issue tracker on GitHub"
                }

                this += """
                    for this purpose.
                """
            }

            p {
                cls.textJustify
                this += """
                    Even though the apps are for free, there is a certain cost associated
                    with hosting such apps on the internet. This cost is more or less
                    proportional to the
                    number of regular users that are accessing the apps. As of now this is
                    insignificant, however I cannot yet foresee how that will
                    change in the future. In any case I would like to keep the apps available
                    for free as long as I can, and figure out how to support it financially
                    once (if ever) it gets to that point.
                """
            }


            insert.card {
                header {
                    this %= "References"
                }
                listGroup {
                    references.sortedBy { it.title.toLowerCase() }.forEach { ref ->
                        item {
                            document.a {
                                cls {
                                    listGroupItemAction
                                }
                                this %= ref.title
                                href = ref.url
                            }.applied
                        }
                    }
                }
            }
        }
    }.node

)

private class Reference(
    val title: String,
    val url: String
)

private val ref = ::Reference

private val references = listOf(
    ref(
        "Bootstrap",
        "https://getbootstrap.com/"
    ),
    ref(
        "Kotlin Programming Language",
        "https://kotlinlang.org/"
    ),
    ref(
        "web-animations",
        "https://github.com/web-animations/web-animations-js"
    ),
    ref(
        "jQuery",
        "https://jquery.com/"
    ),
    ref(
        "Firebase",
        "https://firebase.google.com/"
    ),
    ref(
        "Font Awesome",
        "https://fontawesome.com/"
    ),
    ref(
        "Cloud9",
        "https://c9.io/"
    ),
    ref(
        "GitHub",
        "https://github.com/"
    ),
    ref(
        "FA2PNG",
        "http://fa2png.io/"
    ),
    ref(
        "Progressive Web Apps",
        "https://developers.google.com/web/progressive-web-apps/"
    ),
    ref(
        "IntelliJ IDEA",
        "https://www.jetbrains.com/idea/"
    )
)
