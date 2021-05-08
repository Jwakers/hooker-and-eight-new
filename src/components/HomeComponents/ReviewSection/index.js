import React from "react"
import * as style from "./review-section.module.scss"

import Button from "../../Button"
import Box from "../../Box"
import AnimateOnScroll from "../../AnimateOnScroll"

export default function ReviewSection() {
    return (
        <div className={style.ReviewSection}>
            <div className="container">
                <div className="grid grid--gap">
                    <div className="grid__12 grid__md-6">
                        <h2>Don’t just take our word for it</h2>
                        <p>
                            Sed eget consequat neque. Ut pulvinar tortor eget
                            dolor fringilla, ac varius tellus luctus. Morbi sed
                            dolor bibendum, accumsan odio in, posuere neque.
                        </p>
                        <Button>Find us on trip advisor</Button>
                    </div>
                    <div className="grid__12 grid__md-6">
                        <AnimateOnScroll from="bottom" rootMargin="100px 0px" animateOut={false}>
                            <div className={style.ReviewSection_box}>
                                <Box>
                                    <div id="TA_selfserveprop29" className={`TA_selfserveprop ${style.ReviewSection_box_widget}`}><ul id="XGgyhn8lm" className="TA_links adH1IuS"><li id="rhit571okAG" className="QZihmHh6r"><a target="_blank" rel="noreferrer" href="https://www.tripadvisor.co.uk/Restaurant_Review-g187047-d19141578-Reviews-Hooker_Eight-Gloucester_Cotswolds_England.html"><img src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/></a></li></ul></div>
                                </Box>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
