import { combineReducers } from "redux";
import jogadorReducer from "./jogadorReducer";

const Reducers = combineReducers({
    jogador: jogadorReducer
})

export default Reducers;
