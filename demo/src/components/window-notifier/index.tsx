import React from "react";

import Notifier, { createWindowNotification } from "../common/notifier/src";
import WindowNotifierContainer from "./window-notifier-container";

const WindowNotifier: React.FunctionComponent = () => {
  createWindowNotification({
    title: "Hello world!",
    message: "The message to the world",
    delay: 3000,
  });
  createWindowNotification({
    title: "Error found",
    message: "You have some problems",
    delay: 3000,
    variant: "Error",
  });
  createWindowNotification({
    title: "Warning text",
    message: "Some warning, some warning",
    delay: 3000,
    variant: "Warning",
  });

  return (
    <WindowNotifierContainer>
      <p>window notifier</p>
      <Notifier />
    </WindowNotifierContainer>
  );
};

export default WindowNotifier;
