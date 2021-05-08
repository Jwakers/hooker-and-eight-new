import React from "react"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            defer
            async
        ></script>,
        <script
            async
            src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=29&amp;locationId=19141578&amp;lang=en_UK&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=false&amp;display_version=2"
            data-loadtrk
            onLoad="this.loadtrk=true"
        ></script>
    ])
}
