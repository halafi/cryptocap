// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { coinSelector } from '../selectors/coinSelectors'

import type { Output as Coins } from '../services/cryptoCompareMapper'

type Props = {
  coins: Coins,
}

class Root extends PureComponent<Props> {
  render() {
    const { coins } = this.props

    if (!coins) {
      return null
    }

    return (
      <div className="Root">
        <table>
          <thead>
            <th>Index</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Logo</th>
            <th>Link</th>

          </thead>
          <tbody>
            {Object.keys(coins).map((key, i) => (
              <tr key={coins[key].id}>
                <td>{i}</td>
                <td>{coins[key].name}</td>
                <td>{coins[key].symbol}</td>
                <td><img alt="logo" width="32" height="32" src={coins[key].imageUrl} /></td>
                <td><a href={coins[key].linkUrl}>{coins[key].linkUrl}</a></td>
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
}))(Root)
