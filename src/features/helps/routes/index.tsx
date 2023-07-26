import { Navigate, Route, Routes } from 'react-router-dom';
import { Help } from './Help';
import { Privacy } from './Privacy';

export const HelpRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Help />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
