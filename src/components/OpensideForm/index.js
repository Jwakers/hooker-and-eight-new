import React from "react"
import * as style from "./form.module.scss"

import Button from "../Button"

export default class OpensideForm extends React.Component {
    state = {
        currentStep: 1,
        steps: {
            1: "Personal details",
            2: "Event details",
            3: "Confirm and submit",
        },
        name: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        dateOfEvent: '',
        timeOfEvent: '',
        typeOfEvent: '',
        numberOfGuests: '',
        eventAddress: '',
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
            return 'Loading...'
        // Has form been submitted
        if (this.state.submitted)
            return "Form submitted!"
        // Is final step
        if (this.state.currentStep === Object.keys(this.state.steps).length)
            return "Confirm and submit"
        // Form fields
        return this.renderFields()
            
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
            {name: "typeOfEvent", type: "text", fieldName: "Type of event (Wedding, birthday etc)"},
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
                <h2 className={style.Form_head}>
                    Booking enquiry with Openside
                </h2>
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
                {!this.state.submitted && (
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
