import useUserStore from '@/store/use-user.store'
import {User} from '@/types/auth.type'
import {saveAuth, removeAuth} from '@/services/cookie.service'
import {
	localStorageServices,
	localStorageKey,
} from '@/services/localStorage.service'

export const useAuth = () => {
	const {user, setUser} = useUserStore()

	const login = (userData: User, token: string) => {
		saveAuth(token)
		localStorageServices.setLocalStorage(userData, localStorageKey.USER_INFOR)
		setUser(userData)
	}

	// Simple logout function
	const logout = () => {
		removeAuth()
		localStorageServices.removeLocalStorage(localStorageKey.USER_INFOR)
		setUser(null) // Clear user
	}

	// Helper computed values
	const isAuthenticated = !!user
	const isGuest = !isAuthenticated
	const userName = user?.name || ''
	const userEmail = user?.email || ''
	const userRole = user?.role || ''
	const userId = user?.id || ''

	return {
		// Auth State
		user,
		isAuthenticated,
		isGuest,

		// User Info Helpers
		userId,
		userName,
		userEmail,
		userRole,

		// Auth Actions
		login,
		logout,
		setUser,

		// Utility functions
		hasUser: !!user,
	}
}

export default useAuth
