import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false
}


function Switcher(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS: {
            console.log('REDUCER', action.payload)
            const newState = {...state}
            newState.isLoggedIn = true
            newState.token = action.payload.token
            newState.user = action.payload.user
            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = {...initialState}
            return newState;
        }

        default: {
            return state;
        }
    }
}

export default Switcher;