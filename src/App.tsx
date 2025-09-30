import router from '@/router/router'
import {RouterProvider} from 'react-router-dom'
import './i18n/i18n'
import AppProvider from './providers/app-provider'
import ModalsProvider from './providers/modals-provider'

function App() {
	return (
		<AppProvider>
			<ModalsProvider>
				<RouterProvider router={router} />
			</ModalsProvider>
		</AppProvider>
	)
}

export default App
