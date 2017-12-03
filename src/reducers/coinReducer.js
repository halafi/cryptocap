import {
  FETCH_COIN_LIST,
  FETCH_COIN_LIST_DONE,
} from '../actions'

const initialState = {
  coins: null,
}

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_LIST:
      return {
        coins: null,
      }
    case FETCH_COIN_LIST_DONE:
      return {
        coins: action.payload,
      }
    default:
      return state
  }
}
