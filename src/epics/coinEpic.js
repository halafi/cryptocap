import 'rxjs'
import { FETCH_COIN_LIST, fetchCoinListFulfilled } from '../actions/index'
import api from '../services/cryptoCompare'
import cryptoCompareMapper from '../services/cryptoCompareMapper'

const fetchCoinListEpic = action$ =>
  action$
    .ofType(FETCH_COIN_LIST)
    .flatMap(action => api.getCoinList()
      .map(cryptoCompareMapper)
      .map(payload => fetchCoinListFulfilled(payload)))

export default fetchCoinListEpic
