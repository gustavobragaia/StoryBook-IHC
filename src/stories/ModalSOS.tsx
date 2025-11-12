import React from 'react';
import './modalSOS.css';
import { X, User, HeartHandshake } from 'lucide-react';

export interface ModalSOSProps {
  onClose: () => void;
  onCallContact?: () => void;
  onCallCVV?: () => void;
}

export const ModalSOS = ({ onClose, onCallContact, onCallCVV }: ModalSOSProps) => {
  return (
    <div className="sos-overlay">
      <div className="sos-modal">
        <button className="sos-close" onClick={onClose}>
          <X size={20} />
        </button>

        <h2>Parece que você não está bem...</h2>
        <p>Gostaria de falar com alguém?</p>

        <div className="sos-options">
          <button className="sos-action" onClick={onCallContact}>
            <span className="sos-icon yellow">
              <User size={18} />
            </span>
            <span>
              Ligar para meu<br />
              <strong>contato de segurança</strong>
            </span>
          </button>

          <button className="sos-action" onClick={onCallCVV}>
            <span className="sos-icon yellow">
              <HeartHandshake size={18} />
            </span>
            <span>
              Ligar para o<br />
              <strong>Centro de Valorização da Vida</strong>
            </span>
          </button>
        </div>

        <button className="sos-cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};