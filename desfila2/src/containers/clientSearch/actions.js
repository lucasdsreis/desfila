import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'

export const CHANGE_SEARCH = 'change_search'
export const CHANGE_SEARCHED_RESTAURANTS = 'change_searched_restaurants'
export const CHANGE_SEARCH_NUMBER_OF_PEOPLE = 'change_number_number_of_people'
export const OPEN_SEARCH_DIALOG = 'open_search_dialog'
export const CLOSE_SEARCH_DIALOG = 'close_search_dialog'
export const SELECT_SEARCH_RESTAURANT = 'select_search_restaurant'

export const changeSearch = (value) => {
    return dispatch =>{
        dispatch({
            type: CHANGE_SEARCH,
            payload: value
        })
    }
}

export const searchRestaurant = (restaurant) => {
    return dispatch => {
        axios.post('restaurants/searchRestaurant', {restaurant})
            .then(response => {
                dispatch({
                    type: CHANGE_SEARCHED_RESTAURANTS,
                    payload: response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const changeNumberOfPeople = (number) =>{
    return dispatch =>{
        dispatch({
            type: CHANGE_SEARCH_NUMBER_OF_PEOPLE,
            payload: number
        })
    }
}

export const selectRestaurant = (id) => {
    return dispatch => {

    }
}

export const openDialog = (item) => {
    return dispatch => {
        dispatch({
            type: OPEN_SEARCH_DIALOG,
            payload: true
        })
        dispatch({
            type: SELECT_SEARCH_RESTAURANT,
            payload: item
        })
    }
}

export const closeDialog = () => {
    return dispatch => {
        dispatch({
            type: CLOSE_SEARCH_DIALOG,
            payload: false
        })
        dispatch({
            type: CHANGE_SEARCH_NUMBER_OF_PEOPLE,
            payload: 0
        })
        dispatch({
            type: SELECT_SEARCH_RESTAURANT,
            payload: {}
        })
    }
}

export const includeClientOnLine = (infos) =>{
    return dispatch =>{
        axios.post('clients/includeClientOnLine', {infos})
        .then(response =>{
            if(response.data === 'OK'){
                dispatch({
                    type: CLOSE_SEARCH_DIALOG,
                    payload: false
                })
                Actions.wait()
            }
        })
    }
}