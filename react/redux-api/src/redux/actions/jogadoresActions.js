import * as ACTION_TYPES_JOGADORES from './actionTypes/jogadoresActionTypes'
import api from '../../dbConnection/api'

export const listarJogadoresBegin = () => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN
    }
}

export const listarJogadoresSuccess = (jogadores) => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_SUCCESS,
        payload: { jogadores }
    }
}

export const listarJogadoresFailure = (error) => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_FAILURE,
        payload: { error }
    }
}

export function listarJogadores() {
    return dispatch => {
        dispatch(listarJogadoresBegin())

        api.get('/players')
                .then(response => {
                    console.log(response);
                    
                    dispatch(listarJogadoresSuccess(response.data))
                })
                .catch(error => {
                    dispatch(listarJogadoresFailure(error))
                })
    }
}

// TODO: implementar função de busca de jogador
export function buscarJogador(id) {
    
}