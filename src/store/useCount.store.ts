import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

type Store = {
	count: number
	setCount: (data: number) => void
}

const useCountStore = create<Store>()(
	devtools(
		(set) => ({
			count: 0,
			setCount: (payload: number) => set(() => ({count: payload})),
		}),
		{
			name: 'useCountStore',
		}
	)
)

export default useCountStore
