import React, { Fragment, FunctionComponent } from 'react';
import './index.css';
import Label from "@denisbykov/label";

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Demo components</h1>
      <Label>Some label text</Label>
    </Fragment>
  );
};

export default App;
