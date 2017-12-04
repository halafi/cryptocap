// @flow
import * as R from 'ramda'

type Input = {
  id: string,
  name: string,
  symbol: string,
  rank: string, // number
  price_usd: string, // number
  price_btc: string, // number
  "24h_volume_usd": string, // number
  market_cap_usd: string, // number
  available_supply: string, // number
  total_supply: string, // number
  max_supply: string, // number
  percent_change_1h: string, // number
  percent_change_24h: string, // number
  percent_change_7d: string, // number
  last_updated: string, // number
}

export type Coin = {
  id: string,
  name: string,
  symbol: string,
  priceUsd: number,
  priceBtc: number,
  volumeUsd: number,
  marketCapUsd: number,
  availableSupply: number,
  totalSupply: number,
  maxSupply: number,
  change1h: number,
  change24h: number,
  change7d: number,
  updated: number,
}

export default function coinMarketCapMapper(input: Input): Array<Coin> {
  return R.map(x => ({
    id: x.id,
    name: x.name,
    symbol: x.symbol,
    priceUsd: Number(x.price_usd),
    priceBtc: Number(x.price_btc),
    volumeUsd: Number(x['24h_volume_usd']),
    marketCapUsd: Number(x.market_cap_usd),
    availableSupply: Number(x.available_supply),
    totalSupply: Number(x.total_supply),
    maxSupply: Number(x.max_supply),
    change1h: Number(x.percent_change_1h),
    change24h: Number(x.percent_change_24h),
    change7d: Number(x.percent_change_7d),
    updated: Number(x.last_updated),
  }))(input)
}
