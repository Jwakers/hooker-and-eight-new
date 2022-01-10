const { GraphQLClient, gql } = require("graphql-request")

const mutation = gql`
    mutation createOpensideBooking(
        $name: String!
        $email: String!
        $phone: String!
        $address: String!
        $dateOfEvent: Date!
        $typeOfEvent: String!
        $numberOfGuests: Int!
        $eventAddress: String!
        $privacyPolicy: Boolean!
    ) {
        createOpensideBooking(
            data: {
                name: $name
                email: $email
                phone: $phone
                address: $address
                dateOfEvent: $dateOfEvent
                typeOfEvent: $typeOfEvent
                numberOfGuests: $numberOfGuests
                eventAddress: $eventAddress
                privacyPolicy: $privacyPolicy
            }
        ) {
            id
        }
    }
`

const graphcms = new GraphQLClient(process.env.GATSBY_GRAPHCMS_ENDPOINT, {
    headers: {
        authorization: `Bearer ${process.env.GATSBY_GRAPHCMS_TOKEN}`,
    },
})

exports.handler = async event => {
    try {
        const response = await graphcms.request(
            mutation,
            JSON.parse(event.body)
        )
        const data = response
        return {
            statusCode: 200,
            body: JSON.stringify(data, undefined, 2),
        }
    } catch (err) {
        console.log("ERROR", err)
        return {
            statusCode: err.response.status,
            body: JSON.stringify(err.response),
        }
    }
}
