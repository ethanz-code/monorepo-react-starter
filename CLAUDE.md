# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `pnpm dev` - Start Vite development server
- `pnpm build` - Build for production (TypeScript compilation + Vite build)
- `pnpm preview` - Preview production build locally

### Code Quality

- `pnpm lint` - Run all linting (oxlint + ESLint)
- `pnpm lint:oxlint` - Run oxlint with auto-fix
- `pnpm lint:eslint` - Run ESLint with auto-fix
- `pnpm format` - Format code using Prettier (app/ directory only)
- `pnpm format-watch` - Watch for changes and auto-format

### Package Management

- `pnpm install` - Install dependencies
- `pnpm commit` - Interactive commit using commitlint

## Project Architecture

### Monorepo Structure

This is a pnpm workspace-based monorepo with the following structure:

- **Root**: Main React application built with Vite
- **packages/**: Workspace packages (currently has placeholder, ready for expansion)
- Uses pnpm workspace configuration for dependency management

### Core Technologies

- **React 19** with TypeScript
- **React Router 7** for routing
- **Vite** as build tool with SWC for fast compilation
- **TailwindCSS 4** with @tailwindcss/vite plugin for styling
- **Zustand** state management via @ethan-utils/zustand
- **Axios** HTTP client via @ethan-utils/axios

### Source Structure

```
src/
├── App.tsx              # Main app component with RouterProvider
├── main.tsx             # React app entry point
├── router/
│   └── index.ts         # React Router configuration
├── views/
│   └── Home.tsx         # Page components
└── assets/              # Static assets and global CSS
```

### State Management

- Uses @ethan-utils/zustand wrapper for Zustand
- Example implementation in Home.tsx shows localStorage persistence
- Store pattern: create with state, actions, and optional persistence config

### Styling

- TailwindCSS 4 with Vite plugin integration
- Global styles in src/assets/main.css
- Dark theme implementation in Home component

### Code Quality Tools

- **ESLint + TypeScript ESLint**: Uses flat config with React, React Hooks, and oxlint plugins
- **oxlint**: Fast linter for correctness rules
- **Prettier**: Code formatting (targets app/ directory)
- **Husky + lint-staged**: Pre-commit hooks
- **Commitlint**: Conventional commit message enforcement

### Development Features

- **code-inspector-plugin**: For debugging in development
- **Hot Module Replacement**: Via Vite + React SWC
- **TypeScript**: Strict configuration across multiple tsconfig files

### Build Configuration

- Uses TypeScript project references (tsconfig.base.json, tsconfig.app.json, tsconfig.node.json)
- Vite optimized for React SWC compilation
- Production build includes TypeScript compilation step

### Testing

No test framework is currently configured. When adding tests, check the project's preferred testing approach.
