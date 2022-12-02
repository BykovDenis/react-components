import React from "react";

import TNotifier from "../types/tnotifier";
import NotifierCardContainerStyled from "./notifier-card-container.styled";
import NotifierContainerStyled from "./notifier-container.styled";

const Notifier: React.FunctionComponent<TNotifier> = (props: TNotifier) => {
  return (
    <NotifierContainerStyled>
      <NotifierCardContainerStyled>
        <b>{props.title}</b>
        <p>{props.message}</p>
        <div>indicator</div>
      </NotifierCardContainerStyled>
    </NotifierContainerStyled>
  );
};

export default Notifier;
