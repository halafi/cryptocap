import * as R from 'ramda'

export const sortObject = R.compose(
  R.fromPairs,
  R.sort((a, b) => {
    if (a[1].sortOrder > b[1].sortOrder) {
      return 1
    }
    if (a[1].sortOrder < b[1].sortOrder) {
      return -1
    }
    return 0
  }),
  R.toPairs,
)
