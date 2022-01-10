// Used by a webhook in GraphCMS

const Mailgun = require("mailgun-js")

const sendEmail = async data => {
    return new Promise((resolve, reject) => {
        console.log("Sending email")
        const { MAILGUN_API_KEY: apiKey, MAILGUN_DOMAIN: domain } = process.env
        
        const mailgun = Mailgun({
            apiKey,
            domain,
        })
        const mailData = {
            from:
                "Openside <mailgun@sandbox04b2be504e6146f59a85f6df9182860f.mailgun.org>",
            to: "jackwakeham82@gmail.com",
            subject: "New booking request",
            text: `
                New Openside Booking (${data.id})
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.phone}
                Address: ${data.address}
                Date of event: ${new Date(
                    data.dateOfEvent
                ).toLocaleDateString()}
                Type of event: ${data.typeOfEvent}
                Number of guests: ${data.numberOfGuests}
                Event address: ${data.eventAddress}
            `,
            html: `
                    <html>
                        <p style="font-size:20px;"><b>New Openside Booking (${
                            data.id
                        })</b></p>
                        <p>Name: <b>${data.name}</b></p>
                        <p>Email: <b>${data.email}</b></p>
                        <p>Phone: <b>${data.phone}</b></p>
                        <p>Address: <b>${data.address}</b></p>
                        <p>Date of event: <b>${new Date(
                            data.dateOfEvent
                        ).toLocaleDateString()}</b></p>
                        <p>Type of event: <b>${data.typeOfEvent}</b></p>
                        <p>Number of guests: <b>${data.numberOfGuests}</b></p>
                        <p>Event address: <b>${data.eventAddress}</b></p>
                    </html>
                    `,
        }

        mailgun.messages().send(mailData, err => {
            if (err) return reject(err)

            resolve()
        })
    })
}

exports.handler = async event => {
    try {
        const { data } = JSON.parse(event.body)

        console.log(data)

        await sendEmail(data)

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Email sent successfully",
            }),
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: err.message,
        }
    }
}
