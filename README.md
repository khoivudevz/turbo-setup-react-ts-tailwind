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
- 🔄 Custom `use-fetch` hook for data fetching

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
bun run dev
```

# Build command

```
bun run build
```

# Start preview

```
bun run preview
```

## 📁 Development

```
src/
├── assets/           # Static assets (images, fonts, icons)
├── components/       # Reusable UI components
├── configs/          # Configuration files (env, http, app urls)
├── constants/        # Application constants and shared values
├── hooks/            # Custom React hooks (useFetch, useNews, useAuth, useKeyPress)
├── layouts/          # Layout components and templates
├── pages/            # Page components (routing entry points, data fetching)
├── providers/        # React context providers
├── router/           # Routing configuration
├── services/         # Browser services (cookies, localStorage)
├── store/            # State management with Zustand
├── styles/           # Global styles and Tailwind imports
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── views/            # View components (pure presentation, reusable UI)
```

## 📁 Directory Structure Explained

### Pages vs Views

This project uses a clear separation between **Pages** and **Views** to maintain clean architecture:

**Pages** (`src/pages/`):

- **Routing entry points** - Directly referenced by the router
- **Data fetching layer** - Handle API calls, route parameters, authentication
- **Layout orchestration** - Decide which layout to use
- **Error handling** - Loading states, error boundaries
- **Minimal UI** - Just composition and data preparation

**Views** (`src/views/`):

- **Pure presentation components** - Focused on UI rendering
- **Reusable across different pages** - Same view can be used in different contexts
- **Business logic** - Form handling, user interactions, component composition
- **Props-based** - Receive data from pages as props

### Example Structure

```typescript
// src/pages/home-page/home-page.tsx
const HomePage = () => {
  // Data fetching, route params, auth checks
  const { data, loading, error } = useHomeData()

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorPage />

  return <HomeView data={data} />
}

// src/views/home-view/home-view.tsx
interface HomeViewProps {
  data: HomeData
}

const HomeView = ({ data }: HomeViewProps) => {
  // Pure presentation logic
  // All UI components and interactions
}
```

### Benefits

- **Testability** - Views can be tested independently with mock data
- **Reusability** - Same view can be used across different pages
- **Clear responsibilities** - Pages handle data, Views handle presentation
- **Easier maintenance** - Changes to data fetching don't affect UI logic
- **Better code organization** - Clear separation of concerns

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

## 🌍 Internationalization (i18n)

This project uses [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/) for internationalization support. The translations are stored in JSON files located in the `src/i18n/translations` directory.

### Adding a New Language

1. Create a new JSON file in the `src/i18n/translations` directory with the language code as the filename (e.g., `fr.json` for French).

2. Add your translations in the new JSON file. For example:

   ```json
   {
   	"translation": {
   		"welcome": "Bienvenue à React, tailwindcss et plus"
   	}
   }
   ```

### Switching Languages

The `SwitchLanguage` component allows users to switch between available languages. It uses the `useTranslation` hook from `react-i18next` to change the language dynamically.

Example usage in a component:

```typescript:src/views/HomeView/HomeView.tsx
import {useTranslation} from 'react-i18next'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'

const HomeView = () => {
  const {t} = useTranslation()
  return (
    <div>
      <p>{t('welcome')}</p>
      <SwitchLanguage />
    </div>
  )
}
```

## 📡 Data Fetching

This project uses a custom `use-fetch` hook for data fetching, which provides:

- Simple and lightweight data fetching
- Loading state management
- Error handling
- TypeScript support
- Conditional fetching with `enabled` option
- Manual execution control

### Custom Hooks

The project includes custom hooks for data fetching:

#### useFetch Hook

A flexible hook for data fetching with conditional support:

```typescript
import useFetch from '@/hooks/use-fetch'

// Basic usage
const {data, isLoading, error, execute, reset} = useFetch(() => api.getData(), {
	immediate: true,
})

// Conditional fetching
const {data, isLoading, error} = useFetch(() => api.getData(), {
	immediate: true,
	enabled: shouldFetch, // Only fetch when condition is true
})

// Manual fetching
const {data, isLoading, error, execute} = useFetch(
	() => api.getData(),
	{immediate: false} // Don't fetch automatically
)

// Then call execute() manually when needed
```

#### useNews Hook

A custom hook for fetching news data:

```typescript
import useNews from '@/hooks/use-news'

const MyComponent = () => {
  const { news, isLoading, error, refetch } = useNews()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading news</div>

  return (
    <div>
      {news?.map(item => (
        <div key={item.ticker}>{item.name}</div>
      ))}
      <button onClick={refetch}>Refresh News</button>
    </div>
  )
}
```

### useFetch Features

- **Automatic fetching**: Set `immediate: true` to fetch on mount
- **Conditional fetching**: Use `enabled` option to control when to fetch
- **Manual control**: Call `execute()` to fetch manually
- **Error handling**: Built-in error state management
- **Loading states**: Automatic loading state management
- **Reset functionality**: Call `reset()` to clear data and error states
- **TypeScript support**: Full type safety with generics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
