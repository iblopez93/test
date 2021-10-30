import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Loading from './Loading';
import ErrorAlert from './ErrorAlert';

function UserDetail() {
    const { userId } = useParams();
    console.log(userId)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [fetchError, setFetchError] = useState(false)

    const getUserData = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users/" + userId
            await fetch(url)
                .then((datajson) => datajson.json())
                .then((resp) => {

                    setName(resp.name)
                    setUsername(resp.username)
                    setEmail(resp.email)
                    setStreet(resp.address.street)
                    setCity(resp.address.city)
                    setIsLoading(false)
                })
        } catch (error) {
            setFetchError(true)
            setMessage('Hubo un error al cargar los datos. Compruebe su conexión')
        }

    }
    getUserData()

    const history = useHistory();
    const handleOnClick = () => history.push('/home/');
    return (

        <>
            <h1 className='mx-auto text-center'>Detalles del usuario: {name}</h1>
            <Loading isLoading={isLoading}></Loading>
            <ErrorAlert message={message}></ErrorAlert>
            <div className='container p-4 m-5 mx-auto '>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-3 col-md-2 col-lg-2 col-form-label align-self-center'>
                        <label className='form-label'>Username:</label>
                    </div>

                    <div className='col-12 col-sm-5 col-md-4 col-lg-3'>
                        <input type="text" className=" form-control" disabled readOnly value={username} />
                    </div>

                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-3 col-md-2 col-lg-2 col-form-label'>
                        <label className='form-label'>Email:</label>
                    </div>

                    <div className='col-12 col-sm-5 col-md-4 col-lg-3'>
                        <input type="text" className="  form-control" disabled readOnly value={email} />
                    </div>

                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-3 col-md-2 col-lg-2 col-form-label'>
                        <label className='form-label'>Street:</label>
                    </div>

                    <div className='col-12 col-sm-5 col-md-4 col-lg-3'>
                        <input type="text" className=" form-control" disabled readOnly value={street} />
                    </div>

                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-3 col-md-2 col-lg-2 col-form-label'>
                        <label className='form-label'>City:</label>
                    </div>

                    <div className='col-12 col-sm-5 col-md-4 col-lg-3'>
                        <input type="text" className="form-control" disabled readOnly value={city} />
                    </div>

                </div>
                <div className='row p-4 m-5 mx-auto d-flex justify-content-center'>

                    <div className='col-auto col-md-auto mx-auto align-center'>
                        <button onClick={handleOnClick} className='btn btn-primary rounded shadow'>Ir al listado</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UserDetail
