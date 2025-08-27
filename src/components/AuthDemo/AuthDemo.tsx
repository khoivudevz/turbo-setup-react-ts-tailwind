import useAuth from '@/hooks/useAuth'
import {User} from '@/types/auth.type'

const AuthDemo = () => {
	const {user, isAuthenticated, login, logout, userName, userEmail, userId} =
		useAuth()

	// Demo function to simulate login without API
	const handleDemoLogin = () => {
		const demoUser: User = {
			id: '1',
			email: 'demo@example.com',
			name: 'Demo User',
			avatar: 'https://via.placeholder.com/100',
			role: 'user',
		}
		const demoToken = 'demo-token-123'

		login(demoUser, demoToken)
	}

	const handleLogout = () => {
		logout()
	}

	if (isAuthenticated) {
		return (
			<div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
				<h2 className='text-2xl font-bold mb-4 text-green-600'>
					✅ Authenticated!
				</h2>
				<div className='space-y-2 mb-6'>
					<p>
						<strong>User ID:</strong> {userId}
					</p>
					<p>
						<strong>Name:</strong> {userName}
					</p>
					<p>
						<strong>Email:</strong> {userEmail}
					</p>
					<p>
						<strong>Avatar:</strong> {user?.avatar || 'N/A'}
					</p>
					<p>
						<strong>Role:</strong> {user?.role || 'N/A'}
					</p>
				</div>
				<button
					onClick={handleLogout}
					className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors'
				>
					Logout
				</button>
			</div>
		)
	}

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold mb-4 text-gray-600'>
				🔒 Not Authenticated
			</h2>

			<p className='mb-6 text-gray-600'>
				This demonstrates the simple{' '}
				<code className='bg-gray-100 px-1 rounded'>useAuth</code> hook. Click
				the button below to simulate a login.
			</p>

			<button
				onClick={handleDemoLogin}
				className='w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition-colors font-semibold'
			>
				Demo Login
			</button>

			<div className='mt-6 p-4 bg-gray-50 rounded'>
				<h3 className='font-semibold mb-2'>
					How to use useAuth in your components:
				</h3>
				<pre className='text-sm text-gray-700 bg-white p-2 rounded overflow-x-auto'>
					{`const { 
  user, 
  isAuthenticated, 
  login, 
  logout 
} = useAuth()

// After API login success:
login(userData, token)

// To logout:
logout()`}
				</pre>
			</div>
		</div>
	)
}

export default AuthDemo
