export const FETCH_COIN_LIST = 'FETCH_COIN_LIST'
export const FETCH_COIN_LIST_DONE = 'FETCH_COIN_LIST_DONE'

export function fetchCoinList() {
  return {
    type: FETCH_COIN_LIST,
  }
}

export function fetchCoinListFulfilled(payload) {
  return {
    type: FETCH_COIN_LIST_DONE,
    payload,
  }
}
