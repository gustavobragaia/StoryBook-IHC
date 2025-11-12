import React from 'react';
import './cardExercicio.css';
import { Check } from 'lucide-react';

export interface CardExercicioProps {
  imagem?: string;
  titulo: string;
  descricao: string;
  concluido?: boolean;
  onClick?: () => void;
}

export const CardExercicio = ({
  imagem,
  titulo,
  descricao,
  concluido = false,
  onClick,
}: CardExercicioProps) => {
  return (
    <div className="card-exercicio" onClick={onClick}>
      <div className="exercicio-left">
        {imagem && <img src={imagem} alt={titulo} className="exercicio-img" />}
        <div className="exercicio-text">
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
      </div>

      {concluido && (
        <div className="check-badge">
          <Check size={18} color="#FFFFFF" />
        </div>
      )}
    </div>
  );
};