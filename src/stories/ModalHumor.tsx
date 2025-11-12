import React, { useState } from 'react';
import './modalHumor.css';
import { X, Frown, Meh, Smile, Laugh, NotebookPen } from 'lucide-react';

export interface ModalHumorProps {
  onClose: () => void;
}

export const ModalHumor = ({ onClose }: ModalHumorProps) => {
  const [emojiIndex, setEmojiIndex] = useState(3);
  const emojis = [<Frown />, <Meh />, <Smile />, <Laugh />];

  return (
    <div className="humor-overlay">
      <div className="humor-modal">
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h2>Como você se sente hoje?</h2>

        <div className="emoji-container">
          {emojis.map((emoji, index) => (
            <div
              key={index}
              className={`emoji-item ${emojiIndex === index ? 'active' : ''}`}
              onClick={() => setEmojiIndex(index)}
            >
              {emoji}
            </div>
          ))}
        </div>

        <input
          type="range"
          min="0"
          max="3"
          value={emojiIndex}
          className="humor-slider"
          onChange={(e) => setEmojiIndex(parseInt(e.target.value))}
        />

        <div className="diario-box">
          <p>Escreva aqui o que está passando pela sua mente</p>
          <NotebookPen size={30} />
        </div>
      </div>
    </div>
  );
};