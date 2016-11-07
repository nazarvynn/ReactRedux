import { SET_YEAR } from '../constatns/Page'

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    };
}