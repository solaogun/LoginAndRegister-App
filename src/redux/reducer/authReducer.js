import ACTIONS from '../action/index'

const initialState = {
    user: [],
    isLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        default:
            return state

    }
}

export default authReducer