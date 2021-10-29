import React from 'react'

function ListItem({ user }) {
    console.log(user)
    return (
        <>
            <option key={user.id} value={user.id}> {user.name}</option>

        </>
    )
}

export default ListItem
