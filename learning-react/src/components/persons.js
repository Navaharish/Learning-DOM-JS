import React from 'react'

function persons(props) {
    const { name, heroName, age, key } = props.person
    return (
        <div>
            <h2>hello guys , I am {name} ,i am the {heroName} and my age is {age}</h2>
        </div>
    )
}

export default persons
