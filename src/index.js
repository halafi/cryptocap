import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import * as actions from './actions'
import rootEpic from './epics'
import rootReducer from './reducers'
import Root from './containers/Root'

const epicMiddleware = createEpicMiddleware(rootEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(epicMiddleware),
  ),
)

store.dispatch(actions.fetchCoinList())

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('container'),
)
