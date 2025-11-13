import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const TypographyDemo = () => {
  return (
    <div style={{ padding: "24px", fontFamily: "Nunito, sans-serif" }}>

      {/* Title 1 */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>
          Title 1 – Nunito 700 / 24px
        </h2>
        <p style={{ fontSize: "24px", fontWeight: 700 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Title 2 */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0 }}>
          Title 2 – Nunito 700 / 20px
        </h2>
        <p style={{ fontSize: "20px", fontWeight: 700 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Subtitle */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>
          Subtitle – Nunito 600 / 16px
        </h2>
        <p style={{ fontSize: "16px", fontWeight: 600 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Body */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 400, margin: 0 }}>
          Body – Nunito 400 / 15px
        </h2>
        <p style={{ fontSize: "15px", fontWeight: 400 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Body small */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "14px", fontWeight: 400, margin: 0 }}>
          Body Small – Nunito 400 / 14px
        </h2>
        <p style={{ fontSize: "14px", fontWeight: 400 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Placeholder */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 400, margin: 0 }}>
          Placeholder – Nunito 400 / 15px / Opacidade 0.7
        </h2>
        <p style={{ fontSize: "15px", fontWeight: 400, opacity: 0.7, color: "#49454F" }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Button */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}>
          Button – Nunito 700 / 16px
        </h2>
        <button
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            padding: "10px 18px",
            borderRadius: "12px",
            backgroundColor: "#E9B0AB",
            color: "#4A1C1C",
            border: "none",
            marginTop: "8px",
          }}
        >
          Exemplo de Botão
        </button>
      </div>

    </div>
  );
};

const meta = {
  title: "Calmio/Typography",
  component: TypographyDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};