import { combineReducers } from "redux";
import jogadorReducer from "./jogadorReducer";
import {reducer as reduxFormReducer} from 'redux-form'

const Reducers = combineReducers({
    jogador: jogadorReducer,
    form: reduxFormReducer
})

export default Reducers;
