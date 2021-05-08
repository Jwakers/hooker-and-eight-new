/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-graphql`,
            options: {
              typeName: 'GCMS',
              fieldName: 'gcms',
              url: 'https://api-eu-central-1.graphcms.com/v2/ckoeifub93ifk01z81uc24kmy/master',
              headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjA0OTIxNjEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nrb2VpZnViOTNpZmswMXo4MXVjMjRrbXkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjk3YTQyNDgtZmUyMy00YTk1LWFhNjYtNjY1YTZkMzQ3MzVjIiwianRpIjoiY2tvZno2eWZhYjdhazAxeG8yN3BwY2M1bSJ9.OH0O2p5Brh7XmlV8VsHMfuA2dnE1QqjDeJiNRG5h2Ns3QGnPOXrAvWFIcqd95_qRPJbYgDKYQPePhCodtix3mwPoa__PkmUDwQQLD3SpmcuMzWBjKmYq__ZnFC8LIfQ5yqaZoE07iXpJsU8-lgj4q7KWFMpSMHk2HTOlsgqxcdy09O7mVilv_GgcUxNRGmTtMng7eG6UxNRYZJ8iEKj_0XlPwL8CB6MJYVFpb1Lnf7If1j0A4bDRGeGvfEEba89Zq2kkJyh5XwFZ9UWrK07z8Vbda46V7-na_4JXz8GlxpSgvxwblvMb4BnDnT4GRnr8k9ibI_MIgvz1L-f_L5UJUTSb-Cnx6vDARcqNSp6BAKLx7cuQqU_pudpW5YBUOKJ2933kgd_9WvTs0mq68z6GbL0pK4dxcZj-DNBkWQsfO8S-jZtHkf-PQ0O0R5mSObN8IZRaIEjFPj1wy2AoUAM0fnNJSTs26iOhvcJxmZDiKxwdVgGica3YhAesmAjpfsgzgEP55QBgB94yeynXmThXaRQeOLwzRK2XJRR4t4-ukLxgWhFY-H_vtRo0_4XG7pYYM1ANxpie9slmI-mLh7lIFg7lvP0yaFzr_VxSdvP-SlNTdaTBF6NOUzpCwwJ8fwM3WMgJDG9u0oaqcGilhAc5eyCSQu1yYWMaLIt7Fl74LkU`
              }
            },
        },
    ],
    pathPrefix: "/hooker-and-eight-new",
}
