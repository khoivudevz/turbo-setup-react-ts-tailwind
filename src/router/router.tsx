import {createBrowserRouter} from 'react-router-dom'
import {APP_URL} from '@/configs/app-url.config'
import {HomePageLazy, MainLayoutLazy} from './lazy-components'

const router = createBrowserRouter([
	{
		path: APP_URL.HOME,
		element: <MainLayoutLazy children={<HomePageLazy />} />,
	},
])

export default router
