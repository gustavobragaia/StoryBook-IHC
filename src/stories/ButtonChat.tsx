import React from 'react';
import './buttonChat.css';
import { MessageSquare } from 'lucide-react';

export interface ButtonChatProps {
  label?: string;
  onClick?: () => void;
}

export const ButtonChat = ({
  label = 'Chat',
  ...props
}: ButtonChatProps) => {
  return (
    <button
      type="button"
      className="calmio-button-chat"
      {...props}
    >
      <span className="chat-icon">
        <MessageSquare size={18} />
      </span>
      {label}
    </button>
  );
};