import React from 'react'
import reactDom from 'react-dom'

import { applyMiddleware, combineReducers, createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import logger from 'redux-logger'
import ContactPage from './src/ContactPage'
import { reducer as formReducer } from 'redux-form'
import { HashRouter as Router, Route } from 'react-router-dom'

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
  reducer//, 
  // applyMiddleware(logger)
)

/*
 * React + Redux
 */

const TestPage = () => <h1>Test Page</h1>

reactDom.render(
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path='/' component={ContactPage} />
        <Route path='/test' component={TestPage} />
      </div>
    </Provider>
  </Router>,
  document.getElementById('app')
)
