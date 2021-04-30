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
                                    <div className={style.ReviewSection_box_widget} dangerouslySetInnerHTML={{__html: `<div id="TA_selfserveprop29" class="TA_selfserveprop"><ul id="XGgyhn8lm" class="TA_links adH1IuS"><li id="rhit571okAG" class="QZihmHh6r"><a target="_blank" href="https://www.tripadvisor.co.uk/Restaurant_Review-g187047-d19141578-Reviews-Hooker_Eight-Gloucester_Cotswolds_England.html"><img src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=29&amp;locationId=19141578&amp;lang=en_UK&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=false&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>` }}></div>
                                </Box>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
