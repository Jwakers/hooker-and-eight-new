import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"

import * as style from "./navigation.module.scss"

export default function Navigation({headerOverlay}) {
    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        checkWindowWidth()
    }, [])
    useEffect(() => {
        const menuItems = menuRef.current.children;
        if (navOpen) {
            let i = 0;
            const interval = setInterval(() => {
                try {
                    menuItems[i].classList.add(style.Nav_menu_item___in);
                    i++;
                } catch {
                    clearInterval(interval)
                }
            }, 50)
        } else {
            [...menuItems].forEach(el => el.classList.remove(style.Nav_menu_item___in))
        }
    }, [navOpen])
    const toggleMobileMenu = () => {
        setNavOpen(!navOpen)
    }

    const checkWindowWidth = () => {
        return window.innerWidth >= 768 ? setNavOpen(true) : setNavOpen(false);
    }

    if (typeof window !== "undefined") {
        window.onresize = () => {
            checkWindowWidth()
        }
    }

    return (
        <nav className={`${style.Nav} ${navOpen ? style.Nav___open : ''} ${headerOverlay ? style.Nav___overlay : ''}`}>
            <div className={style.Nav_menu} ref={menuRef}>
                {navOpen ? (
                    <>
                        <Link to="." className={style.Nav_menu_item}>Menu &amp; Order</Link>
                        <Link activeClassName={style.Nav_menu_item___active} to="/about" className={style.Nav_menu_item}>About</Link>
                        <Link activeClassName={style.Nav_menu_item___active} to="/find-us" className={style.Nav_menu_item}>Find us</Link>
                        <Link activeClassName={style.Nav_menu_item___active} to="/gallery" className={style.Nav_menu_item}>Gallery</Link>
                        <Link activeClassName={style.Nav_menu_item___active} to="/openside" className={style.Nav_menu_item}>Openide</Link>
                    </>
                ) : ''}
            </div>
            <Hamburger onClick={toggleMobileMenu} open={navOpen} />
        </nav>
    )
}