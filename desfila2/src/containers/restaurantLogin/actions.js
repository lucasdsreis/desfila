import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'
export const CHANGE_CNPJ_RESTAURANT_LOGIN = 'change_cnpj_restaurant_login'
export const CHANGE_PASSWORD_RESTAURANT_LOGIN = 'change_password_restaurant_login'
export const SET_RESTAURANT = 'set_restaurant'


export const changeCnpjLogin = (cnpj) => {
    return {
        type: CHANGE_CNPJ_RESTAURANT_LOGIN,
        payload: cnpj
    }
}

export const changePasswordLogin = (password) => {
    return {
        type: CHANGE_PASSWORD_RESTAURANT_LOGIN,
        payload: password
    }
}


export const restaurantLogin = (infos) =>{
    return dispatch =>{
        axios.post('restaurants/restaurantLogin', infos)
            .then(response => {
                if(response.data === 'Login ou senha incorretos'){
                    Alert.alert(
                        'Erro',
                        'Login ou senha incorreto(s)',
                        [
                          {text: 'OK'}
                        ],
                        { cancelable: false }
                      )
                }
                else{
                    dispatch({
                        type: SET_RESTAURANT,
                        payload: response.data
                    })
                    Actions.restaurantMain()
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}