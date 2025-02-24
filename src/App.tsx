import {RouterProvider} from 'react-router-dom'
import router from '@/router/router'
import AppProvider from './providers/AppProvider'
import './i18n/i18n'

function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	)
}

export default App
