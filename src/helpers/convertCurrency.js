export function convertCurrency(
  currenciesData,
  knownCurrency,
  knownValue,
  queryCurrency
) {
  if (knownValue === null) {
    return null;
  }

  const result =
    (knownValue / currenciesData[knownCurrency]) *
    currenciesData[queryCurrency];

  return result;
}
