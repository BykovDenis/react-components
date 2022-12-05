import styled from "styled-components";

type TNotifierCardContentContainterStyled = {
  backgroundColor?: string;
  color?: string;
  fontSize: string | number;
};

const NotifierCardContentContainterStyled = styled.div<TNotifierCardContentContainterStyled>`
  padding: 10px;
  color: ${(props: TNotifierCardContentContainterStyled) => props.color};
  background-color: ${(props: TNotifierCardContentContainterStyled) =>
    props.backgroundColor};
  font-size: ${(props: TNotifierCardContentContainterStyled) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : `${props.fontSize}px`};
`;

export default NotifierCardContentContainterStyled;
