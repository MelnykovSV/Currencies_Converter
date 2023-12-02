import styled from "@emotion/styled";
import Select from "react-select";

export const Container = styled(Select)`
  width: 30%;
  min-width: 94px;
  & > div {
    cursor: pointer;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: none;
  }
  [class$="menu"] {
    border: 1px solid #cccccc;
  }
`;
