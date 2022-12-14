import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Navbar } from '../components';
import { Nav } from '../components/Navbar/style';
import { Home, Chat, PostUpload, Signup, Profile } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='chat' element={<Chat />} />
            <Route path='post/upload' element={<PostUpload />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
