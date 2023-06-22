import React, { Component } from 'react'
import message from './welcome';

export class conditions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            busInt: true
        }
    }

    render() {
        //shot circut operator
        return this.state.busInt && <div>Good Luck ! </div>

        //Terinary operator
        // return this.state.busInt ? (<div>Good Luck ! </div> ): (< div >try your best</div >)


        // let Message
        // if (this.state.busInt) {
        //     return Message = <div>Good Luck ! </div>
        // }
        // else {
        //     return Message = < div >try your best</div >

        // }


    }
}

export default conditions
