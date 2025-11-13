import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const colorTokens = {
  primary: {
    name: "Primary",
    value: "#E9B0AB",
    description: "Botão SOS",
  },
  primaryDark: {
    name: "Primary Dark",
    value: "#FF8181",
    description: "Ícone SOS",
  },
  chatButton: {
    name: "Chat Button",
    value: "#F5E5B8",
    description: "Botão de chat",
  },
  chatIcon: {
    name: "Chat Icon",
    value: "#F9D65C",
    description: "Ícone do botão de chat",
  },
  cardBackground: {
    name: "Card BG",
    value: "#FFFFF3",
    description: "Fundo dos cards",
  },
  cardIconBackground: {
    name: "Card Icon BG",
    value: "#F6EDD3",
    description: "Fundo do ícone nos cards",
  },
  exerciseDone: {
    name: "Exercise Done",
    value: "#94B376",
    description: "Ícone de check / botão concluir",
  },
  chatBubbleBot: {
    name: "Chat Bubble (Bot)",
    value: "#FBEBB1",
    description: "Fundo das mensagens do bot",
  },
  inputBackground: {
    name: "Input Background",
    value: "#EAE6F5",
    description: "Campo de resposta do usuário",
  },
  placeholder: {
    name: "Placeholder",
    value: "#49454F",
    description: "Placeholder do input",
  },
  modalBackground: {
    name: "Modal BG",
    value: "#F6EDD3",
    description: "Fundo geral dos modais",
  },
};

const ColorsDemo = () => {
  return (
    <div style={{ padding: "24px", fontFamily: "Nunito, sans-serif" }}>
      <h2 style={{ fontWeight: 700, fontSize: "24px", marginBottom: "20px" }}>
        Calmio – Color System
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {Object.entries(colorTokens).map(([key, token]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Circle / Preview */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: token.value,
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            ></div>

            {/* Text info */}
            <div>
              <div style={{ fontWeight: 700 }}>{token.name}</div>
              <div style={{ opacity: 0.8 }}>{token.value}</div>
              <div style={{ fontSize: "14px", opacity: 0.7 }}>{token.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: "Calmio/Colors",
  component: ColorsDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};