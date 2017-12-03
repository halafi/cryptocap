// @flow
import * as R from 'ramda'
import { sortObject } from './helpers'

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
    SortOrder: string, // number
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
    sortObject,
    R.reduce((acc, k) => {
      acc[k] = {
        id: Data[k].Id,
        name: Data[k].Name,
        symbol: Data[k].Symbol,
        imageUrl: BaseImageUrl + Data[k].ImageUrl,
        linkUrl: BaseLinkUrl + Data[k].Url,
        sortOrder: Number(Data[k].SortOrder),
      }
      return acc
    }, {}),
    R.keys,
  )(Data)

  // TODO: refactor, remove sortOrder
  return output
}
