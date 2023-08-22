import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { LoginPage } from './pageComponents/LoginPage/LoginPage';
import { PostsPage } from './pageComponents/PostsPage/PostsPage';
import { DrawerProvider } from './components/Drawer/DrawerProvider';
import { FilterProvider } from './components/FilterMenu/FilterProvider';
import { SnackbarProvider } from 'notistack';

function App() {
  return (

    <SnackbarProvider>
      <FilterProvider>
        <DrawerProvider>

          <HashRouter basename='/'>
            <Routes>

              <Route path='/' element={<Layout />}>

                <Route index element={<LoginPage />} />
                <Route path='/posts' element={<PostsPage />} />
                {/* <Route index element={<PostsPage />} /> */}

              </Route>

            </Routes>
          </HashRouter>

        </DrawerProvider>
      </FilterProvider>
    </SnackbarProvider>

  );
}

export default App;
