import React, { useState } from 'react'

function GetUsers() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users/"
        const resp = await fetch(url)
        const data = await resp.json();
        const users = data.map(u => {
            return {
                id: u.id,
                name: u.name,
            }
        })
        console.log(users)
        setUsers(users)
    }
    getUsers();

    return (
        <div>

        </div>
    )
}

export default GetUsers
