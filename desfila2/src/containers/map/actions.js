import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'
export const GET_RESTAURANTS = 'get_restaurants'
export const SET_MAP_RESTAURANT = 'set_map_restaurant'

export const getRestaurants = () =>{
    return dispatch =>{
        axios.get('restaurants/getRestaurants')
        .then(response =>{
            dispatch({
                type: GET_RESTAURANTS,
                payload: response.data
            })
        })
    }
}

export const selectRestaurant = (id) =>{
    return dispatch =>{
        axios.post('restaurants/selectRestaurant', {id})
        .then(response =>{
            dispatch({
                type: SET_MAP_RESTAURANT,
                payload: response.data
            })
            Actions.clientLine();
        })
    }
}