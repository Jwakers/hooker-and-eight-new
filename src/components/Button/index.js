import React from "react"
import * as style from "./button.module.scss"

export default function Button(props) {
    const buttonModifiers = () => {
        if (props.modifier) {
            return style[props.modifier]
        }
    }
    return (
        <button
            className={`${style.Button} ${buttonModifiers()}`}
            onClick={props.onClick}
            type={props.type}
        >
            {props.children}
        </button>
    )
}
