import React from "react"
import { Helmet } from "react-helmet"

const MetaInfo = ({
    path,
    title,
    description,
    type = "website",
    image = "https://res.cloudinary.com/drgquplia/image/upload/c_fill,g_north,h_630,w_1200/v1615569416/hooker-and-eight/gallery/hooker-and-eight-front-at-night.jpg",
}) => {
    const URL = `https://hookerandeight.com${path}`
    return (
        <Helmet>
            <title>{title} - Hooker &amp; Eight</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={URL} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={URL} />
            <meta property="og:site_name" content="Hooker &amp; Eight" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@hookerandeight" />
            <meta name="twitter:creator" content="@hookerandeight" />
        </Helmet>
    )
}

export default MetaInfo