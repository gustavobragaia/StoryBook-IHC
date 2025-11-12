import React, { useState } from 'react';
import './header.css';
import { Menu } from 'lucide-react';
import { MenuLateral } from '../stories/MenuLateral';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="calmio-header">
        <button className="menu-icon" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>

        <h1 className="header-title">Calmio</h1>

        <div className="header-placeholder"></div>
      </header>

      <MenuLateral isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};