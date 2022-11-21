import styled from "styled-components";

type TFormControl = {
  justifyContent?: string;
  width?: string;
  margin?: string;
};

const FormControl = styled.div<TFormControl>`
  box-sizing: border-box;
  width: ${(props: TFormControl) => (props?.width ? props.width : "100%")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: TFormControl) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  margin: ${(props: TFormControl) => (props?.margin ? props.margin : 0)};
`;

export default FormControl;
