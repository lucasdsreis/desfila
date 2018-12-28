import {
    CHANGE_EMAIL_CLIENT_LOGIN,
    CHANGE_PASSWORD_CLIENT_LOGIN,
    SET_CLIENT,
    CHANGE_CLIENT_LATITUDE,
    CHANGE_CLIENT_LONGITUDE,
    CHANGE_CLIENT_LOGIN
} from './actions'

export default (

    state = {
        clientEmail: '',
        clientPassword: '',
        client: {},
        latitude: 0,
        longitude: 0,
        clientLogin: false
    }

    , action) => {
    switch (action.type) {
        case CHANGE_EMAIL_CLIENT_LOGIN:
            return { ...state, clientEmail: action.payload }
        case CHANGE_PASSWORD_CLIENT_LOGIN:
            return { ...state, clientPassword: action.payload }
        case SET_CLIENT:
            return { ...state, client: action.payload }
        case CHANGE_CLIENT_LATITUDE:
            return { ...state, latitude: action.payload }
        case CHANGE_CLIENT_LONGITUDE:
            return { ...state, longitude: action.payload }
        case CHANGE_CLIENT_LOGIN:
            return { ...state, clientLogin: action.payload }
        default:
            return state
    }
}