import React from 'react'
import ListItem from './ListItem'

function ListField({ users, setOptSelected }) {
    const optSelectHandle = (e) => {
        console.log(e.target.value);
        setOptSelected(e.target.value)
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
