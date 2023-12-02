import * as S from "./CurrencySelect.styled";

import { CURRENCIES, BASE_CURRENCY } from "../../constants";

export const CurrencySelect = ({ value, changeHandler }) => {
  const selectOptions = [BASE_CURRENCY, ...CURRENCIES].map((currency) => ({
    value: currency,
    label: currency,
  }));
  return (
    <S.Container
      options={selectOptions}
      value={selectOptions.find((option) => option.value === value)}
      onChange={changeHandler}
    />
  );
};
