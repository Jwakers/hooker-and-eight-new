import React from 'react';
import * as style from "./color-section.module.scss"

export default function ColorSection(props) {
    return (
        <section className={style.ColorSection}>
            <div className={style.ColorSection___pattern}></div>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}