export const formatUsd = (input: number, fractions: number = 2): string =>
  input.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: fractions })

export const formatPercentage = (input: number): string => `${input.toFixed(2)}%`
