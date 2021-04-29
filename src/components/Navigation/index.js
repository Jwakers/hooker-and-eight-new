import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"

import * as style from "./navigation.module.scss"

export default function Navigation({ headerOverlay }) {
    const [navOpen, setNavOpen] = useState(false)
    const menuRef = useRef(null)
    useEffect(() => {
        checkWindowWidth()
    }, [])
    useEffect(() => {
        const menuItems = menuRef.current.children
        if (navOpen) {
            let i = 0
            const interval = setInterval(() => {
                try {
                    menuItems[i].classList.add(style.Nav_menu_item___in)
                    i++
                } catch {
                    clearInterval(interval)
                }
            }, 50)
        } else {
            ;[...menuItems].forEach(el =>
                el.classList.remove(style.Nav_menu_item___in)
            )
        }
    }, [navOpen])
    const toggleMobileMenu = (value) => {
        setNavOpen(value !== undefined ? value : !navOpen)
    }

    const checkWindowWidth = () => {
        return window.innerWidth >= 768 ? setNavOpen(true) : setNavOpen(false)
    }

    if (typeof window !== "undefined") {
        window.onresize = () => {
            checkWindowWidth()
        }
    }

    return (
        <nav
            className={`${style.Nav} ${navOpen ? style.Nav___open : ""} ${
                headerOverlay ? style.Nav___overlay : ""
            }`}
        >
            <div className={style.Nav_menu} ref={menuRef}>
                <>
                    <span className={style.Nav_menu_item} data-glf-cuid="4fb0fb85-1362-4f6e-92b9-705b22814f18" data-glf-ruid="f7220aa7-9342-4482-a162-2664ecf3b30f">
                        Menu &amp; Order
                    </span>
                    <Link
                        onClick={() => toggleMobileMenu(false)}
                        activeClassName={style.Nav_menu_item___active}
                        to="/about"
                        className={style.Nav_menu_item}
                    >
                        About
                    </Link>
                    <Link
                        onClick={() => toggleMobileMenu(false)}
                        activeClassName={style.Nav_menu_item___active}
                        to="/find-us"
                        className={style.Nav_menu_item}
                    >
                        Find us
                    </Link>
                    <Link
                        onClick={() => toggleMobileMenu(false)}
                        activeClassName={style.Nav_menu_item___active}
                        to="/gallery"
                        className={style.Nav_menu_item}
                    >
                        Gallery
                    </Link>
                    <Link
                        onClick={() => toggleMobileMenu(false)}
                        activeClassName={style.Nav_menu_item___active}
                        to="/openside"
                        className={style.Nav_menu_item}
                    >
                        Openside
                    </Link>
                </>
            </div>
            <Hamburger onClick={toggleMobileMenu} open={navOpen} />
        </nav>
    )
}
