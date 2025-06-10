import useModalStore, {ModalKey} from '@/store/useModal.store'
import {useEffect} from 'react'

const useClearModals = (keys: ModalKey[]) => {
	const {closeModal} = useModalStore()

	useEffect(() => {
		keys.forEach((key) => {
			closeModal(key)
		})
	}, [keys])
}

export default useClearModals
