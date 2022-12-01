import ProgressBar from "@denisbykov/progress-bar";
import React, { useState } from "react";

import Button from "../common/button";
import Checkbox from "../common/checkbox/index.styled";
import FormControl from "../common/form-control/index.styled";
import Input from "../common/input/index.styled";
import Paper from "../common/paper";
import ContentContainer from "./content-container.styled";
import SettingsContainerStyled from "./settings-container.styled";

const ProgressBarComponent: React.FunctionComponent = () => {
  const [progress, setProgress] = useState<number>(45);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [fillColor, setFillColor] = useState<string>(
    "linear-gradient(90deg, #99984b,#409aec,#e40468)"
  );
  const [borderColor, setBorderColor] = useState<string>("#666666");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

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

  const onDirectionChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setDirection(element.value as "ltr" | "rtl");
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
        direction={direction}
      />
      <SettingsContainerStyled>
        <Paper>
          <h2>Properties</h2>
          <FormControl justifyContent="flex-start">
            <FormControl width="30%">
              <form method="GET">
                <FormControl width="195px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="progress">Progress </label>
                  </FormControl>
                  <Input
                    id="progress"
                    name="progress"
                    value={progress}
                    onChange={onProgressChange}
                    type="number"
                    min="0"
                    max="100"
                    width="80px"
                  />
                </FormControl>
                <FormControl width="145px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="isAnimate">isAnimate</label>
                  </FormControl>
                  <FormControl width="30px">
                    <Checkbox
                      id="isAnimate"
                      name="isAnimate"
                      checked={isAnimate}
                      onChange={onIsAnimateChange}
                    />
                  </FormControl>
                </FormControl>
                <FormControl width="400px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="fillColor">Fill color</label>
                  </FormControl>
                  <Input
                    id="fillColor"
                    name="fillColor"
                    value={fillColor}
                    onChange={onFillColorChange}
                    width="300px"
                  />
                </FormControl>
                <FormControl width="400px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="backgroundColor">Background color</label>
                  </FormControl>
                  <Input
                    id="backgroundColor"
                    name="backgroundColor"
                    value={backgroundColor}
                    onChange={onBackgroundColorChange}
                    width="300px"
                  />
                </FormControl>
                <FormControl width="195px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="borderColor">Border color</label>
                  </FormControl>
                  <Input
                    id="borderColor"
                    name="borderColor"
                    value={borderColor}
                    onChange={onBorderColorChange}
                    width="80px"
                  />
                </FormControl>
                <FormControl width="180px" margin="0 0 15px 0">
                  <FormControl width="100px" margin="0 15px 0 0">
                    <label htmlFor="borderColor">Direction</label>
                  </FormControl>
                  <FormControl width="80px">
                    <label>
                      <input
                        type="radio"
                        name="direction"
                        value="ltr"
                        onChange={onDirectionChange}
                        checked={direction === "ltr"}
                      />
                      {"  "}ltr
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="direction"
                        value="rtl"
                        onChange={onDirectionChange}
                        checked={direction === "rtl"}
                      />
                      {"  "}rtl
                    </label>
                  </FormControl>
                </FormControl>
              </form>
            </FormControl>
            <FormControl width="50%" flexDirection="column">
              <Paper>
                {`<ProgressBar 
                    progress={${progress}}
                    isAnimate={${isAnimate}} 
                    fillColor="${fillColor}"
                    backgroundColor="${backgroundColor}" 
                    borderColor="${borderColor}"
                    direction="${direction}"
                  />`}
              </Paper>
              <Button>Copy code</Button>
            </FormControl>
          </FormControl>
        </Paper>
      </SettingsContainerStyled>
    </ContentContainer>
  );
};

export default ProgressBarComponent;
