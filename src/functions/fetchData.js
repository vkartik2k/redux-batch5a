import { dataLoading, setFetchData } from "../action";

function fetchData() {
    return function(dispatch) {
        console.log("Hello")
        dispatch(dataLoading())
        fetch('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(setFetchData(data.data))
        })
    }
}

export default fetchData;