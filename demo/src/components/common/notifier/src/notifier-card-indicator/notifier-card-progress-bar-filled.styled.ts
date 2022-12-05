import styled from "styled-components";

type TNotifierCardProgressBarFilledStyled = {
  color?: string;
};

const NotifierCardProgressBarFilledStyled = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${(props: TNotifierCardProgressBarFilledStyled) =>
    props.color};
`;

export default NotifierCardProgressBarFilledStyled;
