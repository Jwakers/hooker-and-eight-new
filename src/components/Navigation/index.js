import React from "react"
import { Link } from "gatsby"

import * as style from "./navigation.module.scss"

export default function Navigation() {
    return (
        <nav className={style.nav}>
            <Link to="/about/">About</Link>
            Navigation &times;
        </nav>
    )
}