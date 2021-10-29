import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
    const { userId } = useParams();
    const [userData, setUserData] = useState([])

    const getUserData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users/" + userId
        const resp = await fetch(url)
        const datajson = await resp.json()
        console.log(datajson)
        setUserData(datajson)
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (

        <>
            <h1 className='mx-auto text-center'>Detalles del usuario: {userData.name}</h1>
            <div className='container p-4 m-5 mx-auto'>
                <div className='row'>
                    <div className='col-2 col-form-label'>
                        <label className='form-label'>Username:</label>
                    </div>

                    <div className='col-4'>
                        <input type="text" className=" form-control" disabled readOnly value={userData.username} />
                    </div>

                </div>

                <div className='row'>
                    <div className='col-2 col-form-label'>
                        <label className='form-label'>Email:</label>
                    </div>

                    <div className='col-4'>
                        <input type="text" className="  form-control" disabled readOnly value={userData.email} />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-2 col-form-label'>
                        <label className='form-label'>Street:</label>
                    </div>

                    <div className='col-4'>
                        <input type="text" className=" form-control" disabled readOnly value={userData.address.street} />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-2 col-form-label'>
                        <label className='form-label'>City:</label>
                    </div>

                    <div className='col-4'>
                        <input type="text" className="form-control" disabled readOnly value={userData.address.city} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserDetail
