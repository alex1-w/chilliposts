import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { LoginPage } from './pageComponents/LoginPage/LoginPage';
import { PostsPage } from './pageComponents/PostsPage/PostsPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<LoginPage />} />
        <Route path='posts' element={<PostsPage />} />

      </Route>
    </Routes>
  );
}

export default App;
