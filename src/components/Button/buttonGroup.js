import React from "react"
import * as style from "./button.module.scss"

export default function ButtonGroup(props) {

    return (
        <div className={style.ButtonGroup}>
            {props.children}
        </div>
    )
}
