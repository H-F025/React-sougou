// src/App.tsx
import type { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './index.css';
import { AdminLoginPage } from './Pages/Admin/AdminLoginPage';
import { NotFoundPage } from './Pages/Admin/NotFoundPage';

/** ログイン判定（仮の実装：false のときは未ログイン扱い） */
const RequireAuth = ({ page }: { page: ReactNode }) => {
  const isLoggedIn = false; // 実際は useAuth() などのログイン状態を使う

  if (!isLoggedIn) {
    // ログインしていない場合は 404 へ飛ばす
    return <Navigate to="/404" replace />;
  }
  return page;
};

export const App = () => (
  <BrowserRouter>
    <Routes>
      {/* ログイン画面 */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
