import React from 'react';
import TPaper from './types/tpaper';
import PaperStyled from './paper.styled';

const Paper: React.FunctionComponent<TPaper> = (props: TPaper) => {
  return <PaperStyled>{props.children}</PaperStyled>;
};

export default Paper;
