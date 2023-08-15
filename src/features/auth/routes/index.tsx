import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import ForgotPassword from './ForgotPassword';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Auth />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
