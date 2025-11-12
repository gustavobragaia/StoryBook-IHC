import React from 'react';
import './menuLateral.css';
import { User, Settings, LogOut } from 'lucide-react';

export interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuLateral = ({ isOpen, onClose }: MenuLateralProps) => {
  if (!isOpen) return null;

  return (
    <div className="menu-overlay" onClick={onClose}>
      <div className="menu-lateral" onClick={(e) => e.stopPropagation()}>
        <div className="menu-item">
          <User size={18} />
          <span>Perfil</span>
        </div>

        <div className="menu-item">
          <Settings size={18} />
          <span>Configurações</span>
        </div>

        <div className="menu-item sair">
          <LogOut size={18} />
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
};