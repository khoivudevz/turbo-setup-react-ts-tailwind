'use client'

import {useQueryState} from 'nuqs'
import {useTranslation} from 'react-i18next'

const SearchResult = () => {
	const {t} = useTranslation()
	const [name] = useQueryState('name')

	return (
		<div className='my-4 w-full max-w-md mx-auto'>
			<div className='bg-gray-900/80 border-2 border-transparent bg-clip-padding rounded-xl px-6 py-4 shadow-lg relative overflow-hidden'>
				<div
					className='absolute -inset-0.5 rounded-xl pointer-events-none'
					style={{
						background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)',
						opacity: 0.2,
					}}
				></div>
				<p className='relative z-10 text-pink-300 font-semibold text-lg'>
					{t('search.result_label')}{' '}
					<span className='text-white font-bold'>{name}</span>
				</p>
			</div>
		</div>
	)

	return <></>
}

export default SearchResult
