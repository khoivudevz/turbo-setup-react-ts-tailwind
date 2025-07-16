import App from '@/App.tsx'
import '@/styles/index.css'
import {NuqsAdapter} from 'nuqs/adapters/react'
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<NuqsAdapter>
		<App />
	</NuqsAdapter>
)
