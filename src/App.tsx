import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { LoginPage } from './pageComponents/LoginPage/LoginPage';
import { PostsPage } from './pageComponents/PostsPage/PostsPage';
import RequireAuth from './providers/RequireAuth';
import MainProvider from './providers/MainProvider';

function App() {
  return (
    <MainProvider>
      <Routes>

        <Route path='/' element={<Layout />}>

          <Route index element={<LoginPage />} />

          <Route path='posts' element=
            {
              <RequireAuth>
                <PostsPage />
              </RequireAuth>
            }
          />

        </Route>

      </Routes>
    </MainProvider>
  );
}
export default App