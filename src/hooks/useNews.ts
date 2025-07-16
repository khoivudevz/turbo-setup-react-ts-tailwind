import useSWR from 'swr'
import dumbServices from '@/services/dumb.service'

export const useNews = () => {
	const {data, isLoading, error} = useSWR('news', () =>
		dumbServices.getNews({})
	)

	return {
		news: data?.data,
		isLoading,
		error,
	}
}

export default useNews
