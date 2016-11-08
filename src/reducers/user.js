import { LOGIN_SUCCESS, LOGIN_FAILED } from '../constatns/User'

const initialState = {
    name: '',
    error: ''
};

export default function user(state = initialState, action) {

    switch (action) {
        case LOGIN_SUCCESS:
            return { ...state, name: action.payload, error: '' };

        case LOGIN_FAILED:
            return { ...state, error: action.payload.message };

        default:
            return state;
    }
}