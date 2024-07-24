import { Navigate, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Register from './Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
