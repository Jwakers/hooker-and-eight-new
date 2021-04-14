import React from 'react'

import * as style from "./hero.module.scss"

export default function Hero() {
    return (
        <div className={style.Hero}>
            <img className={style.Hero_image} src="https://res.cloudinary.com/drgquplia/image/upload/v1615644397/hooker-and-eight/pages/hero-image.jpg" alt=""/>
            <video className={style.Hero_video} autoplay="true" muted="true" loop="true">
                <source src="https://res.cloudinary.com/drgquplia/video/upload/v1618421641/hooker-and-eight/video/hero-video.mp4" type="video/mp4" />
            </video>
            <div className={style.Hero_overlay}></div>
            <div className={style.Hero_content}>
                <div className={style.Hero_content_center}>
                    <div className={style.Hero_content_center_head}>stunning handmade pizza</div>
                    <div className={style.Hero_content_center_sub}>at hooker &amp; eight</div>
                </div>
            </div>
        </div>
    )
}