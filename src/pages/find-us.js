import React from "react"
import MetaInfo from "../components/MetaInfo"
import * as style from "../components/HomeComponents/MapSection/map-section.module.scss"

export default function Gallery({ path }) {
    return (
        <div className="container">
            <MetaInfo
                title="Gallery"
                description="Hooker &amp; Eight's image gallery"
                path={path}
            />
            <div className="grid grid--gap">
                <div className="grid__12 grid__md-6">
                    <h1>Find us</h1>
                    <p>
                        We are right in the city centre of Gloucester on
                        Westgate Street, just a short walk from the iconic
                        cathedral. The nearest car park to us is just behind
                        Longsmith Street.
                    </p>
                    <ul className={style.MapSection_list}>
                        <li>HOOKER &amp; EIGHT</li>
                        <li>49 WESTGATE STREET</li>
                        <li>GLOUCESTER</li>
                        <li>GL1 2NW</li>
                        <li>01452 690 829</li>
                    </ul>
                </div>
                <div className="grid__12 grid__md-6">
                    <iframe
                        title="Hooker and Eight on Google maps"
                        className={`${style.MapSection_map} ${style.MapSection_map___fullHeight} round-edge`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.7125080481987!2d-2.249885383510918!3d51.86620537969575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871067b34a09c6b%3A0xa4117924a538b6cd!2s49%20Westgate%20St%2C%20Gloucester%20GL1%202NW!5e0!3m2!1sen!2suk!4v1569517171736!5m2!1sen!2suk"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <h2>Booking info</h2>
            <p>
                As we are a small restaurant, any tables over 10 are now
                required to pre-order a minimum of 24 hours in advance,
                and will also incur a 8% service charge.
            </p>
            <p>
                We strongly recommend booking for Friday and Saturday
                and any Gloucester rugby match day. Bookings fill up
                quickly and we hate to turn people away.
            </p>
            <p>
                Please note: the restaurant becomes very busy 1-2 hours
                before any Gloucester home rugby games.
            </p>
        </div>
    )
}
