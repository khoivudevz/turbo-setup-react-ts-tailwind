import {createBrowserRouter} from 'react-router-dom'
import {APP_URL} from '@/configs/app-url.config'
import {HomePageLazy} from './lazy-components'

const router = createBrowserRouter([
	{
		path: APP_URL.HOME,
		element: <HomePageLazy />,
	},
])

export default router
