import styled from "styled-components";

type TInput = {
  width?: string;
};

const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  border: 1px solid var(--main-outline-color);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--main-font-color);
  background-color: var(--main-background-color);
  width: ${(props: TInput) => (props?.width ? props.width : "initial")};
`;

export default Input;
