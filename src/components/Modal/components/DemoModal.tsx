import useFetch from '@/hooks/useFetch'
import Modal from '../Modal'
import dumbServices from '@/services/dumb.service'

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
	const {data, loading} = useFetch(() => dumbServices.getNews({}))

	return (
		<Modal visible={isOpen} onClose={handleCloseModal} title='Welcome!'>
			<div className='p-2 bg-gradient-to-br from-slate-900 via-indigo-950 to-black rounded-2xl min-w-[500px]'>
				<p className='text-lg text-black font-medium text-center'>
					{payload?.message || 'This is the modal!'}
				</p>
				<div className='w-full mt-6 bg-white/10 border border-white/10 rounded-2xl p-5 shadow'>
					<p className='text-white font-bold mb-2'>Test api list</p>
					{loading ? (
						<div className='text-gray-300'>Loading...</div>
					) : data && data.length > 0 ? (
						<ul className='list-disc list-inside text-gray-200 max-h-64 overflow-y-auto'>
							{data.map((item: {ticker: string; name: string}, idx: number) => (
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
