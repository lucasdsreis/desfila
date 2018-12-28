import {
    GET_RESTAURANTS,
    SET_MAP_RESTAURANT
} from './actions'

export default (

    state = {
        restaurants: [],
        choosenRestaurant: {}
    }

    , action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return { ...state, restaurants: action.payload }
        case SET_MAP_RESTAURANT:
            return { ...state, choosenRestaurant: action.payload }
        default:
            return state
    }
}