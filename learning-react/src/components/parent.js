import React, { Component } from 'react'
import Child from './child'
export class parent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parentName: "parent"
        }

        this.parentText = this.parentText.bind(this)
    }


    parentText(childName) {
        alert(`hello we have reached ${this.state.parentName} form ${childName}`)

    }
    render() {
        return (
            <div>
                <Child parentHandler={this.parentText} />
            </div>
        )
    }
}

export default parent
