export interface User {
	id: string
	email: string
	name: string
	avatar?: string
	role?: string
	// Add other user properties as needed
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface LoginResponse {
	user: User
	accessToken: string
	refreshToken?: string
}

export interface AuthState {
	user: User | null
	isAuthenticated: boolean
	isLoading: boolean
	error: string | null
}

export interface AuthActions {
	login: (credentials: LoginCredentials) => Promise<void>
	logout: () => void
	register: (userData: RegisterData) => Promise<void>
	refreshToken: () => Promise<void>
	clearError: () => void
	setLoading: (loading: boolean) => void
	initializeAuth: () => void
}

export interface RegisterData {
	email: string
	password: string
	name: string
	confirmPassword: string
}

export type AuthStore = AuthState & AuthActions
