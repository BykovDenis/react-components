import styled from "styled-components";

type TButtonCloseAllNotifierStyled = {
  color?: string;
};

const ButtonCloseAllNotifierStyled = styled.button<TButtonCloseAllNotifierStyled>`
  border: none;
  background-color: transparent;
  color: ${(props: TButtonCloseAllNotifierStyled) => props.color};
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 1px 1px
      ${(props: TButtonCloseAllNotifierStyled) => props.color};
  }
  &:active {
    box-shadow: 1px 1px 3px 1px
      ${(props: TButtonCloseAllNotifierStyled) => props.color};
  }
`;

export default ButtonCloseAllNotifierStyled;
