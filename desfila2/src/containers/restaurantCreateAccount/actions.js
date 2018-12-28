import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'
export const CHANGE_NEW_RESTAURANT_NAME = 'change_new_restaurant_name'
export const CHANGE_NEW_RESTAURANT_CNPJ = 'change_new_restaurant_cnpj'
export const CHANGE_NEW_RESTAURANT_STATE = 'change_new_restaurant_state'
export const CHANGE_NEW_RESTAURANT_CITY = 'change_new_restaurant_city'
export const CHANGE_NEW_RESTAURANT_ADRESS = 'change_new_restaurant_adress'
export const CHANGE_NEW_RESTAURANT_CONFIRMED_PASSWORD = 'change_new_restaurant_confirmed_password'
export const CHANGE_NEW_RESTAURANT_LATITUDE = 'change_new_restaurant_latitude'
export const CHANGE_NEW_RESTAURANT_LOGITUDE = 'change_new_restaurant_longitude'
export const CHANGE_NEW_RESTAURANT_PASSWORD = 'change_new_restaurant_password'
export const CHANGE_NEW_RESTAURANT_MODAL = 'change_new_restaurant_modal'
export const changeName = (name) => {
    return {
        type: CHANGE_NEW_RESTAURANT_NAME,
        payload: name
    }
}

export const changeCnpj = (cnpj) => {
    return {
        type: CHANGE_NEW_RESTAURANT_CNPJ,
        payload: cnpj
    }
}

export const changeCountryState = (state) => {
    return {
        type: CHANGE_NEW_RESTAURANT_STATE,
        payload: state
    }
}

export const changeCity = (city) => {
    return {
        type: CHANGE_NEW_RESTAURANT_CITY,
        payload: city
    }
}

export const changeAdress = (adress) => {
    return {
        type: CHANGE_NEW_RESTAURANT_ADRESS,
        payload: adress
    }
}

export const changeLatitude = (latitude) => {
    return {
        type: CHANGE_NEW_RESTAURANT_LATITUDE,
        payload: latitude
    }
}

export const changeLontitude = (longitude) => {
    return {
        type: CHANGE_NEW_RESTAURANT_LOGITUDE,
        payload: longitude
    }
}

export const changePassword = (password) => {
    return {
        type: CHANGE_NEW_RESTAURANT_PASSWORD,
        payload: password
    }
}

export const changeConfirmedPassword = (confirmedPassword) => {
    return {
        type: CHANGE_NEW_RESTAURANT_CONFIRMED_PASSWORD,
        payload: confirmedPassword
    }
}

export const changeModalVisible = (status) => {
    return {
        type: CHANGE_NEW_RESTAURANT_MODAL,
        payload: status
    }
}

export const createRestaurantAccount = (infos) => {
    return dispatch => {
        axios.post('restaurants/createRestaurantAccount', infos)
            .then(response => {
                if(response.data === 'Conta criada com sucesso')
                {
                    Alert.alert(
                        'Sucesso',
                        response.data,
                        [
                          {text: 'Login', onPress: () => Actions.restaurantMain()}
                        ],
                        { cancelable: false }
                      )
                }
                else{
                    Alert.alert(
                        'Erro',
                        response.data,
                        [
                          {text: 'OK'}
                        ],
                        { cancelable: false }
                      )
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

}