import React from 'react'
import "./_base.scss"
import Header from '../Header'

export default function Layout({ children }) {
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}