import useMutation from '../common/use-mutation'
import {api} from '@/configs/http.config'

type CreateUserData = {
	name: string
	email: string
	role?: string
}

type User = {
	id: string
	name: string
	email: string
	role: string
	createdAt: string
}

const useCreateUser = () => {
	const {mutate, data, isError, isLoading, isSuccess, error, reset} =
		useMutation<User>({
			onSuccess: (data) => {
				console.log('User created successfully:', data)
				// You can add additional success logic here
				// e.g., show toast notification, update cache, etc.
			},
			onError: (error) => {
				console.error('Failed to create user:', error)
				// You can add additional error handling here
				// e.g., show error toast, log to monitoring service, etc.
			},
		})

	const createUser = async (userData: CreateUserData) => {
		return await mutate(async (data) => {
			const response = await api.post('/users', data)
			return response as unknown as User
		}, userData)
	}

	return {
		createUser,
		data,
		isError,
		isLoading,
		isSuccess,
		error,
		reset,
	}
}

export default useCreateUser
