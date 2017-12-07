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
    SortOrder: string, // number
  }
}

type Input = {
  BaseImageUrl: string,
  BaseLinkUrl: string,
  Data: DataType,
}

export type Coin = {
  id: string,
  name: string,
  symbol: string,
  imageUrl: string,
  linkUrl: string,
}
//
// export const getSortedKeysBySortOrder = R.compose(
//   R.map(R.head),
//   R.sort((a, b) => {
//     if (a[1].sortOrder > b[1].sortOrder) {
//       return 1
//     }
//     if (a[1].sortOrder < b[1].sortOrder) {
//       return -1
//     }
//     return 0
//   }),
//   R.toPairs,
// )

export default function cryptoCompareMapper(input: Input): Coin {
  const { BaseImageUrl, BaseLinkUrl, Data } = input

  const output = R.compose(
    R.reduce((acc, k) => {
      acc[k] = {
        id: Data[k].Id,
        name: Data[k].Name,
        symbol: Data[k].Symbol,
        imageUrl: BaseImageUrl + Data[k].ImageUrl,
        linkUrl: BaseLinkUrl + Data[k].Url,
        // sortOrder: Number(Data[k].SortOrder),
      }
      return acc
    }, {}),
    R.keys,
  )(Data)

  return output
  // const sortedObjectKeys: Array = getSortedKeysBySortOrder(output)
  // const sortedCoins: Array = R.map(key => output[key])(sortedObjectKeys)

  // return sortedCoins
}
