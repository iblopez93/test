import React from 'react'
import ListField from './ListField'
import UserSearch from './UserSearch'

function UserList() {
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <UserSearch></UserSearch>
            <div className='row rounded shadow col-auto col-md-auto'>
                <div className='justify-content-center justify-content-md-center'>
                    <div className='col-4 alig-self-center'>
                        <ListField></ListField>

                    </div>

                </div>
                <div className='row justify-content-center justify-content-md-center'>
                    <div className='col-auto col-md-auto p-2 mb-2'>
                        <button className='btn btn-primary rounded shadow'>Ver detalles</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserList
