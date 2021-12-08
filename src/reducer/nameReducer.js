const nameReducer = (state = {
    firstName: 'Ram',
    lastName: 'Singh'
}, action) => {
    switch(action.type) {
        case "CHANGEFIRSTNAME":
            return {...state, firstName: action.payload};
        case "CHANGELASTNAME":
            return {...state, lastName: action.payload};
        default:
            return state;
    }
}

export default nameReducer;