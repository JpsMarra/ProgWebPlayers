import * as ACTION_TYPES from '../actions/action_types'

const estadoInicial = {
    status: false
}

export default (state = estadoInicial, action) => {

    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return { ...state, status: true }

        case ACTION_TYPES.FAILURE:
            return { ...state, status: false }

        default:
            return state;

    }

}
