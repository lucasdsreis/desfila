import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'

export const CHANGE_EMAIL_CLIENT_CREATE_LOGIN = 'change_email_client_create_login'
export const CHANGE_PASSWORD_CLIENT_CREATE_LOGIN = 'change_password_client_create_login'
export const CHANGE_CELLPHONE_CLIENT_CREATE_LOGIN = 'change_cellphone_client_create_login'
export const CHANGE_CONFIRMED_PASSWORD_CLIENT_CREATE_LOGIN = 'change_confirmed_password_client_create_login'
export const CHANGE_NAME_CLIENT_CREATE_LOGIN = 'change_name_client_create_login'
export const CHANGE_SURNAME_CLIENT_CREATE_LOGIN = 'change_surname_client_create_login'
export const SET_CLIENT = 'set_client'
export const CHANGE_CLIENT_LOGIN = 'change_client_login'

export const changeEmailCreateLogin = (email) => {
    return {
        type: CHANGE_EMAIL_CLIENT_CREATE_LOGIN,
        payload: email
    }
}

export const changePasswordCreateLogin = (password) => {
    return {
        type: CHANGE_PASSWORD_CLIENT_CREATE_LOGIN,
        payload: password
    }
}

export const changeNameCreateLogin = (name) => {
    return {
        type: CHANGE_NAME_CLIENT_CREATE_LOGIN,
        payload: name
    }
}

export const changeSurnameCreateLogin = (surname) => {
    return {
        type: CHANGE_SURNAME_CLIENT_CREATE_LOGIN,
        payload: surname
    }
}

export const changeConfirmedPasswordCreateLogin = (confirmedPassword) => {
    return {
        type: CHANGE_CONFIRMED_PASSWORD_CLIENT_CREATE_LOGIN,
        payload: confirmedPassword
    }
}

export const changeCellphoneCreatelogin = (cellphone) => {
    return {
        type: CHANGE_CELLPHONE_CLIENT_CREATE_LOGIN,
        payload: cellphone
    }
}

export const createClientAccount = (infos) => {
    return dispatch => {

        axios.post('clients/createClientAccount', infos)
            .then(response => {
                if (response.data === 'Preencha todos os campos') {
                    Alert.alert(
                        'Erro',
                        response.data,
                        [
                            { text: 'OK' }
                        ],
                        { cancelable: false }
                    )
                }
                else if (response.data === 'As senhas estão diferentes, preencha-as novamente') {
                    Alert.alert(
                        'Erro',
                        response.data,
                        [
                            { text: 'OK' }
                        ],
                        { cancelable: false }
                    )
                }
                else if (response.data === 'Não foi possível criar a conta, verifique se todos os campos estão preenchidos corretamente.') {
                    Alert.alert(
                        'Erro',
                        response.data,
                        [
                            { text: 'OK' }
                        ],
                        { cancelable: false }
                    )
                }
                else if (response.data === 'Email já cadastrado') {
                    Alert.alert(
                        'Erro',
                        response.data,
                        [
                            { text: 'OK' }
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
                    Alert.alert(
                        'Sucesso',
                        'Conta criada com sucesso',
                        [
                            { text: 'Login', onPress: () => Actions.clientMain() }
                        ],
                        { cancelable: false }
                    )
                }
            })
    }
}