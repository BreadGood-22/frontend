import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SignUp } from '../pages/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
