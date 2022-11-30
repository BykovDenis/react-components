import React, { Fragment, useState } from "react";
import ProgressBar from "@denisbykov/progress-bar";
import Paper from "../common/paper";
import ContentContainer from "./content-container.styled";
import SettingsContainerStyled from "./settings-container.styled";
import Input from "../common/input/index.styled";
import FormControl from "../common/form-control/index.styled";
import Checkbox from "../common/checkbox/index.styled";

const ProgressBarComponent: React.FunctionComponent = () => {
  const [progress, setProgress] = useState<number>(45);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [fillColor, setFillColor] = useState<string>(
    "linear-gradient(90deg, #99984b,#409aec,#e40468)"
  );
  const [borderColor, setBorderColor] = useState<string>("#666666");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");

  const onProgressChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setProgress(parseInt(element.value, 10));
  };

  const onIsAnimateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setIsAnimate(element.checked);
  };

  const onBackgroundColorChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const element = evt.target;
    setBackgroundColor(element.value);
  };

  const onBorderColorChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setBorderColor(element.value);
  };

  const onFillColorChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setFillColor(element.value);
  };

  return (
    <ContentContainer>
      <h1>Progress bar</h1>
      <ProgressBar
        progress={progress}
        isAnimate={isAnimate}
        fillColor={fillColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
      <SettingsContainerStyled>
        <Paper>
          <h2>Properties</h2>
          <FormControl justifyContent="flex-start">
            <FormControl width="30%">
              <form method="GET">
                <FormControl width="180px" margin="0 0 15px 0">
                  <label htmlFor="progress">Progress </label>
                  <Input
                    id="progress"
                    name="progress"
                    value={progress}
                    onChange={onProgressChange}
                    type="number"
                    min="0"
                    max="100"
                    width="110px"
                  />
                </FormControl>
                <FormControl width="180px" margin="0 0 15px 0">
                  <label htmlFor="isAnimate">isAnimate</label>
                  <Checkbox
                    id="isAnimate"
                    name="isAnimate"
                    checked={isAnimate}
                    onChange={onIsAnimateChange}
                  />
                </FormControl>
                <FormControl width="180px" margin="0 0 15px 0">
                  <label htmlFor="fillColor">Fill color</label>
                  <Input
                    id="fillColor"
                    name="fillColor"
                    value={fillColor}
                    onChange={onFillColorChange}
                    width="110px"
                  />
                </FormControl>
                <FormControl width="180px" margin="0 0 15px 0">
                  <label htmlFor="backgroundColor">Background color</label>
                  <Input
                    id="backgroundColor"
                    name="backgroundColor"
                    value={backgroundColor}
                    onChange={onBackgroundColorChange}
                    width="110px"
                  />
                </FormControl>
                <FormControl width="180px" margin="0 0 15px 0">
                  <label htmlFor="borderColor">Border color</label>
                  <Input
                    id="borderColor"
                    name="borderColor"
                    value={borderColor}
                    onChange={onBorderColorChange}
                    width="110px"
                  />
                </FormControl>
              </form>
            </FormControl>
            <FormControl width="50%">
              <Paper>
                {`<ProgressBar 
                    progress={${progress}}
                    isAnimate={${isAnimate}} 
                    fillColor="${fillColor}"
                    backgroundColor="${backgroundColor}" 
                    borderColor="${borderColor}"
                  />`}
              </Paper>
            </FormControl>
          </FormControl>
        </Paper>
      </SettingsContainerStyled>
    </ContentContainer>
  );
};

export default ProgressBarComponent;
