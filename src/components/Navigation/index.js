import React, { useState } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"

import * as style from "./navigation.module.scss"

export default function Navigation() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleMobileMenu = () => {
        setNavOpen(!navOpen)
    }

    return (
        <nav className={[style.Nav, navOpen ? style.Nav___open : ''].join(' ')}>
            <div className={style.Nav_menu}>
                <Link to="." className={style.Nav_menu_item}>Menu &amp; Order</Link>
                <Link to="/about" className={style.Nav_menu_item}>About</Link>
                <Link to="/find-us" className={style.Nav_menu_item}>Find us</Link>
                <Link to="/gallery" className={style.Nav_menu_item}>Gallery</Link>
                <Link to="/openside" className={style.Nav_menu_item}>Openide</Link>
            </div>
            <Hamburger onClick={toggleMobileMenu} open={navOpen} />
        </nav>
    )
}