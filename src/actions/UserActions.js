import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constatns/User'

export function handleLogin() {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });

        VK.Auth.login((resp) => {   // eslint-disable-line no-undef
            if (resp.session) {
                let username = resp.session.user.first_name;
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username
                });
            } else {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: new Error('Authorization failed'),
                    error: true
                });
            }
        }, 4);  //get access for photos
    };
}