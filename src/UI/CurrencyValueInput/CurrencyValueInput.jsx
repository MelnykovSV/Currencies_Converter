import * as S from "./CurrencyValueInput.styled";

export const CurrencyValueInput = ({ value, changeHandler, ...props }) => {
  return (
    <S.Container
      value={value === null ? "" : value}
      onChange={changeHandler}
      type="number"
      inputmode="numeric"
      min="0"
      {...props}
      onKeyDown={(e) =>
        ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
      }
    />
  );
};
