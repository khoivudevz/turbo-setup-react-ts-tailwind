'use client'

import {useQueryState} from 'nuqs'
import {useTranslation} from 'react-i18next'

const SearchDemo = () => {
	const {t} = useTranslation()
	const [name, setName] = useQueryState('name')
	return (
		<div className='flex gap-2 w-full max-w-md'>
			<input
				value={name || ''}
				onChange={(e) => setName(e.target.value)}
				placeholder={t('search.placeholder')}
				className='flex-1 bg-gray-800/80 border border-gray-700 text-white rounded-l-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md placeholder-gray-400 transition-all duration-300'
			/>
			<button
				onClick={() => setName(null)}
				className='bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-r-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500'
			>
				{t('search.clear')}
			</button>
		</div>
	)
}

export default SearchDemo
