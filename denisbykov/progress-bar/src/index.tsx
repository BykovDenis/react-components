import React from 'react';
import TProgressBar from "../types/tprogress-bar";
import ProgressBarContainerStyled from './progress-bar-container.styled';
import ProgressBarFillContainerStyled from "./progress-bar-fill-container.styled";
import ProgressValueStyled from "./progress-value.styled";


const ProgressBar: React.FunctionComponent<TProgressBar> = (props: TProgressBar) => {
	return <ProgressBarContainerStyled
		backgroundColor={props.backgroundColor}
		borderColor={props.borderColor}
		borderRadius={props.borderRadius}
		borderStyle={props.borderStyle}
		borderWidth={props.borderWidth}
		height={props.height}
	>
		<ProgressBarFillContainerStyled
			progress={props.progress}
			fillColor={props.fillColor}
			borderRadius={props.borderRadius}
			isAnimate={props.isAnimate}
		/>
		<ProgressValueStyled
			fontSize={props.fontSize}
			fillColor={props.progress >= 51 ? props.backgroundColor : props.fillColor}
			backgroundColor={props.progress <= 49 ? props.backgroundColor : props.fillColor}
		>{props.progress}%</ProgressValueStyled>
	</ProgressBarContainerStyled>
}


ProgressBar.defaultProps = {
	fillColor: '#2f4699',
	backgroundColor: '#ffffff',
	borderColor: '#666666',
	height: '40px',
	borderRadius: '15px',
	borderStyle: 'solid',
	borderWidth: '1px',
	progress: 40,
	isAnimate: false,
	fontSize: '12px'
}

export default ProgressBar

