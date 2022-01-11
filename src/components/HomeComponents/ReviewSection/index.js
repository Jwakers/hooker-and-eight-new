import React from "react"
import { Helmet } from "react-helmet"
import * as style from "./review-section.module.scss"

import Button from "../../Button"
import Box from "../../Box"
import AnimateOnScroll from "../../../hocs/AnimateOnScroll"

const ReviewSection = () => (
    <>
        <Helmet>
            <script
                async
                src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=748&amp;locationId=19141578&amp;lang=en_UK&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=false&amp;display_version=2"
                data-loadtrk
                onload="this.loadtrk=true"
            ></script>
        </Helmet>
        <div className={style.ReviewSection}>
            <div className="container">
                <div className="grid grid--gap">
                    <div className="grid__12 grid__md-6">
                        <h2>Don’t just take our word for it</h2>
                        <p>
                            We think our pizzas are some of the best around, but
                            we dont expect you to take our word for it. Take a
                            look at some of our reviews from trip advisor.
                        </p>
                        <Button>Find us on trip advisor</Button>
                    </div>
                    <div className="grid__12 grid__md-6">
                        <AnimateOnScroll
                            from="bottom"
                            rootMargin="100px 0px"
                            animateOut={false}
                        >
                            <div className={style.ReviewSection_box}>
                                <Box>
                                    <div
                                        id="TA_selfserveprop748"
                                        className={`TA_selfserveprop ${style.ReviewSection_box_widget}`}
                                    >
                                        <ul
                                            id="CEkFmKrMfu1"
                                            className="TA_links O3DeLF1BMrf1"
                                        >
                                            <li
                                                id="VeTaib"
                                                className="8ASPMz2bzQ"
                                            >
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="https://www.tripadvisor.co.uk/Restaurant_Review-g187047-d19141578-Reviews-Hooker_Eight-Gloucester_Cotswolds_England.html"
                                                >
                                                    <img
                                                        src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                                                        alt="TripAdvisor"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Box>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default ReviewSection
