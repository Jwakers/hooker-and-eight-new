import React, { useRef, useEffect, useState } from "react"
import * as style from "./on-scroll.module.scss"

export default function AnimateOnScroll({
    root = null,
    rootMargin = "-80px 0px",
    threshold = [0],
    children,
}) {
    const ref = useRef(null)
    const [entry, setEntry] = useState({})
    const [modifier, setModifier] = useState(null)
    const options = { root, rootMargin, threshold }

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options)
    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
            if (entry.isIntersecting) {
                setModifier(style.OnScroll___visible)
            } else {
                setModifier(null)
            }
        }
    }, [entry.isIntersecting])


    return (
        <div className={`${style.OnScroll} ${modifier && modifier}`} ref={ref}>
            {children}
        </div>
    )
}
