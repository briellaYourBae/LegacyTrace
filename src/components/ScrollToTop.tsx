import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        // CSS sets html { overflow: hidden } and body { overflow-y: scroll }
        // so body is the actual scroll container, not window.
        // Temporarily disable smooth scroll so reset is instant.
        const prev = document.body.style.scrollBehavior
        document.body.style.scrollBehavior = 'auto'

        window.scrollTo(0, 0)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        // Restore after a tick
        requestAnimationFrame(() => {
            document.body.style.scrollBehavior = prev
        })
    }, [pathname])

    return null
}
