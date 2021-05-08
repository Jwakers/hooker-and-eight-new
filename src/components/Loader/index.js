import React from "react"
import * as style from "./loader.module.scss"

export default function Loader({...props}) {
    return (
        <div className={`${style.Loader} ${props.modifiers && props.modifiers.map(mod => style.Loader + '___' + mod).join(' ')}`} >
            <div className={style.Loader_item1}></div>
            <div className={style.Loader_item2}></div>
            <div className={style.Loader_item3}></div>
        </div>
    )
}
