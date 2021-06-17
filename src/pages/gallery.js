import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import MetaInfo from "../components/MetaInfo"

const query = graphql`
    query {
        gcms {
            galleryImages {
                id
                description
                image {
                    url
                }
            }
        }
    }
`

export default function Gallery({ path }) {
    const { gcms = {} } = useStaticQuery(query)
    console.log(gcms)
    return (
        <div className="container">
            <MetaInfo
                title="Gallery"
                description="Hooker &amp; Eight's image gallery"
                path={path}
            />
            <div style={{textAlign: 'center', padding: '40px 20px'}}>
                <h1>Gallery coming soon!</h1>
                <p>In the mean time, we have plenty of photos on our social channels, <a href="https://www.instagram.com/hookerandeight/?hl=en" target="_blank">Instagram</a> and <a href="https://www.facebook.com/hookerandeight/" target="_blank">Facebook</a></p>
            </div>
        </div>
    )
}
