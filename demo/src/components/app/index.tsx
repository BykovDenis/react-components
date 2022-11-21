import React, { Fragment, FunctionComponent } from 'react';
import './index.css';
import Label from '@denisbykov/label';
import ProgressBar from "@denisbykov/progress-bar";

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Demo components</h1>
      <Label>Some label text</Label>
      <ProgressBar progress={78} />
    </Fragment>
  );
};

export default App;
