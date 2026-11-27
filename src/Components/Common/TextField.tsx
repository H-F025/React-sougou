import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type TextFieldProps = {
  label: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

export const TextField = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <div className="field__wrap">
        <input
          className={isPassword ? 'field__input field__input--password' : 'field__input'}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
        {isPassword && (
          <span
            className="field__eye-icon"
            onClick={() => setShowPassword((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }
            }}
            aria-label={showPassword ? 'パスワードを隠す' : 'パスワードを表示'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
    </div>
  );
};
