import React, { Fragment, useState } from "react";

import NotifierIndicators from "../enums/notifier-indicators";
import TNotifier from "../types/tnotifier";
import ButtonCloseAllNotifierStyled from "./button-close-all-notifier.styled";
import NotifierCardContainerStyled from "./notifier-card-container.styled";
import NotifierCardContentContainterStyled from "./notifier-card-content-containter.styled";
import NotifierCardIndicator from "./notifier-card-indicator";
import NotifierCardTitleContainerStyled from "./notifier-card-title-container.styled";
import NotifierContainerStyled from "./notifier-container.styled";

let NotifierCards: Array<React.ReactElement> = [];

export const createWindowNotification = (props?: TNotifier) => {
  const defaultProps: TNotifier = {
    variant: "Success",
    color: "#333333",
    backgroundColor: "#ffffff",
    fontSize: "12px",
    delay: 0,
  };

  NotifierCards.push(
    <NotifierCardContainerStyled>
      <NotifierCardTitleContainerStyled
        variant={props.variant || defaultProps.variant}
        color={props.backgroundColor || defaultProps.backgroundColor}
        fontSize={props.fontSize}
      >
        {props.title}
      </NotifierCardTitleContainerStyled>
      <NotifierCardContentContainterStyled
        color={props.color || defaultProps.color}
        backgroundColor={props.backgroundColor || defaultProps.backgroundColor}
        fontSize={props.fontSize || defaultProps.fontSize}
      >
        {props.message}
      </NotifierCardContentContainterStyled>
      <NotifierCardIndicator
        variant={props.variant || defaultProps.variant}
        delay={props.delay || defaultProps.delay}
      />
    </NotifierCardContainerStyled>
  );
};

const Notifier: React.FunctionComponent<TNotifier> = (props: TNotifier) => {
  const [isCloseAll, setIsCloseAll] = useState(false);

  const onWindowNotifierClose = () => {
    NotifierCards = [];
    setIsCloseAll(true);
  };

  return (
    <NotifierContainerStyled>
      <ButtonCloseAllNotifierStyled
        color={NotifierIndicators.Warning}
        onClick={onWindowNotifierClose}
      >
        close all
      </ButtonCloseAllNotifierStyled>
      {NotifierCards?.map((notifier: React.ReactElement, index: number) => (
        <Fragment key={index}>{notifier}</Fragment>
      ))}
    </NotifierContainerStyled>
  );
};

export default Notifier;
