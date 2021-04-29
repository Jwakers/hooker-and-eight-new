import React from "react"
import Layout from "./src/components/Layout"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            defer
            async
        ></script>,
    ])
}
export const wrapPageElement = ({element, props}) => (
    <Layout {...props}>{element}</Layout>
)
