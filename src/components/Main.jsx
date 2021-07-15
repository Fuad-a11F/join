import React from 'react'
import { Redirect } from 'react-router'

function Main({user}) {

    return (
        <div>
            {user.name} <br />
            {user.email}
        </div>
    )
}

export default Main
