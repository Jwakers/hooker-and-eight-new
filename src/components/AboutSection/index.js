import React from "react"
import { Link } from 'gatsby'
import * as style from "./about-section.module.scss"

import Button from "../Button"

export default function AboutSection() {
    return (
        <div className={style.AboutSection}>
            <div className="container">
                <div className="grid grid--gap">
                    <div className={`${style.AboutSection_image} grid__12 grid__md-6`}>
                        <img src="https://res.cloudinary.com/drgquplia/image/upload/h_360/hooker-and-eight/brand/main-logo.png" alt="Hooker and Eight's logo crest"/>
                    </div>
                    <div className={`${style.AboutSection_content} grid__12 grid__md-6`}>
                        <h2>Where it all began</h2>
                        <p>Dan and Balz are childhood school friends who played local youth rugby together for many years. It was one cold Christmas night at the Old Elm in Churchdown in 2014 where a very important was asked….”Why isn’t there a proper deece pizza place in Gloucester (and other than the pubs) why ‘ent there deece places to go to before the rugby!!”</p>
                        <p>It was one that couldn’t be answered for a few years and almost remained a drunken pipe-dream...</p>
                        <Link to="/about">
                            <Button modifier="white">read the whole story</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
