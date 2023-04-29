import React, { ButtonHTMLAttributes } from 'react';
import { ValueOf } from 'next/constants';

import styles from './index.module.scss';

const Variant = {
  TIP: 'tip' as const,
  BUTTON: 'button' as const,
};
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ValueOf<typeof Variant>;
  selected?: boolean;
}
const Button:React.FC<ButtonProps> = ({
  className = '',
  children,
  variant = Variant.BUTTON,
  selected = false,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.btn} ${styles[variant]} ${className} ${selected ? styles.tip_selected : ''}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
