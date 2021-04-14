import React from 'react';

import * as style from "./hamburger.module.scss"

export default function Hamburger(props) {
    return (
        <div className={[style.Hamburger, props.open ? style.Hamburger___open: ''].join(' ')} onClick={props.onClick}>
            <div className={[style.Hamburger_bar, style.Hamburger_bar___top].join(' ')}></div>
            <div className={[style.Hamburger_bar, style.Hamburger_bar___middle].join(' ')}></div>
            <div className={[style.Hamburger_bar, style.Hamburger_bar___bottom].join(' ')}></div>
        </div>
    )
}