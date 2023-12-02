import * as S from "./ExchangeRatesTab.styled";
import { useContext } from "react";
import { CurrenciesRatesContext } from "../../App";
import { DASHBOARD_CURRENCIES } from "../../constants";

export const ExchangeRatesTab = () => {
  const currencyRates = useContext(CurrenciesRatesContext);
  return (
    <S.Container>
      {currencyRates ? (
        <ul>
          {DASHBOARD_CURRENCIES.map((currency) => (
            <li key={currency}>
              1 {currency} = {(1 / currencyRates[currency]).toFixed(2)} UAH
            </li>
          ))}
        </ul>
      ) : null}
    </S.Container>
  );
};
