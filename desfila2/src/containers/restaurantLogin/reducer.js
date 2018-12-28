import {
    CHANGE_CNPJ_RESTAURANT_LOGIN,
    CHANGE_PASSWORD_RESTAURANT_LOGIN,
    SET_RESTAURANT
} from './actions'

export default (

    state = {
        cnpj: '',
        password: '',
        login: false, 
        restaurant: {}
    }

    , action) => {
    switch (action.type) {
        case CHANGE_CNPJ_RESTAURANT_LOGIN:
            return {...state, cnpj: action.payload}
        case CHANGE_PASSWORD_RESTAURANT_LOGIN:
            return {...state, password: action.payload}
        case SET_RESTAURANT:
            return {...state, restaurant: action.payload}
        default:
            return state
    }
}