import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../constatns/Page'

const initialState = {
    year: 2016,
    photos: [],
    loading: false,
    error: ''
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, error: '', loading: true };

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, error: '', loading: false };

        case GET_PHOTOS_FAILED:
            return { ...state, error: action.payload.message, loading: false };

        default:
            return state;
    }
}