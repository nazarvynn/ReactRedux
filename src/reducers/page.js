import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constatns/Page'

const initialState = {
    year: 2016,
    photos: [],
    loading: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, loading: true };

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, loading: false };

        default:
            return state;
    }
}