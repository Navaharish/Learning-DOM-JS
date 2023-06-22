import React from 'react'

function child(props) {

    return (
        <div>
            <button onClick={() => { props.parentHandler('chilissd') }}>Navigate to parent component</button>
        </div>
    )
}

export default child
