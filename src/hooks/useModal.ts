import useModalStore from '@/store/useModal.store'

const useModal = <T>(modalName: string) => {
	const {openModal, closeModal, modals} = useModalStore()

	const isOpen = modals[modalName]?.isOpen
	const payload = modals[modalName]?.payload as T | undefined

	const handleOpenModal = (payload?: T) => {
		openModal(modalName, payload)
	}

	const handleCloseModal = (callback?: () => void) => {
		closeModal(modalName)
		callback?.()
	}

	const handleConfirm = (callback?: () => void) => {
		if (!callback) return
		callback()
	}

	return {
		isOpen,
		payload,
		handleOpenModal,
		handleCloseModal,
		handleConfirm,
	}
}

export default useModal
