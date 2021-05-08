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
            <h1>Gallery</h1>
        </div>
    )
}
