import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

export type ModalKey = string

export type ModalState = {
	isOpen: boolean
	payload?: unknown
}

export type ModalsStore = {
	modals: Record<ModalKey, ModalState>
	openModal: (key: ModalKey, payload?: unknown) => void
	closeModal: (key: ModalKey, callback?: () => void) => void
	toggleModal: (key: ModalKey, payload?: unknown) => void
}

const useModalStore = create<ModalsStore>()(
	devtools(
		(set, get) => ({
			modals: {},
			openModal: (key, payload) =>
				set((state) => ({
					modals: {
						...state.modals,
						[key]: {isOpen: true, payload},
					},
				})),
			closeModal: (key, callback) => {
				set((state) => ({
					modals: {
						...state.modals,
						[key]: {isOpen: false},
					},
				}))
				callback?.()
			},
			toggleModal: (key, payload) => {
				const current = get().modals[key]?.isOpen
				set((state) => ({
					modals: {
						...state.modals,
						[key]: {isOpen: !current, payload},
					},
				}))
			},
		}),
		{name: 'useModalStore'}
	)
)

export default useModalStore
