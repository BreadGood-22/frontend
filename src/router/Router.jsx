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
  ErrorPage,
} from '../pages';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route element={<Navbar />}>
              <Route index element={<HomePage />} />
              <Route path='chat' element={<ChatPage />} />
              <Route path='profile' element={<ProfilePage />} />
            </Route>
            <Route path='post/upload' element={<PostUploadPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path='start' element={<StartPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='profile/setting' element={<ProfileSettingPage />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
