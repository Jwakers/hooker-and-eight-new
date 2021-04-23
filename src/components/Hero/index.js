import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"

import * as style from "./hero.module.scss"

import Button from "../Button"
import ButtonGroup from "../Button/buttonGroup"

export default function Hero() {
    const videoRef = useRef(null)
    const [showScroll, setShowScroll] = useState(false)
    const [videoLoaded, setVideoLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowScroll(true)
        }, 3000)
    })
    const handleVideoLoad = () => {
        setVideoLoaded(true)
    }
    return (
        <div className={style.Hero}>
            <img
                className={style.Hero_image}
                src="https://res.cloudinary.com/drgquplia/image/upload/v1615644397/hooker-and-eight/pages/hero-image.jpg"
                alt=""
            />
            <video
                className={`${style.Hero_video} ${
                    videoLoaded && style.Hero_video___loaded
                }`}
                onLoadedData={handleVideoLoad}
                ref={videoRef}
                autoPlay={true}
                muted={true}
            >
                <source
                    src="https://res.cloudinary.com/drgquplia/video/upload/q_60/hooker-and-eight/video/hero-video.mp4"
                    type="video/mp4"
                />
            </video>
            <div className={style.Hero_overlay}></div>
            <div className={style.Hero_content}>
                <div className={style.Hero_content_center}>
                    <div className={style.Hero_content_center_head}>
                        stunning handmade pizza
                    </div>
                    <div className={style.Hero_content_center_sub}>
                        at hooker &amp; eight
                        <ButtonGroup>
                            <a href="./">
                                <Button modifier="Button___white">
                                    menu &amp; order
                                </Button>
                            </a>
                            <Link to="./find-us">
                                <Button modifier="Button___white">find us</Button>
                            </Link>
                        </ButtonGroup>
                    </div>
                </div>
                <div
                    className={`
                        ${style.Hero_content_bottom}
                        ${showScroll && style.Hero_content_bottom___active}
                    `}
                >
                    scroll
                </div>
            </div>
        </div>
    )
}
