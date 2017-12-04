// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { coinSelector, coinExtrasSelector } from '../selectors/coinSelectors'

import type { Coin } from '../services/coinMarketCap'
import type { Coin as CoinExtra } from '../services/cryptoCompareMapper'

type Props = {
  coins: Array<Coin>,
  coinExtras: {
    [key: string]: CoinExtra,
  },
}

class Root extends PureComponent<Props> {
  render() {
    const { coins, coinExtras } = this.props
    console.log(coins)
    console.log(coinExtras)

    if (!coins || !coinExtras) {
      return null
    }

    return (
      <div className="Root">
        <table>
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>Volume (24h)</th>
              <th>Supply (av/max)</th>
              <th>Market cap (USD)</th>
              <th>Change (1h)</th>
              <th>Change (24h)</th>
              <th>Change (7d)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr key={coin.id}>
                <td>{coinExtras[coin.symbol] && <img alt="logo" width="32" height="32" src={coinExtras[coin.symbol].imageUrl} />}</td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.priceUsd}</td>
                <td>{coin.volumeUsd}</td>
                <td>{coin.availableSupply} / {coin.maxSupply}</td>
                <td>{coin.marketCapUsd}</td>
                <td>{coin.change1h} %</td>
                <td>{coin.change24h} %</td>
                <td>{coin.change7d} %</td>

              </tr>))
            }
          </tbody>
        </table>

      </div>
    )
  }
}

export default connect(state => ({
  coins: coinSelector(state),
  coinExtras: coinExtrasSelector(state),
}))(Root)
