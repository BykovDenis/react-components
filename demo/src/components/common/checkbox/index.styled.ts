import styled from "styled-components";

type TCheckbox = {};

const Checkbox = styled.input.attrs<TCheckbox>((props) => ({
  type: "checkbox",
}))``;

export default Checkbox;
