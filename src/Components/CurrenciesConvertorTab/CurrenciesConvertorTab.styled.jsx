import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h2 {
    margin: 0 0 15px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ConverterBlock = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
  }
  width: 100%;
`;

export const InputsBlock = styled.div`
  display: flex;
`;
