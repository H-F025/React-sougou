import { useState, type FormEvent, type ReactNode } from 'react';
import { ShopButton } from '../Common/ShopButton';
import { TextField } from '../Common/TextField';

type Props = {
  title: string;
  subtitle?: string;
  /** ログイン処理。失敗時は Error を throw する */
  onLogin: (email: string, password: string) => Promise<void>;
  /** フォーム下部（新規登録リンクなど） */
  footer?: ReactNode;
};

/** ログインフォーム（店舗・管理者共通） */
export const LoginForm = ({ title, subtitle, onLogin, footer }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await onLogin(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログインに失敗しました');
      setSubmitting(false); // 成功時は画面遷移するので戻さない
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1 className="login-form__title">{title}</h1>
      {subtitle && <p className="login-form__subtitle">{subtitle}</p>}

      <TextField label="メールアドレス" type="email" value={email} onChange={setEmail} autoComplete="email" />
      <TextField
        label="パスワード"
        type="password"
        value={password}
        onChange={setPassword}
        autoComplete="current-password"
      />

      {error && <p className="form-error">{error}</p>}

      <ShopButton
        type="submit"
        variant="primary"
        label={submitting ? 'ログイン中…' : 'ログイン'}
        disabled={submitting}
        fullWidth
      />

      {footer && <div className="login-form__footer">{footer}</div>}
    </form>
  );
};