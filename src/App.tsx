import router from '@/router/router'
import {RouterProvider} from 'react-router-dom'
import './i18n/i18n'
import AppProvider from './providers/AppProvider'

function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	)
}

export default App
