import {useEffect} from 'react'

type ModifierKeys = {
	ctrl?: boolean
	alt?: boolean
	shift?: boolean
}

const useKeypress = (
	key: string,
	action: () => void,
	modifiers?: ModifierKeys
) => {
	useEffect(() => {
		function onKeyup(e: KeyboardEvent) {
			if (
				e.key.toLowerCase() === key.toLowerCase() &&
				(!modifiers?.ctrl || e.ctrlKey) &&
				(!modifiers?.alt || e.altKey) &&
				(!modifiers?.shift || e.shiftKey)
			) {
				action()
			}
		}
		window.addEventListener('keyup', onKeyup)
		return () => window.removeEventListener('keyup', onKeyup)
	}, [key, action, modifiers])
}

export default useKeypress
