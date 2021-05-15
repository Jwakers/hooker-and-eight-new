import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({element, props}) => (
    <Layout {...props}>{element}</Layout>
)

export const onRouteUpdate = ({ location }) => {
    // const head = document.getElementsByTagName('head')[0]
    // const script = document.createElement('script')
    // script.type = 'text/javascript';
    // script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
    // head.appendChild(script)

    // if (location.pathname == "/" || location.pathname == '/hooker-and-eight-new/') {
    //     const reviewScript = document.createElement('script')
    //     reviewScript.type = 'text/javascript';
    //     reviewScript.src = 'https://www.jscache.com/wejs?wtype=selfserveprop&uniq=748&locationId=19141578&lang=en_UK&rating=true&nreviews=4&writereviewlink=true&popIdx=true&iswide=true&border=false&display_version=2'
    //     reviewScript.setAttribute('data-loadtrk', '')
    //     reviewScript.setAttribute('async', '')
    //     reviewScript.setAttribute('onload', 'this.loadtrk=true')
    //     head.appendChild(reviewScript)
    // }
}