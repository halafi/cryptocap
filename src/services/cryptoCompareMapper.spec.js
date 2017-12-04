import { getSortedKeysBySortOrder } from './cryptoCompareMapper'

describe('helpers', () => {
  test('getSortedKeys', () => {
    const input = {
      FOO: {
        sortOrder: 374,
      },
      BAR: {
        sortOrder: 1,
      },
      ABC: {
        sortOrder: 500,
      },
      DEF: {
        sortOrder: 2,
      },
      123: {
        sortOrder: 123,
      },
    }
    const output = ['BAR', 'DEF', '123', 'FOO', 'ABC']
    expect(getSortedKeysBySortOrder(input)).toEqual(output)
  })
})
