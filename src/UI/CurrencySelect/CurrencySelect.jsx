import * as S from "./CurrencySelect.styled";
import { CURRENCIES, BASE_CURRENCY } from "../../constants";

const customStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
    transition: "transform 0.15s linear",
  }),
};

export const CurrencySelect = ({ value, changeHandler, ...props }) => {
  const selectOptions = [BASE_CURRENCY, ...CURRENCIES].map((currency) => ({
    value: currency,
    label: currency,
  }));
  return (
    <S.Container
      options={selectOptions}
      value={selectOptions.find((option) => option.value === value)}
      onChange={changeHandler}
      styles={customStyles}
      {...props}
    />
  );
};
