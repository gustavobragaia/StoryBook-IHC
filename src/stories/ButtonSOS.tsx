import React from 'react';
import './buttonSOS.css';
import { Phone } from 'lucide-react';

export interface ButtonSOSProps {
  label?: string;
  onClick?: () => void;
}

export const ButtonSOS = ({
  label = 'SOS',
  ...props
}: ButtonSOSProps) => {
  return (
    <button
      type="button"
      className="calmio-button-sos"
      {...props}
    >
      <span className="sos-icon">
        <Phone size={18} />
      </span>
      {label}
    </button>
  );
};