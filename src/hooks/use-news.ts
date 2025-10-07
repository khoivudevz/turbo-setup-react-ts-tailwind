import useFetch from './use-fetch'
import dumbServices from '@/services/dumb.service'

export const useNews = () => {
	const {data, isLoading, error, execute} = useFetch(
		() => dumbServices.getNews({}),
		{immediate: true}
	)

	return {
		news: data?.data,
		isLoading,
		error,
		refetch: execute,
	}
}

export default useNews
