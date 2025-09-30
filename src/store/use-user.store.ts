import {
	localStorageKey,
	localStorageServices,
} from '@/services/localStorage.service'
import {User} from '@/types/auth.type'
import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

type Store = {
	user: User | null
	setUser: (data: User | null) => void
}

const useUserStore = create<Store>()(
	devtools(
		(set) => ({
			user:
				localStorageServices.getLocalStorage(localStorageKey.USER_INFOR) ||
				null,
			setUser: (payload: User | null) => set(() => ({user: payload})),
		}),
		{
			name: 'useUserStore',
		}
	)
)

export default useUserStore
