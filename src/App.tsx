import {RouterProvider} from 'react-router-dom'
import router from '@/router/router'
import AppProvider from './providers/AppProvider'

function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	)
}

export default App
