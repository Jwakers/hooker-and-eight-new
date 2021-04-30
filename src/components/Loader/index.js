import React from "react"
import * as style from "./loader.module.scss"

export default function Loader() {
    return (
        <div className={style.Loader}>
            <div className={style.Loader_item1}></div>
            <div className={style.Loader_item2}></div>
            <div className={style.Loader_item3}></div>
        </div>
    )
}
