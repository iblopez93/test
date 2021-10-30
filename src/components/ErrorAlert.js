import React from 'react'

function ErrorAlert({ message }) {
    if (message !== '') {
        return (
            <div>
                <p className='text-danger text-center alert'>{message}</p>
            </div>
        )
    } else {
        return (<></>)

    }
}

export default ErrorAlert
