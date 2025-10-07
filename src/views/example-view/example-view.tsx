import SearchDemo from '@/components/search-demo/search-demo'
import SearchResult from '@/components/search-demo/search-result'
import SwitchLanguage from '@/components/switch-language/switch-language'
import {MODAL_KEYS} from '@/constants/modals.constant'
import useClearModals from '@/hooks/common/use-clear-modals'
import useModalStore from '@/store/use-modal.store'
import {useTranslation} from 'react-i18next'

const features = [
	{
		icon: (
			<svg
				className='w-8 h-8 text-sky-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 3.5 2.5 15.5 0 19m0-19c-2.5 3.5-2.5 15.5 0 19'
				/>
			</svg>
		),
		titleKey: 'home.features.react.title',
		descKey: 'home.features.react.desc',
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
				<rect x='4' y='4' width='16' height='16' rx='4' />
				<path d='M8 12h8' />
			</svg>
		),
		titleKey: 'home.features.tailwind.title',
		descKey: 'home.features.tailwind.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-yellow-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6'
				/>
			</svg>
		),
		titleKey: 'home.features.vite.title',
		descKey: 'home.features.vite.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-blue-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2'
				/>
				<circle cx='9' cy='7' r='4' />
			</svg>
		),
		titleKey: 'home.features.eslint.title',
		descKey: 'home.features.eslint.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-pink-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M16 7a4 4 0 01-8 0'
				/>
				<rect x='4' y='3' width='16' height='18' rx='2' />
			</svg>
		),
		titleKey: 'home.features.prettier.title',
		descKey: 'home.features.prettier.desc',
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
				className='w-8 h-8 text-orange-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M17 16l4-4m0 0l-4-4m4 4H7'
				/>
			</svg>
		),
		titleKey: 'home.features.commitlint.title',
		descKey: 'home.features.commitlint.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-teal-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<rect x='4' y='4' width='16' height='16' rx='4' />
				<path d='M8 12h8' />
			</svg>
		),
		titleKey: 'home.features.zustand.title',
		descKey: 'home.features.zustand.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-indigo-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6'
				/>
			</svg>
		),
		titleKey: 'home.features.router.title',
		descKey: 'home.features.router.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-green-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<circle cx='12' cy='12' r='10' />
				<path d='M12 6v6l4 2' />
			</svg>
		),
		titleKey: 'home.features.dayjs.title',
		descKey: 'home.features.dayjs.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-blue-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<rect x='4' y='4' width='16' height='16' rx='4' />
				<path d='M8 12h8' />
			</svg>
		),
		titleKey: 'home.features.axios.title',
		descKey: 'home.features.axios.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-purple-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
				/>
			</svg>
		),
		titleKey: 'home.features.swr.title',
		descKey: 'home.features.swr.desc',
	},
	{
		icon: (
			<svg
				className='w-8 h-8 text-rose-400'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
				<path strokeLinecap='round' strokeLinejoin='round' d='M10 7v6l4 2' />
			</svg>
		),
		titleKey: 'home.features.nuqs.title',
		descKey: 'home.features.nuqs.desc',
	},
]

const ExampleView = () => {
	const {t} = useTranslation()
	const {openModal} = useModalStore()
	useClearModals([MODAL_KEYS.DEMO_MODAL])

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
								openModal(MODAL_KEYS.DEMO_MODAL, {
									message: t('home.modalDemoMessage'),
									data: {name: t('home.modalDemoName')},
								})
							}
						>
							{t('home.modalDemo')}
						</button>
					</div>

					<section className='w-full max-w-xl flex flex-col items-center mt-[40px]'>
						<SearchDemo />
						<SearchResult />
					</section>
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
					<div className='flex justify-center items-center my-10'>
						<div className='relative inline-flex  group'>
							<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
							<a
								href='https://turbo-setup.vercel.app/'
								title='Get quote now'
								className='relative inline-flex items-center justify-center px-4 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900/80 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
								role='button'
								target='_blank'
							>
								🚀 TURBO SETUP 🏠
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExampleView
