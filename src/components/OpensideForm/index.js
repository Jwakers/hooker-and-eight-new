import React from "react"
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import * as style from "./form.module.scss"

import Button from "../Button"
import Loader from "../Loader"

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const errorBool = meta.touched && meta.error
    return (
        <>
            <label className={style.Form_inputs_label} htmlFor={props.name}>
                <input
                    className={`${style.Form_inputs_input} ${errorBool ? style.Form_inputs_input___error : ''}`}
                    {...field}
                    {...props}
                />
                {errorBool && (
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
    const errorBool = meta.touched && meta.error

    return (
        <>
            <label className={style.Form_inputs_label}>
                <textarea
                    className={`${style.Form_inputs_input} ${errorBool ? style.Form_inputs_input___error : ''}`}
                    {...field}
                    {...props}
                />
                {errorBool && (
                    <div className={style.Form_inputs_error}>{meta.error}</div>
                )}
                <span className={style.Form_inputs_input_placeholder}>
                    {props.placeholder}
                </span>
            </label>
        </>
    )
}

const Checkbox = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label className={style.Form_inputs_label} htmlFor={props.name}>
                <input
                    className={style.Form_inputs_checkbox}
                    type="checkbox"
                    {...field}
                    {...props}
                />
                {meta.touched && meta.error && (
                    <div className={style.Form_inputs_error}>{meta.error}</div>
                )}
                <span>By checking this box you consent to our {<a href="/privacy" target="_blank">privacy policy</a>}.</span>
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
        submitted: false,
        error: false,
    }
    handleInput = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value,
        })
    }
    handleSubmit = async (values, setSubmitting, resetForm) => {
        try {
            const response = await fetch('/.netlify/functions/openside-form', {
                method: 'POST',
                body: JSON.stringify(values)
            })
            const data = await response.json()
            if (data.error || data.errors || data.status === 400)
                throw new Error(data.errors[0].message)
            setSubmitting(false)
            resetForm()
            this.setState({ currentStep: 1, submitted: true })
        } catch (err) {
            console.error(err)
            this.setState({ error: true })
        }
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
    renderSuccessMessage = () => (
        <>
            <div className={style.Form_success}>Thank You</div>
            <div>
                Thank you for your Booking enquiry with Openside! We will be in
                touch soon to discuss your event. If you do not hear from us
                within 10 working days please contact us on{" "}
                <a href="tel:01452690829">01452 690 829</a>.
            </div>
        </>
    )

    renderErrorMessage = () => (
        <div className={style.Form_message}>
            There was a problem submitting your form, please try again later.
        </div>
    )

    render() {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    dateOfEvent: "",
                    typeOfEvent: "",
                    numberOfGuests: "",
                    eventAddress: "",
                    privacyPolicy: false
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name is a required field"),
                    email: Yup.string("Email is a required field")
                        .email("Invalid email address")
                        .required(),
                    phone: Yup.string()
                        .required("Phone is a required field")
                        .matches(
                            /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/,
                            "Invalid UK phone number"
                        ),
                    address: Yup.string().required(
                        "Address is a required field"
                    ),
                    dateOfEvent: Yup.string().required(
                        "Date of event is a required field"
                    ),
                    typeOfEvent: Yup.string().required(
                        "Type of event is a required field"
                    ),
                    numberOfGuests: Yup.number()
                        .required("Number of guests is a required field"),
                    eventAddress: Yup.string().required(
                        "Event address is a required field"
                    ),
                    privacyPolicy: Yup.boolean().oneOf([true], "You must agree to our privacy policy").required("You must agree to our privacy policy")
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => this.handleSubmit(values, setSubmitting, resetForm)}
            >
                {props => (
                    <Form className={style.Form}>
                        {this.state.error ? (
                            this.renderErrorMessage()
                        ) : this.state.submitted ? (
                            this.renderSuccessMessage()
                        ) : (
                            <>
                                <h2 className={style.Form_head}>
                                    Booking enquiry with Openside
                                </h2>
                                <div className={style.Form_progressHead}>
                                    Step {this.state.currentStep} of{" "}
                                    {this.state.steps}:{" "}
                                    {
                                        this.state.stepsHeadings[
                                            this.state.currentStep
                                        ]
                                    }
                                </div>
                                {this.state.currentStep === 1 && (
                                    <>
                                        <TextInput
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            autoComplete="name"
                                        />
                                        <TextInput
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                            autoComplete="email"
                                        />
                                        <TextInput
                                            name="phone"
                                            type="text"
                                            placeholder="Phone number"
                                            autoComplete="tel"
                                        />
                                        <TextArea
                                            name="address"
                                            type="text"
                                            placeholder="Your address"
                                            autoComplete="street-address"
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
                                            placeholder="Event address"
                                        />
                                        <Checkbox
                                            name="privacyPolicy"
                                        />
                                    </>
                                )}
                                {this.state.currentStep === 3 &&
                                    (!props.isValid ? (
                                        <div className={style.Form_errors}>
                                            <div>
                                                Please go back and correct the
                                                following error
                                                {Object.keys(props.errors)
                                                    .length > 1 && "s"}
                                                :
                                            </div>
                                            <ul>
                                                {Object.values(
                                                    props.errors
                                                ).map(er => (
                                                    <li key={er}>{er}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <>
                                            <div className={style.Form_message}>
                                                If all the information provide
                                                is correct, click submit. You
                                                can navigate back through the
                                                form using the "back" button to
                                                make any amendments.
                                            </div>
                                        </>
                                    ))}

                                <div className={style.Form_buttons}>
                                    {this.state.currentStep > 1 && (
                                        <div>
                                            <Button
                                                type="button"
                                                onClick={this.back}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    )}
                                    {this.state.currentStep <
                                    this.state.steps ? (
                                        <div
                                            className={style.Form_buttons_right}
                                        >
                                            <Button
                                                type="button"
                                                onClick={this.next}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    ) : (
                                        props.isValid && (
                                            <div
                                                className={
                                                    style.Form_buttons_right
                                                }
                                            >
                                                <Button
                                                    type="submit"
                                                    modifier="submit"
                                                >
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
                            </>
                        )}
                    </Form>
                )}
            </Formik>
        )
    }
}
