import {useState, useCallback} from 'react'

type UseMutationOptions<TData> = {
	onSuccess?: (data: TData) => void
	onError?: (error: any) => void
	onSettled?: (data: TData | undefined, error: any) => void
}

type UseMutationReturn<TData> = {
	data: TData | null
	isLoading: boolean
	isError: boolean
	isSuccess: boolean
	error: any
	mutate: <TVariables = any>(
		mutationFn: (variables: TVariables) => Promise<TData>,
		variables?: TVariables
	) => Promise<TData | undefined>
	mutateAsync: <TVariables = any>(
		mutationFn: (variables: TVariables) => Promise<TData>,
		variables?: TVariables
	) => Promise<TData>
	reset: () => void
}

export function useMutation<TData = any>(
	options: UseMutationOptions<TData> = {}
): UseMutationReturn<TData> {
	const {onSuccess, onError, onSettled} = options

	const [data, setData] = useState<TData | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [error, setError] = useState<any>(null)

	const mutate = useCallback(
		async <TVariables = any>(
			mutationFn: (variables: TVariables) => Promise<TData>,
			variables?: TVariables
		): Promise<TData | undefined> => {
			try {
				setIsLoading(true)
				setIsError(false)
				setIsSuccess(false)
				setError(null)

				const result = await mutationFn(variables as TVariables)
				setData(result)
				setIsSuccess(true)
				onSuccess?.(result)
				onSettled?.(result, null)

				return result
			} catch (err) {
				setError(err)
				setIsError(true)
				setIsSuccess(false)
				onError?.(err)
				onSettled?.(undefined, err)
				return undefined
			} finally {
				setIsLoading(false)
			}
		},
		[onSuccess, onError, onSettled]
	)

	const mutateAsync = useCallback(
		async <TVariables = any>(
			mutationFn: (variables: TVariables) => Promise<TData>,
			variables?: TVariables
		): Promise<TData> => {
			const result = await mutate(mutationFn, variables)
			if (result === undefined) {
				throw error
			}
			return result
		},
		[mutate, error]
	)

	const reset = useCallback(() => {
		setData(null)
		setIsLoading(false)
		setIsError(false)
		setIsSuccess(false)
		setError(null)
	}, [])

	return {
		data,
		isLoading,
		isError,
		isSuccess,
		error,
		mutate,
		mutateAsync,
		reset,
	}
}

export default useMutation
