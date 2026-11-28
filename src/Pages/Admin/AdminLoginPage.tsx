import { useNavigate } from 'react-router';
import { LoginForm } from '../../Components/auth/LoginForm';
import { APP_NAME } from '../../Constants';

/* 管理者ログイン画面 */
export const AdminLoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = async (email: string, password: string) => {
    // 仮のログイン判定（後で useAuth / authApi に置き換え）
    if (email === 'admin@example.com' && password === 'admin1234') {
      alert('管理者ログインに成功しました！（次は一覧画面へ遷移します）');
      navigate('/admin');
    } else {
      throw new Error('メールアドレスまたはパスワードが正しくありません');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__brand">{APP_NAME}</div>
      <div className="admin-login__form">
        <LoginForm
          title="管理者ログイン"
          subtitle="システム管理者専用のログイン画面です"
          onLogin={handleAdminLogin}
        />
      </div>
    </div>
  );
};