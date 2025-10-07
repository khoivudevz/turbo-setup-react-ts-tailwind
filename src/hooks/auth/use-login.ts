import useMutation from '../common/use-mutation'
import {api} from '@/configs/http.config'

type LoginData = {
	email: string
	password: string
}

type User = {
	id: string
	name: string
	email: string
	role: string
	createdAt: string
}

type LoginResponse = {
	user: User
	token: string
}

const useLogin = () => {
	const {mutate, data, isError, isLoading, isSuccess, error, reset} =
		useMutation<LoginResponse>({
			onSuccess: (data) => {
				console.log('Login successful:', data)
				// Store token, update auth state, etc.
			},
			onError: (error) => {
				console.error('Login failed:', error)
			},
		})

	const login = async (credentials: LoginData) => {
		return await mutate(async (data) => {
			const response = await api.post('/auth/login', data)
			return response as unknown as LoginResponse
		}, credentials)
	}

	return {
		login,
		data,
		isError,
		isLoading,
		isSuccess,
		error,
		reset,
	}
}

export default useLogin
