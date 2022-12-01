import React from "react";

import PaperStyled from "./paper.styled";
import TPaper from "./types/tpaper";

const Paper: React.FunctionComponent<TPaper> = (props: TPaper) => {
  return <PaperStyled>{props.children}</PaperStyled>;
};

export default Paper;
