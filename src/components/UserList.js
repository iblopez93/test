import React from 'react'
import ListField from './ListField'
import UserSearch from './UserSearch'

function UserList() {
    return (
        <div>
            <h1 className='mx-auto text-center'>Lista de usuarios</h1>
            <UserSearch></UserSearch>
            <div className='rounded w-50 mx-auto justify-content-center'>
                <div className='row justify-content-center justify-content-xs-center'>
                    <div className='col-auto alig-self-center col-xs-auto p-1 mb-3 bg-body'>
                        <ListField></ListField>

                    </div>

                </div>
                <div className='row justify-content-center justify-content-xs-center'>
                    <div className='col-auto col-xs-auto p-3 mb-3'>
                        <button className='btn btn-primary rounded shadow'>Ver detalles</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserList
