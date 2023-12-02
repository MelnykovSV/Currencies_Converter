import * as S from "./CurrenciesConvertorTab.styled";
import { useContext } from "react";
import { CurrenciesRatesContext } from "../../App";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CurrencySelect, CurrencyValueInput } from "../../UI";
import { convertCurrency } from "../../helpers";

console.log(Number("1."));

export const CurrenciesConvertorTab = () => {
  const { data, isLoading } = useContext(CurrenciesRatesContext);

  const [currencyToSell, setCurrencyToSell] = useState("UAH");
  const [currencyToBuy, setCurrencyToBuy] = useState("USD");
  const [valueToSell, setValueToSell] = useState(1);

  const [valueToBuy, setValueToBuy] = useState(
    Number(
      convertCurrency(
        data,
        currencyToSell,
        valueToSell,
        currencyToBuy
      )?.toFixed(2)
    )
  );

  const currencyToSellSelectHandler = (currency) => {
    const valueToBuy = convertCurrency(
      data,
      currency.value,
      valueToSell,
      currencyToBuy
    );

    setValueToBuy(Number(valueToBuy.toFixed(2)));
    setCurrencyToSell(currency.value);
  };
  const currencyToBuySelectHandler = (currency) => {
    const valueToBuy = convertCurrency(
      data,
      currencyToSell,
      valueToSell,
      currency.value
    );

    setValueToBuy(Number(valueToBuy.toFixed(2)));
    setCurrencyToBuy(currency.value);
  };
  const valueToSellSelectHandler = (e) => {
    const valueToSell = e.target.value === "" ? null : Number(e.target.value);
    console.log(valueToSell);

    const valueToBuy = convertCurrency(
      data,
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
      data,
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
      <CurrencyValueInput
        value={valueToSell}
        changeHandler={valueToSellSelectHandler}
      />
      <CurrencyValueInput
        value={valueToBuy}
        changeHandler={valueToBuySelectHandler}
        readOnly
      />
      <CurrencySelect
        value={currencyToSell}
        changeHandler={currencyToSellSelectHandler}
      />
      <CurrencySelect
        value={currencyToBuy}
        changeHandler={currencyToBuySelectHandler}
      />
    </S.Container>
  );
};
