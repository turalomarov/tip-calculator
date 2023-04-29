import React, { InputHTMLAttributes } from 'react';
import Image from 'next/image';
import { ValueOf } from 'next/constants';
import styles from './index.module.scss';

const Icons = {
  DOLLAR: 'dollar' as const,
  PERSON: 'person' as const,
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    icon?: ValueOf<typeof Icons>
    label?: string;
}

const Input:React.FC<InputProps> = ({
  error, icon, label, ...props
}) => (
  <div className={styles.box}>
    {
        (label || error) && (
        <div className={styles.label_box}>
          <span className={styles.label}>{label}</span>
          <span className={styles.error_message}>{error}</span>
        </div>
        )
    }
    <div className={styles.input_box}>
      {
            icon && (
            <Image
              alt="icon for input"
              src={`/${icon}.svg`}
              width={12}
              height={16}
            />
            )
        }
      <input className={`${styles.input} ${error ? styles.input_error : ''} ${icon ? styles.input_icon : ''}`} {...props} />
    </div>
  </div>
);

export default Input;
