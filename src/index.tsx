import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import App from './App';

import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// guirggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

// hashrouter

// guirggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

root.render(
  <React.StrictMode>

    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}

  </React.StrictMode>
);

