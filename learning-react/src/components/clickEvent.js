import React, { Component } from 'react'

export class clickEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    ClickEvent = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.ClickEvent() }}>you have clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default clickEvent
