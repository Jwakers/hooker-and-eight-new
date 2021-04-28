import React from "react"
import { Link } from "gatsby"
import * as style from "./header.module.scss"

import Navigation from "../Navigation"

export default function Header({ headerOverlay }) {
    const imageParams = !headerOverlay ? `co_rgb:d34242,e_colorize:100,co_rgb:d34242,e_colorize:100,` : '' ;
    return (
        <div
            className={`${style.Header} ${
                headerOverlay ? style.Header___overlay : ""
            }`}
        >
            <div className={style.Header_container}>
                <Link to="/">
                    <img
                        className={style.Header_image}
                        srcSet={`https://res.cloudinary.com/drgquplia/image/upload/${imageParams}w_220/hooker-and-eight/brand/text-logo.png 1x, https://res.cloudinary.com/drgquplia/image/upload/${imageParams}w_440/hooker-and-eight/brand/text-logo.png 2x`}
                        alt="Hooker and Eight logo"
                    />
                </Link>
                <Navigation headerOverlay={headerOverlay} />
            </div>
        </div>
    )
}
