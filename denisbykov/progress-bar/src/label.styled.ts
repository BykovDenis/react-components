import styled from 'styled-components';
import TLabel from "../types/tlabel";

const LabelStyled = styled.label<TLabel>`
	color: ${(props: TLabel) => props.color ? props.color : 'inherit'};
`;

export default LabelStyled;
