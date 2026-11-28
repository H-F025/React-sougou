import { LayoutGrid, LogOut, PanelTop } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import { APP_NAME } from '../../Constants';

export const ListPage = () => {
  const navigate = useNavigate();

  // ※ ログアウト処理は useAuth を入れる時に実装する
  const handleLogout = () => navigate('/admin/login');

  return (
    <div className="admin-layout">
      {/* サイドバー */}
      <aside className="admin-sidebar">
        <p className="admin-sidebar__logo">{APP_NAME}</p>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin/list" end className={({ isActive }) => `admin-nav ${isActive ? 'is-active' : ''}`}>
            リスト
          </NavLink>
          <NavLink
            to="/admin/shops/new"
            className={({ isActive }) => `admin-nav ${isActive ? 'is-active' : ''}`}
          >
            <PanelTop size={16} aria-hidden />
            提携店舗管理
          </NavLink>
        </nav>

        <button type="button" className="admin-sidebar__logout" onClick={handleLogout}>
          <LogOut size={16} aria-hidden />
          ログアウト
        </button>
      </aside>

      <div className="admin-body">
        {/* ヘッダー */}
        <header className="admin-header">
          <h1 className="admin-header__title">リスト</h1>
          <div className="admin-header__user">
            管理者 田中
            <span className="admin-header__avatar">管</span>
          </div>
        </header>

        {/* メイン（中身は次以降で追加） */}
        <main className="admin-main"></main>
      </div>
    </div>
  );
};