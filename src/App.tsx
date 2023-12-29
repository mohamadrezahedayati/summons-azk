import React, { lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';

import Layout from './components/layout/Layout';
import { First } from './pages/register/steps/first';
import { Sec } from './pages/register/steps/sec';
import { UserProvider } from './contexts/user.context';
const RegisterPage = lazy(() => import("./pages/register/register"));
const StepsPage = lazy(() => import("./pages/register/steps"));


function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<RegisterPage/>} />
            <Route path='/steps' element={<StepsPage/>}>
              <Route path="first" element={<First/>} />
              <Route path="sec" element={<Sec/>} />
            </Route>
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
