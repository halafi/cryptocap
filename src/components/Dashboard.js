// @flow

import React from 'react'
import styled from 'styled-components'

import { formatPercentage, formatUsd } from '../utils/formatters'

import type { Coin } from '../services/coinMarketCap'
import type { Coin as CoinExtra } from '../services/cryptoCompareMapper'

type Props = {
  coins: Array<Coin>,
  coinExtras: {
    [key: string]: CoinExtra,
  },
}

const DashboardDiv = styled.div`
  margin: auto;
  width: 50%;
  font-family: 'Roboto', sans-serif;
`

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    text-align: right;
    padding: 8px;
    &:first-child {
      text-align: left;
    }
  }
`

const CoinIcon = styled.img`
  width: 16px;
  height: 16px;
`

const PriceChange = styled.span`
  color: ${props => (props.positive ? 'green' : 'red')};
`

const Dashboard = ({ coins, coinExtras }: Props) => (
  <DashboardDiv>
    <Table>
      <thead>
        <tr>
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
        {coins.map(coin => (
          <tr key={coin.id}>
            <td>
              <CoinIcon
                alt="logo"
                src={
                  coinExtras[coin.symbol]
                    ? coinExtras[coin.symbol].imageUrl
                    : './images/missing_icon.png'
                }
              />{' '}
              {coin.name}
            </td>
            <td>{coin.symbol}</td>
            <td>{formatUsd(coin.priceUsd)}</td>
            <td>{formatUsd(coin.marketCapUsd, 0)}</td>
            <td>{formatUsd(coin.volumeUsd)}</td>
            <td>
              <PriceChange positive={coin.change1h >= 0}>
                {formatPercentage(coin.change1h)}
              </PriceChange>
            </td>
            <td>
              <PriceChange positive={coin.change24h >= 0}>
                {formatPercentage(coin.change24h)}
              </PriceChange>
            </td>
            <td>
              <PriceChange positive={coin.change7d >= 0}>
                {formatPercentage(coin.change7d)}
              </PriceChange>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </DashboardDiv>
)

export default Dashboard
