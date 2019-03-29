package gymclock

import commonshr.*
import commonui.*
import commonui.links.LinksDeps
import commonui.links.LinksFactory
import commonui.links.StringHasher
import commonui.view.*
import commonui.widget.Body
import gymclock.clock.Clock
import gymclock.form.Form

interface LinksPath {
    val links: Links
}
class Links(
    deps: LinksDeps
): LinksFactory(deps.homeName), LinksPath {
    override val links = this

    override val home = root { lnk ->
        Form(
            deps.body,
            lnk,
            this
        ).also {
            deps.body.hole %= it
        }
    }

    val clock by home.child { form, lnk ->
        Clock(
            form,
            lnk,
            form.sounds(),
            keepAwake()
        ).forwarding(form)
    }


}
