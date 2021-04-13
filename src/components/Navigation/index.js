import React from "react"
import { Link } from "gatsby"

import * as style from "./navigation.module.scss"

export default function Navigation() {
    return (
        <nav className={style.nav}>
            <div className="container">
                <Link to="." className={style.nav__item}>Menu &amp; Order</Link>
                <Link to="/about/">About</Link>
            </div>
        </nav>
    )
}