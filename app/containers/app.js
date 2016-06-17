import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import appReducer from '../reducers'
import TodoApp from './todoApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(appReducer)

export default function AppContainer() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
