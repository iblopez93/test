import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ListField from './ListField'
import UserSearch from './UserSearch'

function UserList() {
    const [users, setUsers] = useState([])
    const [optSelected, setOptSelected] = useState([])
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
    useEffect(() => {
        getUsers()
    }, [])
    const history = useHistory();
    const handleOnClick = () => history.push('/user/' + optSelected);
    return (
        <div>
            <h1 className='mx-auto text-center'>Lista de usuarios</h1>
            <UserSearch></UserSearch>
            <div className='rounded w-50 mx-auto justify-content-center'>
                <div className='row justify-content-center justify-content-xs-center'>
                    <div className='col-auto alig-self-center col-xs-auto p-1 mb-3 bg-body'>
                        <ListField users={users} setOptSelected={setOptSelected}></ListField>

                    </div>

                </div>
                <div className='row justify-content-center justify-content-xs-center'>
                    <div className='col-auto col-xs-auto p-3 mb-3'>
                        <button onClick={handleOnClick} className='btn btn-primary rounded shadow'>Ver detalles</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserList
