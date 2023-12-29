import { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './components/layout/Layout';
import { UserProvider } from './contexts/user.context';
import './App.css';

const queryClient = new QueryClient()
const Spinner = lazy(() => import("./components/spinner/spinner"));
const RegisterPage = lazy(() => import("./pages/register/register"));
const InsuranceListPage = lazy(() => import("./pages/insuranceList/index"));
const StepsPage = lazy(() => import("./pages/thirdPartyInsurance"));
const FirstStep = lazy(() => import("./pages/thirdPartyInsurance/firstStep"));
const SecondStep = lazy(() => import("./pages/thirdPartyInsurance/secondStep"));
const ThirdStep = lazy(() => import("./pages/thirdPartyInsurance/thirdStep"));


function App() {
  return (
    <Router>
        <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/list" element={<InsuranceListPage />} />
                <Route path='/steps' element={<StepsPage />}>
                  <Route path="first" element={<FirstStep />} />
                  <Route path="second" element={<SecondStep />} />
                  <Route path="third" element={<ThirdStep />} />
                </Route>
              </Routes>
            </Suspense>
          </Layout>
        </UserProvider>
    </QueryClientProvider>
      </Router>
  );
}

export default App;
