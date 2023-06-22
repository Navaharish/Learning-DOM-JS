import React, { Component } from 'react'

export class selectTag extends Component {

    constructor(props) {
        super(props)

        this.state = {
            option: "practice code"
        }
    }
    optionChangeHandler = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Which you like most: </label>
                <select value={this.state.option} onChange={this.optionChangeHandler}>
                    <option>Traveling</option>
                    <option>Playing</option>
                    <option>workouts in gym</option>
                    <option>practice code</option>
                </select>
            </div>
        )
    }
}

export default selectTag
