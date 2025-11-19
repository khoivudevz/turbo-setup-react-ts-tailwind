# Turbo Setup React + TypeScript + Tailwind

A modern and efficient React starter template with TypeScript, Tailwind CSS, and various development tools pre-configured.

## 🚀 Features

- ⚡️ [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- ⚛️ [React Compiler](https://react.dev/learn/react-compiler) enabled via Babel plugin for automatic optimization
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
├── hooks/            # Custom React hooks organized by category
│   ├── auth/         # Authentication hooks (useAuth, useLogin)
│   ├── common/       # Common hooks (useFetch, useMutation, useKeyPress, useClearModals)
│   ├── news/         # News-related hooks (useNews)
│   └── user/         # User management hooks (useCreateUser, useUpdateUser, useDeleteUser)
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

### React Compiler

The project uses [React Compiler](https://react.dev/learn/react-compiler) via `babel-plugin-react-compiler` for automatic optimization of React components. The compiler is configured in `vite.config.ts` using `@vitejs/plugin-react` (Babel-based) to support Babel plugins.

**Note:** The project uses `@vitejs/plugin-react` instead of `@vitejs/plugin-react-swc` to enable Babel plugin support for the React Compiler.

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

#### useMutation Hook

A powerful hook for handling mutations (POST, PUT, DELETE operations):

```typescript
import useMutation from '@/hooks/use-mutation'

// Basic usage
const {data, isLoading, isError, isSuccess, error, mutate, reset} = useMutation({
  onSuccess: (data) => {
    console.log('User created:', data)
  },
  onError: (error) => {
    console.error('Failed to create user:', error)
  },
})

// Usage in component
const MyComponent = () => {
  const createUser = useMutation()

  const handleSubmit = async (formData) => {
    await createUser.mutate(async (userData) => {
      const response = await api.post('/users', userData)
      return response
    }, formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={createUser.isLoading}>
        {createUser.isLoading ? 'Creating...' : 'Create User'}
      </button>
      {createUser.isSuccess && <div>User created successfully!</div>}
      {createUser.isError && <div>Error: {createUser.error.message}</div>}
    </form>
  )
}
```

#### Specialized Mutation Hooks

The project includes specialized hooks for common operations:

**useCreateUser Hook:**

```typescript
import useCreateUser from '@/hooks/user/use-create-user'

const MyComponent = () => {
  const {createUser, data, isLoading, isError, isSuccess, error, reset} = useCreateUser()

  const handleSubmit = async (formData) => {
    await createUser({
      name: formData.name,
      email: formData.email,
      role: 'user'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create User'}
      </button>
      {isSuccess && <div>User created: {data?.name}</div>}
      {isError && <div>Error: {error?.message}</div>}
    </form>
  )
}
```

**useUpdateUser Hook:**

```typescript
import useUpdateUser from '@/hooks/user/use-update-user'

const MyComponent = () => {
	const {updateUser, isLoading, isSuccess, error} = useUpdateUser()

	const handleUpdate = async (userData) => {
		await updateUser({
			id: 'user-123',
			name: userData.name,
			email: userData.email,
		})
	}
}
```

**useDeleteUser Hook:**

```typescript
import useDeleteUser from '@/hooks/user/use-delete-user'

const MyComponent = () => {
	const {deleteUser, isLoading, isSuccess, error} = useDeleteUser()

	const handleDelete = async (userId) => {
		await deleteUser({id: userId})
	}
}
```

**useLogin Hook:**

```typescript
import useLogin from '@/hooks/auth/use-login'

const MyComponent = () => {
	const {login, data, isLoading, isSuccess, error} = useLogin()

	const handleLogin = async (credentials) => {
		await login({
			email: credentials.email,
			password: credentials.password,
		})
	}
}
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

### useMutation Features

- **Loading states**: `isLoading` for pending operations
- **Success states**: `isSuccess` and `data` for successful operations
- **Error states**: `isError` and `error` for failed operations
- **Flexible execution**: Call `mutate(mutationFn, variables)` with any async function
- **Callbacks**: `onSuccess`, `onError`, and `onSettled` for side effects
- **Reset functionality**: Call `reset()` to clear all states
- **TypeScript support**: Full type safety with generics
- **Promise handling**: Both sync (`mutate`) and async (`mutateAsync`) execution
- **Dynamic mutations**: Pass different mutation functions on each call

### Demo Component

The project includes a comprehensive demo component (`src/components/mutation-demo/mutation-demo.tsx`) that showcases all mutation patterns:

- **Create User Form**: Complete form with validation and success/error states
- **Update User**: Button-based update with loading states
- **Delete User**: Confirmation-style deletion with feedback
- **Login Form**: Authentication form with token handling
- **Reset All**: Clear all mutation states

```typescript
import MutationDemo from '@/components/mutation-demo/mutation-demo'

const App = () => {
  return <MutationDemo />
}
```

The demo component demonstrates:

- Real-world form handling
- Loading state management
- Error handling and display
- Success feedback
- State reset functionality
- TypeScript integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
