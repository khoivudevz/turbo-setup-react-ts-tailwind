# Turbo Setup React + TypeScript + Tailwind

A modern and efficient React starter template with TypeScript, Tailwind CSS, and various development tools pre-configured.

## 🚀 Features

- ⚡️ [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📦 [Vite](https://vitejs.dev/) for fast development and building
- 🔍 [ESLint](https://eslint.org/) for code linting
- 💅 [Prettier](https://prettier.io/) for code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) for Git hooks
- 📋 [Commitlint](https://commitlint.js.org/) for conventional commits
- 🏪 [Zustand](https://zustand-demo.pmnd.rs/) for state management
- 🌐 [React Router](https://reactrouter.com/) for routing
- 📅 [Day.js](https://day.js.org/) for date manipulation
- 🔄 [Axios](https://axios-http.com/) for HTTP requests

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- Bun (latest version)

## 📦 Installation

# Clone the repository

```
git clone https://github.com/khoivudevz/turbo-setup-react-ts-tailwind
```

# Install dependencies

```
bun install
```

## 🚀 Development

# Start development server

```
bun dev # Development mode
bun dev:stg # Staging mode
bun dev:prod # Production mode
```

# Start development server

```
bun build # Production build
bun build:stg # Staging build
bun build:dev # Development build
```

## 📁 Development

```
src/
├── configs/        # Configuration files
├── constants/      # Constants
├── hooks/          # Custom hooks
├── pages/          # Page components
├── providers/      # React providers
├── router/         # Routing configuration
├── services/       # API and other services
├── store/          # Zustand store
├── styles/         # Global styles
├── types/          # TypeScript types
├── utils/          # Utility functions
└── views/          # View components
```

## 🔧 Configuration

### Environment Variables

Create `.env` files for different environments:

```
VITE_ENV=development
VITE_API_URL=your_api_url
```

### TypeScript

The project includes two TypeScript configurations:

- `tsconfig.app.json` - Application configuration
- `tsconfig.node.json` - Node.js configuration

### ESLint & Prettier

- ESLint is configured with TypeScript and React rules
- Prettier is set up with custom formatting rules
- Pre-commit hooks ensure code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
