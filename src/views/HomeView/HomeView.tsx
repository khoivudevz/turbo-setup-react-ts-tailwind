import {useTranslation} from 'react-i18next'
import DemoModal from '@/components/Modal/components/DemoModal'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'
import useModal from '@/hooks/useModal'

const features = [
	{
		icon: (
			<svg
				className='w-8 h-8 text-teal-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M13 16h-1v-4h-1m1-4h.01M12 20.5A8.5 8.5 0 1 0 12 3.5a8.5 8.5 0 0 0 0 17Z'
				/>
			</svg>
		),
		titleKey: 'home.features.typescript.title',
		descKey: 'home.features.typescript.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-violet-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 4.5l7 3v4.75c0 5.25-3.4 9.42-7 10.25-3.6-.83-7-5-7-10.25V7.5l7-3z'
				/>
				<path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4' />
			</svg>
		),
		titleKey: 'home.features.husky.title',
		descKey: 'home.features.husky.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-emerald-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
			</svg>
		),
		titleKey: 'home.features.tailwind.title',
		descKey: 'home.features.tailwind.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-sky-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<circle cx='12' cy='12' r='9' />
				<path d='M2.5 12h19' />
				<path d='M12 2.5c2.5 3.5 2.5 15.5 0 19' />
				<path d='M12 2.5c-2.5 3.5-2.5 15.5 0 19' />
			</svg>
		),
		titleKey: 'home.features.i18n.title',
		descKey: 'home.features.i18n.desc',
	},
]

const HomeView = () => {
	const {t} = useTranslation()
	const {handleOpenModal, handleCloseModal, isOpen, payload, handleConfirm} =
		useModal<{message?: string; data?: {name: string}}>('myModal')

	return (
		<>
			<div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black'>
				<div className='flex flex-col items-center w-full max-w-3xl mx-4'>
					{/* Hero Card */}
					<div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center space-y-6 w-full'>
						{/* Avatar/Logo */}
						<div className='bg-gradient-to-tr from-slate-800 via-indigo-900 to-slate-900 rounded-full p-2 shadow-lg mb-2'>
							<img
								src='/rocket.svg'
								alt='Logo'
								className='w-20 h-20 rounded-full border-4 border-white/20 shadow-xl'
							/>
						</div>
						{/* Headline & Subheading */}
						<h1 className='text-white text-5xl font-extrabold drop-shadow-lg text-center tracking-tight'>
							{t('home.heroTitle')}
						</h1>
						<p className='text-gray-200 text-lg text-center max-w-xl'>
							{t('home.heroDesc')}
						</p>
						<SwitchLanguage />
						{/* Get Started Button */}
						<button
							className='bg-gradient-to-r from-teal-500 to-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-teal-600 hover:to-violet-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 text-lg'
							onClick={() =>
								handleOpenModal({
									message: t('home.modalDemoMessage'),
									data: {name: t('home.modalDemoName')},
								})
							}
						>
							{t('home.modalDemo')}
						</button>
					</div>
					{/* Features Grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full'>
						{features.map((f, i) => (
							<div
								key={i}
								className='flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-5 shadow hover:shadow-xl transition-all'
							>
								<div>{f.icon}</div>
								<div>
									<div className='text-white font-bold text-lg'>
										{t(f.titleKey)}
									</div>
									<div className='text-gray-300 text-sm'>{t(f.descKey)}</div>
								</div>
							</div>
						))}
					</div>

					{/* Home page */}
					<a
						href='https://turbo-setup.vercel.app/'
						className='mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-sky-700 to-indigo-900 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-sky-800 hover:to-indigo-950 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-700'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z' />
						</svg>
						{t('home.visitHomepage')}
					</a>
				</div>
			</div>
			<DemoModal
				isOpen={isOpen}
				handleCloseModal={handleCloseModal}
				handleConfirm={handleConfirm}
				payload={payload}
			/>
		</>
	)
}

export default HomeView
