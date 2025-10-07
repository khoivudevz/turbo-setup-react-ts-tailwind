import useMutation from '../common/use-mutation'
import {api} from '@/configs/http.config'

type DeleteUserData = {
	id: string
}

type DeleteResponse = {
	message: string
}

const useDeleteUser = () => {
	const {mutate, data, isError, isLoading, isSuccess, error, reset} =
		useMutation<DeleteResponse>({
			onSuccess: (data) => {
				console.log('User deleted successfully:', data)
			},
			onError: (error) => {
				console.error('Failed to delete user:', error)
			},
		})

	const deleteUser = async (userData: DeleteUserData) => {
		return await mutate(async (data) => {
			const response = await api.delete(`/users/${data.id}`)
			return response as unknown as DeleteResponse
		}, userData)
	}

	return {
		deleteUser,
		data,
		isError,
		isLoading,
		isSuccess,
		error,
		reset,
	}
}

export default useDeleteUser
