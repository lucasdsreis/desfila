import {
    CHANGE_SEARCH,
    CHANGE_SEARCHED_RESTAURANTS,
    CHANGE_SEARCH_NUMBER_OF_PEOPLE,
    OPEN_SEARCH_DIALOG,
    CLOSE_SEARCH_DIALOG,
    SELECT_SEARCH_RESTAURANT
} from './actions'

export default (

    state = {
        restaurants: [],
        search: '',
        dialogClientSearch: false,
        numberOfPeople: 0,
        restaurant: {}
    }

    , action) => {
    switch (action.type) {
        case CHANGE_SEARCH:
            return { ...state, search: action.payload }
        case CHANGE_SEARCHED_RESTAURANTS:
            return { ...state, restaurants: action.payload }
        case CHANGE_SEARCH_NUMBER_OF_PEOPLE:
            return { ...state, numberOfPeople: action.payload }
        case CLOSE_SEARCH_DIALOG:
            return { ...state, dialogClientSearch: action.payload }
        case OPEN_SEARCH_DIALOG:
            return { ...state, dialogClientSearch: action.payload }
        case SELECT_SEARCH_RESTAURANT:
            return {...state, restaurant: action.payload}
        default:
            return state
    }
}