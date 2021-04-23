import React from "react"

import * as style from "./hamburger.module.scss"

export default function Hamburger(props) {
    const handleKeyPress = event => {
        if (event.key === "Enter" || event.keyCode === 0) {
            props.onClick()
        }
    }
    return (
        <div
            className={`${style.Hamburger} ${
                props.open && style.Hamburger___open
            }`}
            onClick={props.onClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex="0"
        >
            <div
                className={`${style.Hamburger_bar} ${style.Hamburger_bar___top}`}
            ></div>
            <div
                className={`${style.Hamburger_bar} ${style.Hamburger_bar___middle}`}
            ></div>
            <div
                className={`${style.Hamburger_bar} ${style.Hamburger_bar___bottom}`}
            ></div>
        </div>
    )
}
