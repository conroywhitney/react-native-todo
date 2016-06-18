import { __, evolve } from 'ramda'

import ActionTypes from '../constants/actionTypes'
import { concatAfter } from '../utils/ramdaExtensions'

const initialState = {
  items: []
}

export default function todo(state = initialState, action = {}) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ITEM_CREATE:
      return appendItem(state, payload)
    default:
      return state
  }
}

function appendItem(state, payload) {
  const { item } = payload

  return evolve(__, state)({
    items: concatAfter(item)
  })
}
