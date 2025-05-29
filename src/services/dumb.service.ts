import axios, {AxiosResponse} from 'axios'

const dumbServices = {
	async getNews(params: any): Promise<AxiosResponse<any>> {
		return axios({
			url: 'https://dumbstockapi.com/stock?exchanges=NYSE',
			method: 'GET',
			params: params,
		})
	},
}

export default dumbServices
