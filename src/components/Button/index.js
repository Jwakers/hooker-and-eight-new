import React from "react"
import * as style from "./button.module.scss"

export default function Button(props) {
    const buttonModifiers = () => {
        if (props.modifier) 
            return style[`Button___${props.modifier}`];
        return ''
    }
    return (
        <button
            className={`${style.Button} ${buttonModifiers()}`}
            onClick={props.onClick}
            {...props}
        >
            {props.children}
        </button>
    )
}
