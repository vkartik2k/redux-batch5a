const dataReducer = (state = {
    data: {},
    isLoading: false
}, action) => {
    switch(action.type) {
        case "SETFETCHDATA":
            return {data: action.payload, isLoading: false};
        case "DATALOADING":
            return {...state, isLoading:true};
        default:
            return state;
    }
}

export default dataReducer;