import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Navbar } from '../components';
import {
  HomePage,
  ChatPage,
  PostUploadPage,
  SignupPage,
  ProfilePage,
  ProfileSettingPage,
  LoginPage,
  StartPage,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path='chat' element={<ChatPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>

          <Route>
            <Route path='start' element={<StartPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='post/upload' element={<PostUploadPage />} />
            <Route path='profile/setting' element={<ProfileSettingPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
