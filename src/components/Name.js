import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFirstName, changeLastName } from '../action';

function Name() {
    const name = useSelector((state) => state.name)
    const dispatch = useDispatch();

    return (
        <div>
            <input 
                placeholder="Enter first name" 
                onChange={(e) => dispatch(changeFirstName(e.target.value))}
                value = {name.firstName}
                />
            <input 
                placeholder="Enter last name"
                value = {name.lastName}
                onChange={(e) => dispatch(changeLastName(e.target.value))}
            />
        </div>
    )
}

export default Name
