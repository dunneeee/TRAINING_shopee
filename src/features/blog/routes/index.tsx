import { Navigate, Route, Routes } from 'react-router-dom';
import { Blog } from './Blog';
import { BlogDetail } from './BlogDetail';

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Blog />} />
      <Route path=":postId" element={<BlogDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
