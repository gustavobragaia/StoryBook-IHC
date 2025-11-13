import React from 'react';
import './chatBubble.css';

export interface ChatBubbleProps {
  message: string;
  sender?: 'bot' | 'user';
}

export const ChatBubble = ({ message, sender = 'bot' }: ChatBubbleProps) => {
  return (
    <div className={`chat-bubble ${sender}`}>
      <p>{message}</p>
    </div>
  );
};