import * as ACTION_TYPES from '../actions/action_types'

const estadoInicial = {
    text: 'Texto inicial'
}

export default (state = estadoInicial, action) => {

    switch (action.type) {
        case ACTION_TYPES.CHANGE_TEXT:
            return { ...state, text: action.payload }

        default:
            return state;

    }

}
