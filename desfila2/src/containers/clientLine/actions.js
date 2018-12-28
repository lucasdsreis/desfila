import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'

export const OPEN_DIALOG = 'open_dialog'
export const CLOSE_DIALOG = 'close_dialog'
export const CHANGE_NUMBER_OF_PEOPLE = 'change_number_of_people'

export const openDialog = () => {
    return dispatch => {
        dispatch({
            type: OPEN_DIALOG,
            payload: true
        })
    }
}

export const closeDialog = () => {
    return dispatch => {
        dispatch({
            type: CLOSE_DIALOG,
            payload: false
        })
        dispatch({
            type: CHANGE_NUMBER_OF_PEOPLE,
            payload: 0
        })
    }
}

export const changeNumberOfPeople = (number) =>{
    return dispatch =>{
        dispatch({
            type: CHANGE_NUMBER_OF_PEOPLE,
            payload: number
        })
    }
}

export const includeClientOnLine = (infos) =>{
    return dispatch =>{
        axios.post('clients/includeClientOnLine', {infos})
        .then(response =>{
            console.log(response.data)
            if(response.data === 'OK'){
                dispatch({
                    type: CLOSE_DIALOG,
                    payload: false
                })
                Actions.wait()
            }
        })
    }
}