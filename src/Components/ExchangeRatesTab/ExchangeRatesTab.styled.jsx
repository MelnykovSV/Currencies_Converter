import styled from "@emotion/styled";

export const Container = styled.div`
  ul {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 30px;
    height: 100%;
    font-weight: 500;
    color: #fff;
    justify-content: end;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
