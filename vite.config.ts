import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import preload from 'vite-plugin-preload'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), preload(), tailwindcss()],
	resolve: {
		alias: [{find: '@', replacement: '/src'}],
	},
	build: {
		outDir: 'build',
	},
})
