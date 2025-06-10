import {MODAL_KEYS} from '@/constants/modals.constant'
import useModalStore from '@/store/useModal.store'
import Modal from '../Modal'

type Props = {
	isOpen: boolean
	payload: any
}

const DemoModal = ({isOpen, payload}: Props) => {
	const {closeModal} = useModalStore()
	return (
		<Modal
			visible={isOpen}
			onClose={() => closeModal(MODAL_KEYS.DEMO_MODAL)}
			title='Welcome!'
		>
			<div className='p-2'>
				<p className='text-lg text-black font-medium text-center'>
					{payload?.message}
				</p>
				<div className='flex gap-3 mt-6 justify-center'>
					<button
						onClick={() =>
							closeModal(MODAL_KEYS.DEMO_MODAL, () => {
								alert('Close callback')
							})
						}
						className='bg-gray-700 text-gray-200 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
					>
						Cancel
					</button>

					<button
						onClick={() => {
							alert(payload?.data?.name)
						}}
						className='bg-gradient-to-r from-emerald-500 to-sky-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:from-emerald-600 hover:to-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400'
					>
						Confirm
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default DemoModal
