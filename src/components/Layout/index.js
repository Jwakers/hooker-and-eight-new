import React, { useEffect } from "react"
import "./_base.scss"
import "../../styles/_utility.scss"
import Header from "../Header"
import Footer from "../Footer"

export default function Layout({ children, path }) {
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
    const headerOverlay = path == "/" ? true : false;
    return (
        <main>
            <Header headerOverlay={headerOverlay} />
            {children}
            <Footer />
        </main>
    )
}
