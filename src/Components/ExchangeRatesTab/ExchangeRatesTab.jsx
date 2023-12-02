import * as S from "./ExchangeRatesTab.styled";
import { useContext } from "react";
import { CurrenciesRatesContext } from "../../App";
import { DASHBOARD_CURRENCIES } from "../../constants";

export const ExchangeRatesTab = () => {
  const { data, isLoading } = useContext(CurrenciesRatesContext);
  return (
    <S.Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <ul>
          {DASHBOARD_CURRENCIES.map((currency) => (
            <li key={currency}>
              1 {currency} = {(1 / data[currency]).toFixed(4)} UAH
            </li>
          ))}
        </ul>
      ) : null}
    </S.Container>
  );
};
