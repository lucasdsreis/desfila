import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Router from './Router'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const App = () => {

    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))
    )

    return (
        <Provider store={store}>
            <Router />
        </Provider>

    )
}

export default App