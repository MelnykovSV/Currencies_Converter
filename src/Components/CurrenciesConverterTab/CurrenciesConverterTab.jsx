import * as S from "./CurrenciesConverterTab.styled";
import { useContext, useState } from "react";
import { CurrenciesRatesContext } from "../../App";
import { CurrencySelect, CurrencyValueInput } from "../../UI";
import { convertCurrency } from "../../helpers";

export const CurrenciesConverterTab = () => {
  const currencyRates = useContext(CurrenciesRatesContext);

  const [currencyToSell, setCurrencyToSell] = useState("UAH");
  const [currencyToBuy, setCurrencyToBuy] = useState("USD");
  const [valueToSell, setValueToSell] = useState(1);
  const [valueToBuy, setValueToBuy] = useState(
    Number(
      convertCurrency(
        currencyRates,
        currencyToSell,
        valueToSell,
        currencyToBuy
      )?.toFixed(2)
    )
  );

  const currencyToSellSelectHandler = (currency) => {
    const valueToBuy = convertCurrency(
      currencyRates,
      currency.value,
      valueToSell,
      currencyToBuy
    );
    setValueToBuy(valueToBuy === null ? null : Number(valueToBuy.toFixed(2)));
    setCurrencyToSell(currency.value);
  };

  const currencyToBuySelectHandler = (currency) => {
    const valueToBuy = convertCurrency(
      currencyRates,
      currencyToSell,
      valueToSell,
      currency.value
    );
    setValueToBuy(valueToBuy === null ? null : Number(valueToBuy.toFixed(2)));
    setCurrencyToBuy(currency.value);
  };

  const valueToSellSelectHandler = (e) => {
    const valueToSell = e.target.value === "" ? null : Number(e.target.value);
    const valueToBuy = convertCurrency(
      currencyRates,
      currencyToSell,
      valueToSell,
      currencyToBuy
    );
    setValueToSell(valueToSell);
    setValueToBuy(valueToBuy === null ? null : Number(valueToBuy.toFixed(2)));
  };

  const valueToBuySelectHandler = (e) => {
    const valueToBuy = e.target.value === "" ? null : Number(e.target.value);
    const valueToSell = convertCurrency(
      currencyRates,
      currencyToBuy,
      valueToBuy,
      currencyToSell
    );
    setValueToSell(
      valueToSell === null ? null : Number(valueToSell.toFixed(2))
    );
    setValueToBuy(valueToBuy);
  };

  return (
    <S.Container>
      <h2>Currency converter</h2>
      <S.FormBody>
        <S.ConverterBlock>
          <p>You sell</p>
          <S.InputsBlock>
            <CurrencyValueInput
              value={valueToSell}
              changeHandler={valueToSellSelectHandler}
            />
            <CurrencySelect
              value={currencyToSell}
              changeHandler={currencyToSellSelectHandler}
            />
          </S.InputsBlock>
        </S.ConverterBlock>
        <S.ConverterBlock>
          <p>You buy</p>
          <S.InputsBlock>
            <CurrencyValueInput
              value={valueToBuy}
              changeHandler={valueToBuySelectHandler}
            />
            <CurrencySelect
              value={currencyToBuy}
              changeHandler={currencyToBuySelectHandler}
            />
          </S.InputsBlock>
        </S.ConverterBlock>
      </S.FormBody>
    </S.Container>
  );
};
