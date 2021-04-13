import React from 'react'
import Navigation from "../Navigation"
import "./_base.scss"

export default function Layout({ children }) {
    return (
        <main>
            <Navigation />
            {children}
        </main>
    )
}