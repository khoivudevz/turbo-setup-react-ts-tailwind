import axios, {AxiosError} from 'axios'
import ENV from './env.config'
import {getAuth, removeAuth} from '@/services/cookie.service'
import {
	localStorageKey,
	localStorageServices,
} from '@/services/localStorage.service'

export const api = axios.create({
	baseURL: ENV.apiUrl,
	timeout: 20000, // 20s
	withCredentials: true,
})

api.interceptors.request.use(
	(config) => {
		// Automatically add auth token to requests
		const token = getAuth()
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	(response) => response.data,
	async (error: AxiosError) => {
		console.log('Error: ', error)

		// Handle 401 Unauthorized errors
		if (error.response?.status === 401) {
			removeAuth()
			localStorageServices.removeLocalStorage(localStorageKey.USER_INFOR)
			window.location.href = '/login'
		}

		return Promise.reject(error)
	}
)
