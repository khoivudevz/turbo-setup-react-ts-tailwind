import {useTranslation} from 'react-i18next'

const SwitchLanguage = () => {
	const {i18n} = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<div>
			<button
				className='px-4 py-2 bg-blue-500 text-white rounded'
				onClick={() => changeLanguage('en')}
			>
				English
			</button>
			<button
				className='px-4 py-2 bg-green-500 text-white rounded ml-2'
				onClick={() => changeLanguage('ko')}
			>
				Korean
			</button>
		</div>
	)
}

export default SwitchLanguage
