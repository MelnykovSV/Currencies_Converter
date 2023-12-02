import styled from "@emotion/styled";

export const Container = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  width: 70%;
  border: 1px solid #cccccc;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: 15px;
  padding-right: 15px;
  &:focus {
    outline: none;
    border: 1px solid #2684ff;
  }
`;
