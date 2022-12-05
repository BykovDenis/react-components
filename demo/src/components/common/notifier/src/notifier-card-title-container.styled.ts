import styled from "styled-components";

import NotifierIndicators from "../enums/notifier-indicators";

type TNotifierCardTitleContainerStyled = {
  color?: string;
  fontSize: string | number;
  variant: "Warning" | "Success" | "Error";
};

const NotifierCardTitleContainerStyled = styled.p`
  background-color: ${(props: TNotifierCardTitleContainerStyled) =>
    NotifierIndicators[props.variant]};
  color: ${(props: TNotifierCardTitleContainerStyled) => props.color};
  font-weight: 900;
  padding: 10px;
  font-size: ${(props: TNotifierCardTitleContainerStyled) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : `${props.fontSize}px`};
`;

export default NotifierCardTitleContainerStyled;
