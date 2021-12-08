import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import dataReducer from './dataReducer';
import nameReducer from './nameReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    name: nameReducer,
    fetchData : dataReducer
})

export default allReducers;