import { combineReducers } from'redux'
import restaurantCreateAccountReducer from './containers/restaurantCreateAccount/reducer'
import restaurantLoginReducer from './containers/restaurantLogin/reducer'
import clientLoginReducer from './containers/clientLogin/reducer'
import clientCreateAccountReducer from './containers/clientCreateAccount/reducer'
import appMapReducer from './containers/map/reducer'
import clientLineReducer from './containers/clientLine/reducer'
import clientSearchReducer from './containers/clientSearch/reducer'

export default combineReducers({
    restaurantCreateAccount: restaurantCreateAccountReducer,
    restaurantLogin: restaurantLoginReducer,
    clientLogin: clientLoginReducer,
    clientCreateAccount: clientCreateAccountReducer,
    appMap: appMapReducer,
    clientLine: clientLineReducer,
    clientSearch: clientSearchReducer
})