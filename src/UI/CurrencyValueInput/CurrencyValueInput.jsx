import * as S from "./CurrencyValueInput.styled";

export const CurrencyValueInput = ({ value, changeHandler }) => {
  return (
    <S.Container
      value={value === null ? "" : value}
      onChange={changeHandler}
      type="number"
      inputmode="numeric"
      min="0"
      onKeyDown={(evt) =>
        ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
      }
    />
  );
};