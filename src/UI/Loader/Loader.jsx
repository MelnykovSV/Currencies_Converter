import * as S from "./Loader.styled";

export const Loader = () => {
  return (
    <S.StyledLoader
      visible={true}
      height="160"
      width="160"
      ariaLabel="dna-loading"
      wrapperStyle={{ margin: "0 auto", display: "block" }}
      wrapperClass="dna-wrapper"
    />
  );
};
