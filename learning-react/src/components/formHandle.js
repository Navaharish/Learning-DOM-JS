import React, { Component } from 'react'

export class formHandle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }
    formHandler = (event) => {
        this.setState(
            {
                name: event.target.value

            }
        )
    }

    submitHandler() {
        alert(`hey! ${this.state.name}`)

    }
    formReloadHandler = (event) => {
        event.preventDefault();

    }
    render() {
        return (
            <form onSubmit={this.formReloadHandler}>
                <label>Your Name:</label>
                <input type='text' name='name' value={this.state.name} onChange={this.formHandler} />
                <button onClick={() => { this.submitHandler() }}>Submit</button>
            </form>
        )
    }
}

export default formHandle
