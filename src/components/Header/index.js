import React from "react"
import * as style from "./header.module.scss"

import Navigation from "../Navigation"

export default function Header() {
    return (
        <div className={style.Header}>
            <div className={style.Header_container}>
                <img
                    className={style.Header_image}
                    src="https://res.cloudinary.com/drgquplia/image/upload/v1615644698/hooker-and-eight/brand/text-logo.svg"
                    alt="Hooker and Eight logo"
                />
                <Navigation />
            </div>
        </div>
    )
}
