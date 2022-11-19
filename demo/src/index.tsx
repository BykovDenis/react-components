import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../src/components/app';

const domContainer = document.getElementById('demo');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
