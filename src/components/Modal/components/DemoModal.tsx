import Modal from '../Modal'

type Props = {
	isOpen: boolean
	handleCloseModal: any
	handleConfirm: any
	payload: any
}

const DemoModal = ({
	isOpen,
	handleCloseModal,
	handleConfirm,
	payload,
}: Props) => {
	return (
		<Modal visible={isOpen} onClose={handleCloseModal} title='Welcome!'>
			<div className='p-2'>
				<p className='text-lg text-black font-medium text-center'>
					{payload?.message || 'This is the modal!'}
				</p>
				<div className='flex gap-3 mt-6 justify-center'>
					<button
						onClick={() => handleCloseModal()}
						className='bg-gray-700 text-gray-200 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
					>
						Cancel
					</button>

					<button
						onClick={() => {
							handleConfirm(() => {
								alert(payload?.data?.name)
							})
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
