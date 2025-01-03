import {useEffect, useState} from 'react'

const useFetch = <T>(
	fetchFunction: () => Promise<T> | null,
	dependencies: ReadonlyArray<unknown> = [],
	searchParams?: URLSearchParams
) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)
	const [refetch, setRefetch] = useState<boolean>(false)

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
				setData(response as T)
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

	return {data, loading, error, refetchData}
}

export default useFetch
