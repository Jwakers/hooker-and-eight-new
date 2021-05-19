const { GraphQLClient, gql } = require("graphql-request")

exports.handler = async (event, context) => {
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

    try {
        const data = await graphcms.request(mutation, JSON.parse(event.body))
        return {
            statusCode: 200,
            body: JSON.stringify(data, undefined, 2),
        }
    } catch(err) {
        console.log(err)
        return {
            statusCode: 400,
            body: JSON.stringify(new Error(err), undefined, 2),
        }
    }            
}
