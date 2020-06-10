import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LoginActionTypes,
    SET_USERNAME,
    LoginState,
} from './Types';

const initialState: LoginState = {
    userName: '',
    inProgress: false,
    isLoggedIn: false,
};

export const loginReducer = (
    state = initialState,
    action: LoginActionTypes,
): LoginState => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, userName: action.userName };
        case LOGIN_USER_REQUEST:
            return { ...state, inProgress: true, isLoggedIn: false };
        case LOGIN_USER_FAILURE:
            return { ...state, inProgress: false, isLoggedIn: false };
        case LOGIN_USER_SUCCESS:
            return { ...state, inProgress: false, isLoggedIn: true };
        default:
            return state;
    }
};
