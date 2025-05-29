import {AxiosResponse} from 'axios'
import {useEffect, useState} from 'react'

const useFetch = <T>(
	fetchFunction: () => Promise<AxiosResponse<T>> | null,
	dependencies: ReadonlyArray<unknown> = [],
	searchParams?: URLSearchParams
) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)
	const [refetch, setRefetch] = useState<boolean>(false)
	const [status, setStatus] = useState<number | null>(null)

	const refetchData = () => {
		setRefetch(!refetch)
	}

	useEffect(() => {
		if (data !== null || error !== null) {
			setLoading(false)
		}
	}, [data, error])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetchFunction()
				if (!response) {
					setError(new Error('No response'))
					return
				}
				setData(response.data as T)
				setStatus(response.status)
				setError(null)
			} catch (error) {
				setError(error as Error)
				setData(null)
			}
		}

		if (searchParams && !searchParams.size) {
			setLoading(false)
			return
		}

		fetchData()
	}, [...dependencies, searchParams, refetch])

	return {data, loading, error, refetchData, status}
}

export default useFetch
