import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchData from '../functions/fetchData'

function FetchData() {
    const obj = useSelector((state) => state.fetchData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div>
            I will fetch data over here
            <br/>
            <br/>
            <img src={obj.data.avatar} alt="img"/>
            <br/>
            {obj.data.first_name + " " + obj.data.first_name}
        </div>
    )
}

export default FetchData
