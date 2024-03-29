import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Navbar } from '../components';
import {
  HomePage,
  ChatListPage,
  ChatRoomPage,
  PostUploadPage,
  SignupPage,
  ProfilePage,
  ProfileSettingPage,
  LoginPage,
  StartPage,
  NotFoundPage,
  FollowingPage,
  FollowerPage,
  AddProductPage,
  ProductEditPage,
  ProfileEditPage,
  PostPage,
  PostEditPage,
  SearchPage,
} from '../pages';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export default function Router() {
  return (
    <BrowserRouter basename='/frontend'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route element={<Navbar />}>
              <Route index element={<HomePage />} />
              <Route path='chat' element={<ChatListPage />} />
              <Route path='profile/:accountname' element={<ProfilePage />} />

              <Route path='search' element={<SearchPage />} />
            </Route>
            <Route path='product' element={<AddProductPage />} />
            <Route path='product/:productId/edit' element={<ProductEditPage />} />
            <Route path='post/upload' element={<PostUploadPage />} />
            <Route path='post/:postId' element={<PostPage />} />
            <Route path='post/:postId/edit' element={<PostEditPage />} />
            <Route path='profile/:accountname/edit' element={<ProfileEditPage />} />
            <Route path='profile/:accountname/following' element={<FollowingPage />} />
            <Route path='profile/:accountname/follower' element={<FollowerPage />} />
            <Route path='chat/room' element={<ChatRoomPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path='start' element={<StartPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='profile/setting' element={<ProfileSettingPage />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
