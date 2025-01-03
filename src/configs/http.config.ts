import axios, {AxiosError} from 'axios'
import ENV from './env.config'

export const api = axios.create({
	baseURL: ENV.apiUrl,
	timeout: 20000, // 20s
	withCredentials: true,
})

api.interceptors.request.use(
	(config) => {
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	(response) => response.data,
	(error: AxiosError) => {
		console.log('Error: ', error)
		return Promise.reject(error)
	}
)
