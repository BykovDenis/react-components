import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './components/app';
import ProgressBarComponent from './components/progress-bar-component';

const Routes: React.FunctionComponent = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/progressbar',
      element: <ProgressBarComponent />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
