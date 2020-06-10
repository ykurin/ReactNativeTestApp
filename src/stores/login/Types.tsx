export const SET_USERNAME = 'SET_USERNAME';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export interface LoginState {
    userName: string;
    inProgress: boolean;
    isLoggedIn: boolean;
}

interface SetUserName {
    type: typeof SET_USERNAME;
    userName: string;
}

interface LoginUserRequest {
    type: typeof LOGIN_USER_REQUEST;
}

interface LoginUserFailure {
    type: typeof LOGIN_USER_FAILURE;
}

interface LoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS;
}

export type LoginActionTypes =
    | SetUserName
    | LoginUserRequest
    | LoginUserFailure
    | LoginUserSuccess;
