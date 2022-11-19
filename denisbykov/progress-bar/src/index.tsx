import React from 'react';
import TLabel from "../types/tlabel";
import LabelStyled from './label.styled';


const ProgressBar: React.FunctionComponent<TLabel> = (props: TLabel) => {
	return <LabelStyled>{props.children}</LabelStyled>
}

export default ProgressBar

