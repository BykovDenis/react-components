import React, { Fragment } from "react";
import ProgressBar from "@denisbykov/progress-bar";
import Paper from "../common/paper";
import ContentContainer from "./content-container.styled";
import SettingsContainerStyled from "./settings-container.styled";

const ProgressBarComponent: React.FunctionComponent = () => {
  return (
    <ContentContainer>
      <h1>Progress bar</h1>
      <ProgressBar progress={75} />
      <SettingsContainerStyled>
        <Paper>
          <h2>Settings</h2>
        </Paper>
      </SettingsContainerStyled>
    </ContentContainer>
  );
};

export default ProgressBarComponent;
