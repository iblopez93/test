import React from 'react'
import ListItem from './ListItem'

function ListField({ users, setOptSelected, setDisabled }) {
    const optSelectHandle = (e) => {
        setOptSelected(e.target.value)
        if (e.target.value === '0') {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    }
    return (
        <div>
            <select onChange={optSelectHandle} className='form-select'>
                <option defaultValue={0} value="0">Seleccione el usuario</option>
                {users.map(user => (
                    <ListItem key={user.id} user={user} ></ListItem>))
                }
            </select>
        </div>
    )
}

export default ListField
