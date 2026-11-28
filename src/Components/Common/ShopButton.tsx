import type { ReactNode } from 'react';

type Props = {
  label: ReactNode;
  onClick?: () => void;
  /** save=緑 / add=緑 / delete=赤 / primary=グレー(ログイン等) / secondary=白枠 */
  variant?: 'save' | 'add' | 'delete' | 'primary' | 'secondary';
  type?: 'button' | 'submit';
  /** 送信中などクリックさせたくない時（多重送信防止） */
  disabled?: boolean;
  fullWidth?: boolean;
};

/** 店舗画面用のボタン（保存・追加・削除・ログインなど） */
export const ShopButton = ({
  label,
  onClick,
  variant = 'save',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: Props) => (
  <button
    type={type}
    className={`btn btn--${variant} ${fullWidth ? 'btn--full' : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);