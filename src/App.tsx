import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import { AdminLoginPage } from './Pages/Admin/AdminLoginPage';
import { ListPage } from './Pages/Admin/ListPage';
import { NotFoundPage } from './Pages/Admin/NotFoundPage';

// ログイン判定（RequireAuth）は useAuth を作る時に追加する

export const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 管理者 */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/list" element={<ListPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;