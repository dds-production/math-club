import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './components/Authentication/Admin/AdminLogin';
import AdminSignUp from './components/Authentication/Admin/AdminSignUp';
import MainPage from './components/MainPage/MainPage';
import UserPayment from './components/Authentication/User/UserPayment';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admins/login" element={<AdminLogin />} />
        <Route path="/admins/register" element={<AdminSignUp />} />
        <Route path="/payment_success" element={<UserPayment />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
