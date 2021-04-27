import React from "react"
import { Link } from "gatsby"
import * as style from "./map-section.module.scss"

import Button from "../Button"
import ButtonGroup from "../Button/ButtonGroup"

export default function MapSection() {
    return (
        <section className={style.MapSection}>
            <div className="container">
                <div className="grid grid--gap">
                    <div className="grid__12 grid__md-4">
                        <div className={style.MapSection_content}>
                            <h2>So what are you waiting for?</h2>
                            <ul className={style.MapSection_list}>
                                <li>HOOKER &amp; EIGHT</li>
                                <li>49 WESTGATE STREET</li>
                                <li>GLOUCESTER</li>
                                <li>GL1 2NW</li>
                                <li>01452 690 829</li>
                            </ul>
                            <ButtonGroup>
                                <Link to="/about">
                                    <Button>contact us</Button>
                                </Link>
                                <a href="./">
                                    <Button>order</Button>
                                </a>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="grid__12 grid__md-8">
                        <iframe
                            title="Hooker and Eight on Google maps"
                            className={style.MapSection_map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.7125080481987!2d-2.249885383510918!3d51.86620537969575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871067b34a09c6b%3A0xa4117924a538b6cd!2s49%20Westgate%20St%2C%20Gloucester%20GL1%202NW!5e0!3m2!1sen!2suk!4v1569517171736!5m2!1sen!2suk"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
