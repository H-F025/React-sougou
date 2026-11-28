import { useNavigate } from 'react-router';
import { AdminLayout } from '../../Components/Layout/AdminLayout';

export const ListPage = () => {
  const navigate = useNavigate();

  // ※ ログアウト処理・管理者名は useAuth を入れる時に実装する
  const handleLogout = () => navigate('/admin/login');

  return <AdminLayout title={<h1>リスト</h1>} adminName="田中" onLogout={handleLogout} content={null} />;
};