import type { ReactNode } from 'react';
import { LayoutGrid, LogOut, PanelTop } from 'lucide-react';
import { NavLink } from 'react-router';
import { APP_NAME } from '../../Constants';

type Props = {
  /** 各ページのメイン画面 */
  content: ReactNode;
  /** ヘッダーの見出し（「リスト」「< 一覧へ戻る 店舗詳細」など） */
  title: ReactNode;
  adminName: string;
  onLogout: () => void;
};

/** 選択中のメニューに is-active を付ける */
const navClass = ({ isActive }: { isActive: boolean }) => `admin-nav ${isActive ? 'is-active' : ''}`;

/** 管理者画面の共通レイアウト：サイドバー + ヘッダー */
export const AdminLayout = ({ content, title, adminName, onLogout }: Props) => (
  <div className="admin-layout">
    {/* サイドバー */}
    <aside className="admin-sidebar">
      <p className="admin-sidebar__logo">{APP_NAME}</p>

      <nav className="admin-sidebar__nav">
        <NavLink to="/admin/list" end className={navClass}>
          リスト
        </NavLink>
        <NavLink to="/admin/shops/new" className={navClass}>
          提携店舗管理
        </NavLink>
      </nav>

      <button type="button" className="admin-sidebar__logout" onClick={onLogout}>
        ログアウト
      </button>
    </aside>

    <div className="admin-body">
      {/* ヘッダー */}
      <header className="admin-header">
        <div className="admin-header__title">{title}</div>
        <div className="admin-header__user">
          管理者 {adminName}
          <span className="admin-header__avatar">管</span>
        </div>
      </header>

      <main className="admin-main">{content}</main>
    </div>
  </div>
);