import api from '../services/api'
import { buscaJogadoresBegin, buscaJogadoresSuccess, buscaJogadoresFailure } from "."

export function buscaJogadores() {
    return dispatch => {
        dispatch(buscaJogadoresBegin());
        fetch('http://localhost:3333/players')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                
                if (res.errors) {
                    throw(res.errors);
                }
                dispatch(buscaJogadoresSuccess(res));
                
                return res;
            })
            .catch(error => {
                dispatch(buscaJogadoresFailure(error))
            })
    }
}