import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Navbar } from '../components';
import { Home, Chat, PostUpload, Signup, Profile, ProfileSetting, Login, Start } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='chat' element={<Chat />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route>
            <Route path='start' element={<Start />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='post/upload' element={<PostUpload />} />
            <Route path='profile/setting' element={<ProfileSetting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
