import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'

export const CHANGE_EMAIL_CLIENT_LOGIN = 'change_email_client_login'
export const CHANGE_PASSWORD_CLIENT_LOGIN = 'change_password_client_login'
export const SET_CLIENT = 'set_client'
export const CHANGE_CLIENT_LATITUDE = 'change_client_latitude'
export const CHANGE_CLIENT_LONGITUDE = 'change_client_longitude'
export const CHANGE_CLIENT_LOGIN = 'change_client_login'

export const changeEmailLogin = (email) => {
    return {
        type: CHANGE_EMAIL_CLIENT_LOGIN,
        payload: email
    }
}

export const changePasswordLogin = (password) => {
    return {
        type: CHANGE_PASSWORD_CLIENT_LOGIN,
        payload: password
    }
}

export const changeClientLatitude = (latitude) =>{
    return{
        type: CHANGE_CLIENT_LATITUDE,
        payload: latitude
    }
}

export const changeClientLongitude = (longitude) =>{
    return{
        type: CHANGE_CLIENT_LONGITUDE,
        payload: longitude
    }
}

export const clientLogin = (infos) =>{
    return dispatch =>{
        axios.post('clients/clientLogin', infos)
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
                        type: SET_CLIENT,
                        payload: response.data
                    })
                    dispatch({
                        type: CHANGE_CLIENT_LOGIN,
                        payload: true
                    })
                    Actions.clientMain()
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}