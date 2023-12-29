import React, { lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';

import './App.css';

import { First } from './pages/register/steps/first';
import { Sec } from './pages/register/steps/sec';
const RegisterPage = lazy(() => import("./pages/register/register"));
const StepsPage = lazy(() => import("./pages/register/steps"));


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RegisterPage/>} />
          <Route path='/steps' element={<StepsPage/>}>
            <Route path="first" element={<First/>} />
            <Route path="sec" element={<Sec/>} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
