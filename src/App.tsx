import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { LoginPage } from './pageComponents/LoginPage/LoginPage';
import { PostsPage } from './pageComponents/PostsPage/PostsPage';
import { DrawerProvider } from './components/Drawer/DrawerProvider';
import { FilterProvider } from './components/FilterMenu/FilterProvider';
import { SnackbarProvider } from 'notistack';
import UserProvider from './providers/UserProvider';
import RequireAuth from './providers/RequireAuth';
import MainProvider from './providers/MainProvider';

function App() {
  return (
    <MainProvider>
      {/* <HashRouter> */}
        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<LoginPage />} />
            <Route path='/posts' element={
              <RequireAuth>
                <PostsPage />
              </RequireAuth>}
            />

          </Route>

        </Routes>
      {/* </HashRouter> */}
    </MainProvider>
  );
}
export default App