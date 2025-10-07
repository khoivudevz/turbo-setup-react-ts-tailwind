import {useState} from 'react'
import useCreateUser from '@/hooks/user/use-create-user'
import useUpdateUser from '@/hooks/user/use-update-user'
import useDeleteUser from '@/hooks/user/use-delete-user'
import useLogin from '@/hooks/auth/use-login'

const MutationDemo = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})

	// Mutation hooks
	const createUser = useCreateUser()
	const updateUser = useUpdateUser()
	const deleteUser = useDeleteUser()
	const login = useLogin()

	const handleCreateUser = async (e: React.FormEvent) => {
		e.preventDefault()
		await createUser.createUser({
			name: formData.name,
			email: formData.email,
		})
	}

	const handleUpdateUser = async () => {
		await updateUser.updateUser({
			id: 'user-123',
			name: formData.name,
			email: formData.email,
		})
	}

	const handleDeleteUser = async () => {
		await deleteUser.deleteUser({id: 'user-123'})
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		await login.login({
			email: formData.email,
			password: formData.password,
		})
	}

	return (
		<div className='p-6 max-w-2xl mx-auto space-y-6'>
			<h2 className='text-2xl font-bold text-white mb-6'>
				Mutation Hooks Demo
			</h2>

			{/* Create User Form */}
			<div className='bg-white/10 border border-white/20 rounded-2xl p-6'>
				<h3 className='text-lg font-semibold text-white mb-4'>Create User</h3>
				<form onSubmit={handleCreateUser} className='space-y-4'>
					<input
						type='text'
						placeholder='Name'
						value={formData.name}
						onChange={(e) => setFormData({...formData, name: e.target.value})}
						className='w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<input
						type='email'
						placeholder='Email'
						value={formData.email}
						onChange={(e) => setFormData({...formData, email: e.target.value})}
						className='w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<button
						type='submit'
						disabled={createUser.isLoading}
						className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
					>
						{createUser.isLoading ? 'Creating...' : 'Create User'}
					</button>
					{createUser.isSuccess && (
						<div className='text-green-400 text-sm'>
							User created successfully! ID: {createUser.data?.id}
						</div>
					)}
					{createUser.isError && (
						<div className='text-red-400 text-sm'>
							Error: {createUser.error?.message || 'Failed to create user'}
						</div>
					)}
				</form>
			</div>

			{/* Update User */}
			<div className='bg-white/10 border border-white/20 rounded-2xl p-6'>
				<h3 className='text-lg font-semibold text-white mb-4'>Update User</h3>
				<button
					onClick={handleUpdateUser}
					disabled={updateUser.isLoading}
					className='bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
				>
					{updateUser.isLoading ? 'Updating...' : 'Update User'}
				</button>
				{updateUser.isSuccess && (
					<div className='text-green-400 text-sm mt-2'>
						User updated successfully!
					</div>
				)}
				{updateUser.isError && (
					<div className='text-red-400 text-sm mt-2'>
						Error: {updateUser.error?.message || 'Failed to update user'}
					</div>
				)}
			</div>

			{/* Delete User */}
			<div className='bg-white/10 border border-white/20 rounded-2xl p-6'>
				<h3 className='text-lg font-semibold text-white mb-4'>Delete User</h3>
				<button
					onClick={handleDeleteUser}
					disabled={deleteUser.isLoading}
					className='bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
				>
					{deleteUser.isLoading ? 'Deleting...' : 'Delete User'}
				</button>
				{deleteUser.isSuccess && (
					<div className='text-green-400 text-sm mt-2'>
						User deleted successfully!
					</div>
				)}
				{deleteUser.isError && (
					<div className='text-red-400 text-sm mt-2'>
						Error: {deleteUser.error?.message || 'Failed to delete user'}
					</div>
				)}
			</div>

			{/* Login Form */}
			<div className='bg-white/10 border border-white/20 rounded-2xl p-6'>
				<h3 className='text-lg font-semibold text-white mb-4'>Login</h3>
				<form onSubmit={handleLogin} className='space-y-4'>
					<input
						type='email'
						placeholder='Email'
						value={formData.email}
						onChange={(e) => setFormData({...formData, email: e.target.value})}
						className='w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<input
						type='password'
						placeholder='Password'
						value={formData.password}
						onChange={(e) =>
							setFormData({...formData, password: e.target.value})
						}
						className='w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<button
						type='submit'
						disabled={login.isLoading}
						className='w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
					>
						{login.isLoading ? 'Logging in...' : 'Login'}
					</button>
					{login.isSuccess && (
						<div className='text-green-400 text-sm'>
							Login successful! Welcome {login.data?.user.name}
						</div>
					)}
					{login.isError && (
						<div className='text-red-400 text-sm'>
							Error: {login.error?.message || 'Login failed'}
						</div>
					)}
				</form>
			</div>

			{/* Reset All */}
			<div className='flex gap-4'>
				<button
					onClick={() => {
						createUser.reset()
						updateUser.reset()
						deleteUser.reset()
						login.reset()
					}}
					className='bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors'
				>
					Reset All States
				</button>
			</div>
		</div>
	)
}

export default MutationDemo
