# Calmio — HCI Component Standardization

This repository is a small React + TypeScript project used for a Human–Computer Interaction class to standardize UI elements and patterns. Components are developed and showcased with Storybook.

Quick start

- Install: npm install
- Run app: npm run dev
- Run Storybook: npm run storybook
- Build: npm run build

Key files and scripts

- Project scripts: [package.json](package.json)
- Vite config: [vite.config.ts](vite.config.ts)
- Storybook config: [.storybook/main.ts](.storybook/main.ts)
- App entry: [src/main.tsx](src/main.tsx)

Main components (stories)

- [`Header`](src/stories/Header.tsx)
- [`MenuLateral`](src/stories/MenuLateral.tsx)
- [`ButtonSOS`](src/stories/ButtonSOS.tsx)
- [`SOSButtonWithModal`](src/stories/SOSButtonWithModal.tsx)
- [`ModalSOS`](src/stories/ModalSOS.tsx)
- [`ModalHumor`](src/stories/ModalHumor.tsx)
- [`Card`](src/stories/Card.tsx)
- [`CardExercicio`](src/stories/CardExercicio.tsx)
- [`ButtonChat`](src/stories/ButtonChat.tsx)
- [`ButtonConcluir`](src/stories/ButtonConcluir.tsx)

Notes

- Stories and styles live under [src/stories](src/stories).
- Keep components small and consistent; use Storybook stories as the source of truth for UI patterns.
