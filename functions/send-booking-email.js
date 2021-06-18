const Mailgun = require("mailgun-js")

const sendEmail = async data => {
    return new Promise((resolve, reject) => {
        console.log("Sending email")
        const { MAILGUN_API_KEY: apiKey, MAILGUN_DOMAIN: domain } = process.env
        console.log(apiKey, domain)
        const mailgun = Mailgun({
            apiKey,
            domain,
        })
        const mailData = {
            from:
                "Openside <postmaster@sandbox04b2be504e6146f59a85f6df9182860f.mailgun.org>",
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
                        <p>Name: ${data.name}</p>
                        <p>Email: ${data.email}</p>
                        <p>Phone: ${data.phone}</p>
                        <p>Address: ${data.address}</p>
                        <p>Date of event: ${new Date(
                            data.dateOfEvent
                        ).toLocaleDateString()}</p>
                        <p>Type of event: ${data.typeOfEvent}</p>
                        <p>Number of guests: ${data.numberOfGuests}</p>
                        <p>Event address: ${data.eventAddress}</p>
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
