import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            defer
            async
        ></script>
    ])
}
