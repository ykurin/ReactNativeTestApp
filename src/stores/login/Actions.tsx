import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LoginActionTypes,
    SET_USERNAME,
} from './Types';
import { Dispatch } from 'redux';

export const setUsername = (userName: string): LoginActionTypes => {
    return { type: SET_USERNAME, userName: userName };
};

const loginUserRequest = (): LoginActionTypes => {
    return { type: LOGIN_USER_REQUEST };
};
const loginUserFailure = (): LoginActionTypes => {
    return { type: LOGIN_USER_FAILURE };
};
const loginUserSuccess = (): LoginActionTypes => {
    return { type: LOGIN_USER_SUCCESS };
};

export const loginUser = () => {
    return (dispatch: Dispatch) => {
        dispatch(loginUserRequest());

        return fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
            .then(() => dispatch(loginUserSuccess()))
            .catch(() => dispatch(loginUserFailure()));
    };
};
