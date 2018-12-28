import {
    CHANGE_NAME_CLIENT_CREATE_LOGIN,
    CHANGE_CELLPHONE_CLIENT_CREATE_LOGIN,
    CHANGE_CONFIRMED_PASSWORD_CLIENT_CREATE_LOGIN,
    CHANGE_EMAIL_CLIENT_CREATE_LOGIN,
    CHANGE_PASSWORD_CLIENT_CREATE_LOGIN,
    CHANGE_SURNAME_CLIENT_CREATE_LOGIN,
    SET_CLIENT,
    CHANGE_CLIENT_LOGIN
} from './actions'

export default (

    state = {
        email: '',
        password: '',
        name: '',
        surname: '',
        cellphone: '',
        confirmedPassword: '',
        client: {},
        clientLogin: false
    }

    , action) => {
    switch (action.type) {
        case CHANGE_CELLPHONE_CLIENT_CREATE_LOGIN:
            return { ...state, cellphone: action.payload }
        case CHANGE_CONFIRMED_PASSWORD_CLIENT_CREATE_LOGIN:
            return { ...state, confirmedPassword: action.payload }
        case CHANGE_EMAIL_CLIENT_CREATE_LOGIN:
            return { ...state, email: action.payload }
        case CHANGE_NAME_CLIENT_CREATE_LOGIN:
            return { ...state, name: action.payload }
        case CHANGE_PASSWORD_CLIENT_CREATE_LOGIN:
            return { ...state, password: action.payload }
        case CHANGE_SURNAME_CLIENT_CREATE_LOGIN:
            return { ...state, surname: action.payload }
        case SET_CLIENT:
            return { ...state, client: action.payload }
        case CHANGE_CLIENT_LOGIN:
            return { ...state, clientLogin: action.payload }
        default:
            return state
    }
}