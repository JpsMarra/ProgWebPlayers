import { 
    BUSCA_JOGADORES_BEGIN,
    BUSCA_JOGADORES_SUCCESS,
    BUSCA_JOGADORES_FAILURE }  from '../actions/action_types';

const estadoInicial = {
    dados: [],
    error: null,
    loading: false
}

export default (state = estadoInicial, action) => {

    switch (action.type) {
        case BUSCA_JOGADORES_BEGIN:
            return { 
                ...state, 
                loading: true,
                error: null
            }
        
        case BUSCA_JOGADORES_SUCCESS: 
            return {
                ...state,
                loading: false,
                dados: action.payload.jogadores
            }

        case BUSCA_JOGADORES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                dados: []
            }

        default:
            return state;

    }

}
