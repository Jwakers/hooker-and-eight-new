import React, { useEffect } from "react"
import "./_base.scss"
import Header from "../Header"

export default function Layout({ children }) {
    useEffect(() => {
        const body = document.body
        body.addEventListener("mousedown", () => {
            body.classList.add("using-mouse")
        })
        body.addEventListener("keydown", event => {
            if (event.keyCode === 9) {
                body.classList.remove("using-mouse")
            }
        })
    })
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}
