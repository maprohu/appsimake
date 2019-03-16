package commonui.links

import commonui.HashStruct

interface PageLinkBase
interface Page
interface PageLink<B: PageLinkBase, D, P: Page> {
    suspend fun get(hash: HashStruct): P?
    suspend fun g
}


