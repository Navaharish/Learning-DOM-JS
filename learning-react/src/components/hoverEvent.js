import React, { Component } from 'react'

export class hoverEvent extends Component {
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
                <h2 onMouseEnter={this.ClickEvent} >You Have hovered {this.state.count} Number of times </h2>
            </div>
        )
    }
}

export default hoverEvent
