import React, { Component } from 'react'

export class count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increament() {
        this.setState({

            count: this.state.count + 2
        }, () => { console.log(this.setState.count) })
    }

    render() {
        // properties distruction
        const { name, heroName } = this.props
        return (
            <div>
                <div>{this.state.count} this is the number of {name}</div>
                <button onClick={() => this.increament()} >click to count</button>
            </div>
        )
    }
}

export default count
