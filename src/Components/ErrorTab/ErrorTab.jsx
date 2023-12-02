import * as S from "./ErrorTab.styled";
import { useContext } from "react";
import { CurrenciesRatesContext } from "../../App";

export const ErrorTab = () => {
  const { error } = useContext(CurrenciesRatesContext);
  return (
    <S.Container>
      <h2>Error {error.status}</h2>
      <p>{error.message}</p>
    </S.Container>
  );
};
