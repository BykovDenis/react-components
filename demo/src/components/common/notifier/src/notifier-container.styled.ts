import styled from "styled-components";

const NotifierContainerStyled = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  width: 500px;
`;

export default NotifierContainerStyled;
