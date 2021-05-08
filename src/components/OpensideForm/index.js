import React from "react"
import { graphql } from "gatsby"
import { GraphQLClient, gql } from "graphql-request"
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import * as style from "./form.module.scss"

import Button from "../Button"
import Loader from "../Loader"

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label className={style.Form_inputs_label} htmlFor={props.name}>
                <input
                    className={style.Form_inputs_input}
                    {...field}
                    {...props}
                />
                {meta.touched && meta.error && (
                    <div className={style.Form_inputs_error}>{meta.error}</div>
                )}
                <span className={style.Form_inputs_input_placeholder}>
                    {props.placeholder}
                </span>
            </label>
        </>
    )
}

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label className={style.Form_inputs_label}>
                <textarea
                    className={style.Form_inputs_input}
                    {...field}
                    {...props}
                />
                {meta.touched && meta.error && (
                    <div className={style.Form_inputs_error}>{meta.error}</div>
                )}
                <span className={style.Form_inputs_input_placeholder}>
                    {props.placeholder}
                </span>
            </label>
        </>
    )
}

export default class OpensideForm extends React.Component {
    state = {
        currentStep: 1,
        steps: 3,
        stepsHeadings: {
            1: "Personal details",
            2: "Event details",
            3: "Confirm and submit",
        },
    }
    handleInput = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value,
        })
    }
    next = e => {
        e.preventDefault()
        this.setState(prev => ({
            currentStep: prev.currentStep + 1,
        }))
    }
    back = e => {
        e.preventDefault()
        this.setState(prev => ({
            currentStep: prev.currentStep - 1,
        }))
    }
    renderSuccessMessage = () => {
        return (
            <>
                <div className={style.Form_success}>Thank You</div>
                <div>
                    {this.state.name}, thank you for your Booking enquiry with
                    Openside! We will be in touch soon to discuss your event. If
                    you do not hear from us within 10 working days please
                    contact us on [contact details here].
                </div>
            </>
        )
    }
    renderConfirmation = () => {
        return (
            <table className={style.Form_table}>
                <thead className={style.Form_table_head}>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                {[...this.steps["1"], ...this.steps["2"]].map((item, i) => (
                    <tr className={style.Form_table_row} key={i}>
                        <td>{item.fieldName || item.name}</td>
                        <td>{this.state[item.name]}</td>
                    </tr>
                ))}
            </table>
        )
    }
    render() {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    dateOfEvent: undefined,
                    typeOfEvent: "",
                    numberOfGuests: undefined,
                    eventAddress: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required(),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required(),
                    phone: Yup.string()
                        .required()
                        .matches(
                            /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/,
                            "Invalid UK phone number"
                        ),
                    address: Yup.string().required(),
                    dateOfEvent: Yup.string().required(),
                    typeOfEvent: Yup.string().required(),
                    numberOfGuests: Yup.number().required().min(50),
                    eventAddress: Yup.string().required(),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const mutation = gql`
                    mutation createOpensideBooking($name: String!, $email: String!, $phone: String!, $address: String!, $dateOfEvent: Date!, $typeOfEvent: String!, $numberOfGuests: Int!, $eventAddress: String!) {
                        createOpensideBooking(data: {name: $name, email: $email, phone: $phone, address: $address, dateOfEvent: $dateOfEvent, typeOfEvent: $typeOfEvent, numberOfGuests: $numberOfGuests, eventAddress: $eventAddress}) {
                          id
                        }
                      }
                      `;
                    console.log(values)
                    const graphcms = new GraphQLClient(
                        "https://api-eu-central-1.graphcms.com/v2/ckoeifub93ifk01z81uc24kmy/master",
                        {
                            headers: {
                                authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjA0OTIxNjEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nrb2VpZnViOTNpZmswMXo4MXVjMjRrbXkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjk3YTQyNDgtZmUyMy00YTk1LWFhNjYtNjY1YTZkMzQ3MzVjIiwianRpIjoiY2tvZno2eWZhYjdhazAxeG8yN3BwY2M1bSJ9.OH0O2p5Brh7XmlV8VsHMfuA2dnE1QqjDeJiNRG5h2Ns3QGnPOXrAvWFIcqd95_qRPJbYgDKYQPePhCodtix3mwPoa__PkmUDwQQLD3SpmcuMzWBjKmYq__ZnFC8LIfQ5yqaZoE07iXpJsU8-lgj4q7KWFMpSMHk2HTOlsgqxcdy09O7mVilv_GgcUxNRGmTtMng7eG6UxNRYZJ8iEKj_0XlPwL8CB6MJYVFpb1Lnf7If1j0A4bDRGeGvfEEba89Zq2kkJyh5XwFZ9UWrK07z8Vbda46V7-na_4JXz8GlxpSgvxwblvMb4BnDnT4GRnr8k9ibI_MIgvz1L-f_L5UJUTSb-Cnx6vDARcqNSp6BAKLx7cuQqU_pudpW5YBUOKJ2933kgd_9WvTs0mq68z6GbL0pK4dxcZj-DNBkWQsfO8S-jZtHkf-PQ0O0R5mSObN8IZRaIEjFPj1wy2AoUAM0fnNJSTs26iOhvcJxmZDiKxwdVgGica3YhAesmAjpfsgzgEP55QBgB94yeynXmThXaRQeOLwzRK2XJRR4t4-ukLxgWhFY-H_vtRo0_4XG7pYYM1ANxpie9slmI-mLh7lIFg7lvP0yaFzr_VxSdvP-SlNTdaTBF6NOUzpCwwJ8fwM3WMgJDG9u0oaqcGilhAc5eyCSQu1yYWMaLIt7Fl74LkU`,
                            }
                        }
                    )
                    try {
                        await graphcms.request(mutation, values)
                        setSubmitting(false)
                        resetForm()
                        this.setState({currentStep: 1})
                    } catch (err) {
                        console.log({err})
                    }
                }}
            >
                {props => (
                    <Form className={style.Form}>
                        <h2 className={style.Form_head}>
                            Booking enquiry with Openside
                        </h2>
                        <div className={style.Form_progressHead}>
                            Step {this.state.currentStep} of {this.state.steps}:{" "}
                            {this.state.stepsHeadings[this.state.currentStep]}
                        </div>
                        {this.state.currentStep === 1 && (
                            <>
                                <TextInput
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                                <TextInput
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                />
                                <TextInput
                                    name="phone"
                                    type="text"
                                    placeholder="Phone number"
                                />
                                <TextArea
                                    name="address"
                                    type="text"
                                    placeholder="Your address"
                                />
                            </>
                        )}
                        {this.state.currentStep === 2 && (
                            <>
                                <TextInput
                                    name="dateOfEvent"
                                    type="date"
                                    placeholder="Date of event"
                                />
                                <TextInput
                                    name="typeOfEvent"
                                    type="text"
                                    placeholder="Type of event"
                                />
                                <TextInput
                                    name="numberOfGuests"
                                    type="number"
                                    placeholder="Number of guests"
                                />
                                <TextArea
                                    name="eventAddress"
                                    type="text"
                                    placeholder="Event Address"
                                />
                            </>
                        )}
                        {this.state.currentStep === 3 &&
                            (!props.isValid ? (
                                <>
                                    <div>
                                        Please correct the following error
                                        {Object.keys(props.errors).length > 1 &&
                                            "s"}
                                        :
                                    </div>
                                    <ul>
                                        {Object.values(props.errors).map(er => (
                                            <li key={er}>{er}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <div>
                                        Please check all information below is
                                        correct, then click "submit". You can
                                        change information using by the "back"
                                        button.
                                    </div>
                                    <ul>
                                        {Object.keys(props.values).map(key => {
                                            let isDate = false
                                            if (key === "dateOfEvent")
                                                isDate = true
                                            return (
                                                <li key={key}>
                                                    {key}:{" "}
                                                    {!isDate
                                                        ? props.values[key]
                                                        : new Date(
                                                              props.values[key]
                                                          ).toLocaleDateString()}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            ))}

                        <div className={style.Form_buttons}>
                            {this.state.currentStep > 1 && (
                                <div>
                                    <Button type="button" onClick={this.back}>
                                        Back
                                    </Button>
                                </div>
                            )}
                            {this.state.currentStep < this.state.steps ? (
                                <div className={style.Form_buttons_right}>
                                    <Button type="button" onClick={this.next}>
                                        Next
                                    </Button>
                                </div>
                            ) : (
                                props.isValid && (
                                    <div className={style.Form_buttons_right}>
                                        <Button type="submit" modifier="submit">
                                            {props.isSubmitting ? (
                                                <Loader
                                                    modifiers={[
                                                        "white",
                                                        "small",
                                                    ]}
                                                />
                                            ) : (
                                                "Submit"
                                            )}
                                        </Button>
                                    </div>
                                )
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}
