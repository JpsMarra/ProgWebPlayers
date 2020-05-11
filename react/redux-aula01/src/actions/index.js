import * as ACTION_TYPES from '../actions/action_types'

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const change_text = (text) => {
    return {
        type: ACTION_TYPES.CHANGE_TEXT,
        payload: text
    }
}

export const buscaJogadoresBegin = () => {
    return {
        type: ACTION_TYPES.BUSCA_JOGADORES_BEGIN
    }
}

export const buscaJogadoresSuccess = (jogadores) => {
    return {
        type: ACTION_TYPES.BUSCA_JOGADORES_SUCCESS,
        payload: { jogadores }
    }
}

export const buscaJogadoresFailure = (error) => {
    return {
        type: ACTION_TYPES.BUSCA_JOGADORES_FAILURE,
        payload: error
    }
}
