import 'rxjs'
import { combineEpics } from 'redux-observable'
import { FETCH_COIN_LIST, FETCH_COIN_EXTRAS, fetchCoinListFulfilled, fetchCoinExtrasFulfilled } from '../actions/index'
import cryptoCompareApi from '../services/cryptoCompare'
import coinMarketCapApi from '../services/coinMarketCap'
import cryptoCompareMapper from '../services/cryptoCompareMapper'
import coinMarketCapMapper from '../services/coinMarketCapMapper'

const fetchCoinListEpic = action$ =>
  action$
    .ofType(FETCH_COIN_LIST)
    .flatMap(() => coinMarketCapApi.getCoinList()
      .map(coinMarketCapMapper)
      .map(payload => fetchCoinListFulfilled(payload)))

const fetchCoinExtrasEpic = action$ =>
  action$
    .ofType(FETCH_COIN_EXTRAS)
    .flatMap(() => cryptoCompareApi.getCoinList()
      .map(cryptoCompareMapper)
      .map(payload => fetchCoinExtrasFulfilled(payload)))

export default combineEpics(
  fetchCoinListEpic,
  fetchCoinExtrasEpic,
)
