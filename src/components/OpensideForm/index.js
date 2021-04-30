import React from "react"
import * as style from "./form.module.scss"

import Button from "../Button"
import Loader from "../Loader"

export default class OpensideForm extends React.Component {
    state = {
        currentStep: 1,
        steps: {
            1: "Personal details",
            2: "Event details",
            3: "Confirm and submit",
        },
        name: 'Jack Wakeham',
        email: 'jack@test.com',
        phone: '07810097476',
        address: '19 Churchill Road, Gloucester, GL1 5PQ',
        dateOfEvent: '2021-04-30',
        timeOfEvent: '18:00',
        typeOfEvent: 'Music festival',
        numberOfGuests: 200000,
        eventAddress: '121 Madeupton, Nottown, IZN 0TR3L',
        loading: false,
        submitted: false
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({
                loading: false,
                submitted: true
            })}, 2000)
    }
    handleInput = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
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
    renderFormContent = () => {
        // Is for submitting
        if (this.state.loading)
            return <Loader />
        // Has form been submitted
        if (this.state.submitted)
            return this.renderSuccessMessage()
        // Is final step
        if (this.state.currentStep === Object.keys(this.state.steps).length)
            return this.renderConfirmation()
        // Form fields
        return this.renderFields()
            
    }
    renderSuccessMessage = () => {
        return (
            <>
                <div className={style.Form_success}>Thank You</div>
                <div>{this.state.name}, thank you for your Booking enquiry with Openside! We will be in touch soon to discuss your event. If you do not hear from us within 10 working days please contact us on [contact details here].</div>
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
                        <td className={style.Form_table_cell}>{item.fieldName || item.name}</td>
                        <td className={style.Form_table_cell}>{this.state[item.name]}</td>
                    </tr>
                ))}
            </table>
        )
    }
    steps = {
        "1": [
            {name: "name", type: "text"},
            {name: "email", type: "email"},
            {name: "phone", type: "tel"},
            {name: "address", type: "text", textarea: true},
        ],
        "2": [
            {name: "dateOfEvent", type: "date", fieldName: "Date of event"},
            {name: "timeOfEvent", type: "time", fieldName: "Time of event"},
            {name: "typeOfEvent", type: "text", fieldName: "Type of event"},
            {name: "numberOfGuests", type: "number", fieldName: "Number of guests"},
            {name: "eventAddress", type: "text", fieldName: "Event address", textarea: true}
        ]
    }
    renderFields = () => {
        return (
            this.steps[this.state.currentStep].map(el => (
                <label className={style.Form_inputs_label}  key={el.name}>
                    {
                    el.textarea ? 
                    <textarea value={this.state[el.name]} onChange={e => this.handleInput(e, el.name)} className={style.Form_inputs_input} type={el.type} name={el.name} placeholder={el.name} required /> :
                    <input value={this.state[el.name]} onChange={e => this.handleInput(e, el.name)} className={style.Form_inputs_input} type={el.type} name={el.name} placeholder={el.fieldName ? el.fieldName : el.name} required />
                    }
                    <span className={style.Form_inputs_input_placeholder}>{el.fieldName ? el.fieldName : el.name}</span>
                </label>
            ))
        )
    }
    render() {
        return (
            <form className={style.Form} onSubmit={this.handleSubmit}>
                {!this.state.submitted && (
                    <h2 className={style.Form_head}>
                        Booking enquiry with Openside
                    </h2>
                )}
                {!this.state.submitted && (
                    <div className={style.Form_progressHead}>
                        Step{" "}
                        {Object.keys(this.state.steps)[this.state.currentStep - 1]}{" "}
                        of {Object.keys(this.state.steps).length}:{" "}
                        {this.state.steps[this.state.currentStep]}
                    </div>
                )}
                <div className={style.Form_inputs}>
                    {this.renderFormContent()}
                </div>
                {(!this.state.submitted && !this.state.loading) && (
                    <div className={style.Form_buttons}>
                        {this.state.currentStep > 1 && (
                            <div>
                                <Button type="button" onClick={this.back}>
                                    Back
                                </Button>
                            </div>
                        )}
                        {this.state.currentStep <
                        Object.keys(this.state.steps).length ? (
                            <div className={style.Form_buttons_right}>
                                <Button type="button" onClick={this.next}>
                                    Next
                                </Button>
                            </div>
                        ) : (
                            <div className={style.Form_buttons_right}>
                                <Button type="submit" modifier="submit">Submit</Button>
                            </div>
                        )}
                    </div>
                )}
            </form>
        )
    }
}
