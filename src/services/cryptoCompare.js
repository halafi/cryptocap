import { Observable } from 'rxjs/Observable'

const api = {
  getCoinList() {
    const request = fetch('https://min-api.cryptocompare.com/data/all/coinlist').then(res =>
      res.json(),
    )
    return Observable.from(request) // wrap promise
  },
}

export default api
