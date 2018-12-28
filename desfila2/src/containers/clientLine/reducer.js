import {
    OPEN_DIALOG,
    CLOSE_DIALOG,
    CHANGE_NUMBER_OF_PEOPLE
} from './actions'

export default (

    state = {
        dialogInput: false,
        numberOfPeople: 0
    }

    , action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return { ...state, dialogInput: action.payload }
        case CLOSE_DIALOG:
            return { ...state, dialogInput: action.payload }
        case CHANGE_NUMBER_OF_PEOPLE:
            return { ...state, numberOfPeople: action.payload }
        default:
            return state
    }
}