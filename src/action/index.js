export const INCREMENT = () => {
    // return our action
    return {
        type: 'INCREMENT'
    }
} 

export const DECREMENT = () => {
    // return our action
    return {
        type: 'DECREMENT'
    }
} 

export const changeFirstName = (firstname) => {
    return {
        type: "CHANGEFIRSTNAME",
        payload: firstname
    }
}

export const changeLastName = (lastname) => {
    return {
        type: "CHANGELASTNAME",
        payload: lastname
    }
}

export const setFetchData = (data) => {
    return {
        type: "SETFETCHDATA",
        payload: data
    }
}

export const dataLoading = () => {
    return {
        type: "DATALOADING"
    }
}