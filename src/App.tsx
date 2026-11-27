import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './index.css';
import { AdminPage } from './Pages/Admin/AdminLoginPage';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
