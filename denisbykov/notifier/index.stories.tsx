import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Notifier from "./src/index";

export default {
  title: "Components/Notifier",
  component: Notifier,
  argTypes: {
    isAnimate: { control: { type: "radio", options: [true, false] } },
    fontSize: { control: { type: "select", options: [10, 12, 14, 16] } },
    // direction: {
    //   control: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" }
    // }
  },
  args: {
    title: "Title error message",
    message:
      "Some message. Some message. Some message. Some message. Some message. Some message. Some message. Some message. ",
  },
} as ComponentMeta<typeof Notifier>;

const Template: ComponentStory<typeof Notifier> = (args: any) => {
  return <Notifier {...args} />;
};

export const NormalNotifier = Template.bind({});
