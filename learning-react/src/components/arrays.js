import React from 'react'
import Persons from './persons'
function arrays() {

    const persons = [


        {
            id: 1,
            name: "bruce",
            heroName: "super man",
            age: "inevitable"
        },
        {
            id: 2,
            name: "Tony stark",
            heroName: "iron man",
            age: "58"
        }, {
            id: 3,
            name: "cris evens",
            heroName: "Captian America",
            age: "118"
        }
    ]



    const personList = persons.map(x => <Persons key={x.id} person={x} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default arrays
