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

const formatUsd = (input: number, fractions: number = 2): string =>
  input.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: fractions })

const formatPercentage = (input: number): string => `${input.toFixed(2)}%`

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
              <th>Market cap (USD)</th>
              <th>Volume (24h)</th>
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
                <td>{formatUsd(coin.priceUsd)}</td>
                <td>{formatUsd(coin.marketCapUsd, 0)}</td>
                <td>{formatUsd(coin.volumeUsd)}</td>
                <td>{formatPercentage(coin.change1h)}</td>
                <td>{formatPercentage(coin.change24h)}</td>
                <td>{formatPercentage(coin.change7d)}</td>

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
