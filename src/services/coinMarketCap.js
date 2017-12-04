import { Observable } from 'rxjs/Observable'

const api = {
  getCoinList() {
    const request = fetch('https://api.coinmarketcap.com/v1/ticker/').then(res => res.json())
    return Observable.from(request) // wrap promise
  },
}

export default api
