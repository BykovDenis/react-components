import React from "react";

import NotifierIndicators from "../../enums/notifier-indicators";
import NotifierCardProgressBarStyled from "./notifier-card-progress-bar.styled";
import NotifierCardProgressBarFilledStyled from "./notifier-card-progress-bar-filled.styled";

type TNotifierCardIndicator = {
  delay: number;
  variant?: "Warning" | "Success" | "Error";
};

const NotifierCardIndicator: React.FunctionComponent<TNotifierCardIndicator> = (
  props: TNotifierCardIndicator
) => {
  return (
    <NotifierCardProgressBarStyled>
      <NotifierCardProgressBarFilledStyled
        color={NotifierIndicators[props.variant]}
      />
    </NotifierCardProgressBarStyled>
  );
};

export default NotifierCardIndicator;
