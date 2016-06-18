import ActionTypes from '../constants/actionTypes'

export function createItem(item) {
  return {
    type: ActionTypes.ITEM_CREATE,
    payload: { item }
  }
}
