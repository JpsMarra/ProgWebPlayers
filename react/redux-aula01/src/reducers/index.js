import textReducer from './textReducer';
import statusReducer from './statusReducer'
import { combineReducers } from 'redux';
import jogadorReducer from './jogadorReducer';


const Reducers = combineReducers({
    textReducer: textReducer,
    statusReducer: statusReducer,
    jogadorReducer: jogadorReducer
});

export default Reducers;