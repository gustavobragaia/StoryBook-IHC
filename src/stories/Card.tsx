import React from 'react';
import './card.css';
import { ArrowRight } from 'lucide-react';

export interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export const Card = ({ icon, title, description, onClick }: CardProps) => {
  return (
    <div className="calmio-card" onClick={onClick}>
      <div className="card-left">
        <div className="card-icon">{icon}</div>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <ArrowRight className="card-arrow" size={18} />
    </div>
  );
};