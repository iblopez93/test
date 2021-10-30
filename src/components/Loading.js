import React from 'react'

function Loading({ isLoading }) {
    if (isLoading)
        return (
            <div className="text-center p-2 m-2" >
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div >
        )
    else
        return (
            <>
            </>
        )
}

export default Loading
