import React from 'react';
import './buttonConcluir.css';

export interface ButtonConcluirProps {
  label?: string;
  onClick?: () => void;
}

export const ButtonConcluir = ({
  label = 'Concluir',
  ...props
}: ButtonConcluirProps) => {
  return (
    <button
      type="button"
      className="calmio-button-concluir"
      {...props}
    >
      {label}
    </button>
  );
};