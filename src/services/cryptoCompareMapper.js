// @flow
import * as R from 'ramda'

type DataType = {
  [key: string]: {
    Id: string,
    Url: string,
    ImageUrl: string,
    Name: string,
    Symbol: string,
    TotalCoinSupply: string, // number
    TotalCoinsFreeFloat: string,
    Url: string,
  }
}

type Input = {
  BaseImageUrl: string,
  BaseLinkUrl: string,
  Data: DataType,
}

export type Output = {
  id: string,
  name: string,
  symbol: string,
  imageUrl: string,
  linkUrl: string,
}

export default function cryptoCompareMapper(input: Input): Output {
  const { BaseImageUrl, BaseLinkUrl, Data } = input

  const output = R.compose(
    R.reduce((acc, k) => {
      acc[k] = {
        id: Data[k].Id,
        name: Data[k].Name,
        symbol: Data[k].Symbol,
        imageUrl: BaseImageUrl + Data[k].ImageUrl,
        linkUrl: BaseLinkUrl + Data[k].Url,
      }
      return acc
    }, {}),
    R.keys,
  )(Data)

  return output
}
