'use client'
import { ComponentPropsWithoutRef } from 'react';
import styles from './button.module.css';

type Props = {
  children: string;
  type?: "filled" | "outlined" | "no-outlined";
  bg?: "primary" | "secondary" | "error";
  props?: ComponentPropsWithoutRef<'button'>;
}

const Button = ({ children, type = "filled", bg = "primary", props }: Props) => {
  const combo = `${type}_${bg}`;
  return (
    <button className={`${styles.default} ${styles[type]} ${styles[bg]} ${styles[combo]}`}>{children}</button>
  )
}

export default Button