import DemoModal from '@/components/Modal/components/DemoModal'
import {MODAL_KEYS} from '@/constants/modals.constant'
import useModalStore from '@/store/useModal.store'
import {FC} from 'react'

type Props = {
	children: React.ReactNode
}

const ModalsProvider: FC<Props> = ({children}) => {
	const {modals} = useModalStore()
	return (
		<>
			{children}

			<DemoModal
				isOpen={modals[MODAL_KEYS.DEMO_MODAL]?.isOpen}
				payload={modals[MODAL_KEYS.DEMO_MODAL]?.payload}
			/>
		</>
	)
}

export default ModalsProvider
