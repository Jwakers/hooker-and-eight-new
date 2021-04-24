import React from "react"

import * as style from "./hamburger.module.scss"

export default function Hamburger(props) {
    const handleKeyPress = event => {
        if (event.key === "Enter" || event.keyCode === 0) {
            props.onClick()
        }
    }
    const sections = [
        style.Hamburger_bar___top,
        style.Hamburger_bar___middle,
        style.Hamburger_bar___bottom
    ]
    return (
        <div
            className={`${style.Hamburger} ${
                props.open ? style.Hamburger___open : ''
            }`}
            onClick={props.onClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex="0"
        >
            {sections.map((bar, i) => (
                <div className={`${style.Hamburger_bar} ${bar}`} key={i}></div>
            ))}
        </div>
    )
}
