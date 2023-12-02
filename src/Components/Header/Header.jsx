import * as S from "./Header.styled";
import { ExchangeRatesTab } from "../ExchangeRatesTab/ExchangeRatesTab";

export const Header = () => {
  return (
    <S.Container>
      <div className="container">
        <ExchangeRatesTab />
      </div>
    </S.Container>
  );
};
