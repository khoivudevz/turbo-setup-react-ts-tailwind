import {createBrowserRouter} from 'react-router-dom'
import {APP_URL} from '@/configs/app-url.config'
import {lazy} from 'react'

const HomePageLazy = lazy(() => import('@/pages/HomePage/HomePage'))

const router = createBrowserRouter([
	{
		path: APP_URL.HOME,
		element: <HomePageLazy />,
	},
])

export default router
