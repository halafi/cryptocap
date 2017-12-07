// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { coinSelector, coinExtrasSelector } from '../selectors/coinSelectors'
import Dashboard from '../components/Dashboard'

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

    if (!coins || !coinExtras) {
      return null
    }

    return (
      <Dashboard
        coins={coins}
        coinExtras={coinExtras}
      />
    )
  }
}

export default connect(state => ({
  coins: coinSelector(state),
  coinExtras: coinExtrasSelector(state),
}))(Root)
