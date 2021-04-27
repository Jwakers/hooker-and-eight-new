import React, { useRef, useEffect, useState } from "react"
import * as style from "./on-scroll.module.scss"

export default function AnimateOnScroll({
    root = null,
    rootMargin = "-100px 0px",
    threshold = [0],
    children,
    animateOut = true,
    from = null,
}) {
    const ref = useRef(null)
    const [entry, setEntry] = useState({})
    const [isActive, setIsActive] = useState(null)

    const options = { root, rootMargin, threshold }
    if (typeof window !== `undefined`) {
        var observer = new window.IntersectionObserver(
            ([entry]) => setEntry(entry),
            options
        )
    }
    useEffect(() => {
        if (ref.current) observer.observe(ref.current)
    }, [ref])

    useEffect(() => {
        if (entry) {
            if (entry.isIntersecting) {
                setIsActive(true)
            } else if (animateOut) {
                setIsActive(null)
            }
        }
    }, [entry.isIntersecting])

    return (
        <div
            className={`${style.OnScroll} ${
                from && style["OnScroll___" + from]
            } ${isActive && style.OnScroll___visible}`}
            ref={ref}
        >
            {children}
        </div>
    )
}
