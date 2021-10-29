import React from 'react'
import ListItem from './ListItem'

function ListField() {
    return (
        <div>
            <select className='form-select'>
                <option defaultValue={0} value="0">Seleccione el usuario</option>
                <ListItem></ListItem>
            </select>
        </div >
    )
}

export default ListField
