import React from 'react'
import * as style from "./box.module.scss"

export default function Box(props) {
    return (
        <div className={style.Box}>
            {props.children}
        </div>
    )
}