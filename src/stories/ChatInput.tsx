import React, { useState } from 'react';
import './chatInput.css';

export interface ChatInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
}

export const ChatInput = ({
  placeholder = 'Responda ou diga “ajuda”',
  onSend,
}: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
    </div>
  );
};