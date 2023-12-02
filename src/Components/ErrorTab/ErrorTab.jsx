import * as S from "./ErrorTab.styled";

export const ErrorTab = ({ error }) => {
  return (
    <S.Container>
      <h2>Error {error.status}</h2>
      <p>{error.message}</p>
    </S.Container>
  );
};
