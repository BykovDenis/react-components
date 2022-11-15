import React from 'react';
import TLabel from "../types/tlabel";
import LabelStyled from './label.styled';


const Label: React.FunctionComponent<TLabel> = (props: TLabel) => {
	return <LabelStyled>{props.children}</LabelStyled>
}

