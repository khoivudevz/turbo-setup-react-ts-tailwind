import {MODAL_KEYS} from '@/constants/modals.constant'
import useModalStore from '@/store/useModal.store'
import Modal from '../Modal'
import useNews from '@/hooks/useNews'

type Props = {
	isOpen: boolean
	payload: any
}

const DemoModal = ({isOpen, payload}: Props) => {
	const {closeModal} = useModalStore()
	const {news, isLoading} = useNews()

	const handleClose = () => {
		closeModal(MODAL_KEYS.DEMO_MODAL, () => {
			alert('Close callback')
		})
	}

	return (
		<Modal
			visible={isOpen}
			onClose={handleClose}
			title={<p className='text-white'>Welcome!</p>}
		>
			<div className='p-2'>
				<p className='text-lg text-white font-medium text-center'>
					{payload?.message}
				</p>
				<div className='w-full mt-6 bg-white/10 border border-white/10 rounded-2xl p-5 shadow'>
					<p className='text-white font-bold mb-2'>Test api list</p>
					{isLoading ? (
						<div className='text-gray-300'>Loading...</div>
					) : news && news.length > 0 ? (
						<ul className='list-disc list-inside text-gray-200 max-h-64 overflow-y-auto'>
							{news.map((item: {ticker: string; name: string}, idx: number) => (
								<li key={idx} className='mb-1'>
									<span className='font-semibold text-sky-300'>
										{item.ticker}
									</span>
									: {item.name}
								</li>
							))}
						</ul>
					) : (
						<div className='text-gray-400'>No data found.</div>
					)}
				</div>
				<div className='flex gap-3 mt-6 justify-center'>
					<button
						onClick={handleClose}
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
