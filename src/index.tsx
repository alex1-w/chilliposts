import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import App from './App';

import { BrowserRouter, HashRouter } from 'react-router-dom'
import { DrawerProvider } from './components/Drawer/DrawerProvider';
import { FilterProvider } from './components/FilterMenu/FilterProvider';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>

    <SnackbarProvider>
      <FilterProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </FilterProvider>
    </SnackbarProvider>

  </HashRouter>
);

