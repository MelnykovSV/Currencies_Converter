import * as S from "./ExchangeRatesTab.styled";
import { useContext } from "react";
import { CurrenciesRatesContext } from "../../App";
import { DASHBOARD_CURRENCIES } from "../../constants";

export const ExchangeRatesTab = () => {
  const { data } = useContext(CurrenciesRatesContext);
  return (
    <S.Container>
      {data ? (
        <ul>
          {DASHBOARD_CURRENCIES.map((currency) => (
            <li key={currency}>
              1 {currency} = {(1 / data[currency]).toFixed(2)} UAH
            </li>
          ))}
        </ul>
      ) : null}
    </S.Container>
  );
};
