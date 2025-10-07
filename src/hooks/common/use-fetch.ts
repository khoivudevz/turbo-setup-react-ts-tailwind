import {useState, useEffect, useCallback} from 'react'

type UseFetchOptions = {
	immediate?: boolean
	enabled?: boolean
	onSuccess?: (data: any) => void
	onError?: (error: any) => void
}

type UseFetchReturn<T> = {
	data: T | null
	isLoading: boolean
	error: any
	execute: () => Promise<void>
	reset: () => void
}

export function useFetch<T = any>(
	fetcher: () => Promise<T>,
	options: UseFetchOptions = {}
): UseFetchReturn<T> {
	const {immediate = true, enabled = true, onSuccess, onError} = options

	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<any>(null)

	const execute = useCallback(async () => {
		try {
			setIsLoading(true)
			setError(null)
			const result = await fetcher()
			setData(result)
			onSuccess?.(result)
		} catch (err) {
			setError(err)
			onError?.(err)
		} finally {
			setIsLoading(false)
		}
	}, [fetcher, onSuccess, onError])

	const reset = useCallback(() => {
		setData(null)
		setError(null)
		setIsLoading(false)
	}, [])

	useEffect(() => {
		if (immediate && enabled) {
			execute()
		}
	}, [immediate, enabled])

	return {
		data,
		isLoading,
		error,
		execute,
		reset,
	}
}

export default useFetch
