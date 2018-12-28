import {
    CHANGE_NEW_RESTAURANT_NAME, CHANGE_NEW_RESTAURANT_ADRESS, CHANGE_NEW_RESTAURANT_CITY, CHANGE_NEW_RESTAURANT_CNPJ,
    CHANGE_NEW_RESTAURANT_CONFIRMED_PASSWORD, CHANGE_NEW_RESTAURANT_LATITUDE, CHANGE_NEW_RESTAURANT_LOGITUDE,
    CHANGE_NEW_RESTAURANT_PASSWORD, CHANGE_NEW_RESTAURANT_STATE, CHANGE_NEW_RESTAURANT_MODAL
} from './actions'

export default (

    state = {
        name: '',
        cnpj: '',
        countryState: '',
        city: '',
        adress: '',
        latitude: '',
        longitude: '',
        password: '',
        confirmedPassword: '',
        modal: false
    }

    , action) => {
    switch (action.type) {
        case CHANGE_NEW_RESTAURANT_NAME:
            return { ...state, name: action.payload }
        case CHANGE_NEW_RESTAURANT_ADRESS:
            return { ...state, adress: action.payload }
        case CHANGE_NEW_RESTAURANT_CITY:
            return { ...state, city: action.payload }
        case CHANGE_NEW_RESTAURANT_CNPJ:
            return { ...state, cnpj: action.payload }
        case CHANGE_NEW_RESTAURANT_CONFIRMED_PASSWORD:
            return { ...state, confirmedPassword: action.payload }
        case CHANGE_NEW_RESTAURANT_LATITUDE:
            return { ...state, latitude: action.payload }
        case CHANGE_NEW_RESTAURANT_LOGITUDE:
            return { ...state, longitude: action.payload }
        case CHANGE_NEW_RESTAURANT_PASSWORD:
            return { ...state, password: action.payload }
        case CHANGE_NEW_RESTAURANT_STATE:
            return { ...state, countryState: action.payload }
        case CHANGE_NEW_RESTAURANT_MODAL:
            return { ...state, modal: action.payload }
        default:
            return state
    }
}