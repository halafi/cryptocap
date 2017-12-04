import {
  FETCH_COIN_LIST,
  FETCH_COIN_LIST_DONE,
  FETCH_COIN_EXTRAS,
  FETCH_COIN_EXTRAS_DONE,
} from '../actions'

const initialState = {
  coins: null,
  coinExtras: null,
}

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_LIST:
      return {
        ...state,
        coins: null,
      }
    case FETCH_COIN_LIST_DONE:
      return {
        ...state,
        coins: action.payload,
      }
    case FETCH_COIN_EXTRAS:
      return {
        ...state,
        coinExtras: null,
      }
    case FETCH_COIN_EXTRAS_DONE:
      return {
        ...state,
        coinExtras: action.payload,
      }
    default:
      return state
  }
}
