import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT } from '../action';

function Counter() {
    const counter = useSelector((state) => state.counter); //Reading value of state
    const dispatch = useDispatch(); // dispatching action => reducer or writing the state
    const name = useSelector((state) => state.name)


    return (
        <div>
            Hi, my name is {name.firstName + " " + name.lastName}
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(INCREMENT())}>Increment</button>
        </div>
    )
}

export default Counter
