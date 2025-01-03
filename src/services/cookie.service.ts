export const cookieKey = {
	USER_INFO: 'USER_INFO',
	ACCESS_TOKEN: 'ACCESS_TOKEN',
}

export const cookieServices = {
	// Set a cookie
	setCookie: (
		key: string,
		value: string,
		options?: {days?: number; path?: string}
	) => {
		let cookieString = `${key}=${encodeURIComponent(value)};`

		// Set expiration days
		if (options?.days) {
			const date = new Date()
			date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000)
			cookieString += `expires=${date.toUTCString()};`
		}

		// Set path
		if (options?.path) {
			cookieString += `path=${options.path};`
		} else {
			cookieString += `path=/;` // Default path is root
		}

		document.cookie = cookieString
	},

	// Get a cookie
	getCookie: (key: string): string | null => {
		const cookieArray = document.cookie.split('; ')
		for (const cookie of cookieArray) {
			const [cookieKey, cookieValue] = cookie.split('=')
			if (cookieKey === key) {
				return decodeURIComponent(cookieValue)
			}
		}

		return null
	},

	// Remove a cookie
	removeCookie: (key: string, options?: {path?: string}) => {
		cookieServices.setCookie(key, '', {
			days: -1, // Set expiration to past date
			path: options?.path || '/', // Ensure path matches when removing
		})
	},
}

export const saveAuth = (accessToken: string) => {
	cookieServices.setCookie(cookieKey.ACCESS_TOKEN, accessToken)
}

export const getAuth = () => {
	return cookieServices.getCookie(cookieKey.ACCESS_TOKEN)
}

export const removeAuth = () => {
	cookieServices.removeCookie(cookieKey.ACCESS_TOKEN)
}
