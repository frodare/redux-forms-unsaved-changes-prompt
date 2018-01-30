import React from 'react'
import reactDom from 'react-dom'

import { applyMiddleware, combineReducers, createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import logger from 'redux-logger'
import ContactPage from './src/ContactPage'
import { reducer as formReducer } from 'redux-form'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/*
 * Redux
 */
const incrementAction = () => ({type: 'INCREMENT'})
const decrementAction = () => ({type: 'DECREMENT'})

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const reducer = combineReducers({
  counter: counterReducer,
  form: formReducer
})

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

/*
 * React + Redux
 */

reactDom.render(
  <Router>
    <Provider store={store}>
      <ContactPage />
    </Provider>
  </Router>,
  document.getElementById('app')
)
