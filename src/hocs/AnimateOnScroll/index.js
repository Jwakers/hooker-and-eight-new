import React, { useRef, useEffect, useState } from "react"
import * as style from "./animate-on-scroll.module.scss"

export default function AnimateOnScroll({
    root = null,
    rootMargin = "-60px 0px",
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
            className={`${style.AnimateOnScroll} ${
                from ? style["AnimateOnScroll___" + from] : ''
            } ${isActive ? style.AnimateOnScroll___visible : ''}`}
            ref={ref}
        >
            {children}
        </div>
    )
}
