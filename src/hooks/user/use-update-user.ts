import useMutation from '../common/use-mutation'
import {api} from '@/configs/http.config'

type UpdateUserData = {
	id: string
	name?: string
	email?: string
	role?: string
}

type User = {
	id: string
	name: string
	email: string
	role: string
	createdAt: string
}

const useUpdateUser = () => {
	const {mutate, data, isError, isLoading, isSuccess, error, reset} =
		useMutation<User>({
			onSuccess: (data) => {
				console.log('User updated successfully:', data)
			},
			onError: (error) => {
				console.error('Failed to update user:', error)
			},
		})

	const updateUser = async (userData: UpdateUserData) => {
		return await mutate(async (data) => {
			const {id, ...updateData} = data
			const response = await api.put(`/users/${id}`, updateData)
			return response as unknown as User
		}, userData)
	}

	return {
		updateUser,
		data,
		isError,
		isLoading,
		isSuccess,
		error,
		reset,
	}
}

export default useUpdateUser
